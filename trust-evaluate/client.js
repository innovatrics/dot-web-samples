const MIN_FACE_SIZE_RATIO = 0.01;
const MAX_FACE_SIZE_RATIO = 0.9;

const startButton = document.querySelector("#start");
const imageInput = document.querySelector("#image");
const documentInput = document.querySelector("#document");
const outputSection = document.querySelector("#output");
const documentSelect = document.querySelector("#documents");
const loadingSection = document.querySelector("section#loading");
const inputSection = document.querySelector("section#input");

function blobToBase64(blob) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.addEventListener("load", () => {
      const { result } = reader;
      if (result.startsWith("data:image/png;base64,")) {
        resolve(result.slice(22));
        return;
      }
      if (result.startsWith("data:image/jpeg;base64,")) {
        resolve(result.slice(23));
        return;
      }
      reject(new Error("wrong image-data"));
    });
    reader.readAsDataURL(blob);
  });
}

function clearResult() {
  outputSection.innerHTML = "";
}

function displayResult(alertMsg, text) {
  clearResult(); // remove previous results, if exist
  window.alert(alertMsg);
  const info = document.createElement("pre");
  info.innerText = text;
  outputSection.appendChild(info);
}

function displayError(text) {
  displayResult("error, check the details", text);
}

async function getDocumentTypes() {
  const response = await fetch("/ocr/api/v3/active-models");
  if (response.status !== 200) {
    throw new Error(`get-document-types failed: ${response.status}`);
  }

  const data = await response.json();
  return data.models.map((item) => ({
    id: item.modelMetadataId,
    displayName: item.displayName,
  }));
}

async function ocrDocument(document) {
  const documentType = documentSelect.value;
  const requestData = {
    images: [
      {
        name: "image1",
        data: await blobToBase64(document),
      },
    ],
    modelMetadataIds: [documentType],
  };
  const response = await fetch("/ocr/api/v3/process-document", {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error(`document-ocr-response: ${response.status}`);
  }

  const responseJSON = await response.json();

  if (responseJSON.errorCode != null) {
    throw new Error(responseJSON.errorCode);
  }

  return responseJSON;
}

async function evalTrust(image, document) {
  const imageBase64 = await blobToBase64(image);
  let documentData = null;
  try {
    documentData = await ocrDocument(document);
  } catch (e) {
    console.error(e);
    displayError("document-processing failed");
    return;
  }

  const documentPages = documentData.pages.map((page) => ({
    prediction: page.prediction.toUpperCase(),
    textFields: page.textFields.map((f) => ({
      id: f.id,
      lines: f.lines.map((line) => ({
        roi: line.roi,
        confidence: line.confidence,
        recognizedValue: line.text,
      })),
    })),
    imageFields: page.imageFields,
    normalizedImage: page.normalizedImage,
  }));

  const modelMetadataId = documentData.pages[0].modelMetadataId;

  const requestData = {
    document: {
      modelMetadataId,
      pages: documentPages,
    },
    faceCapture: {
      images: [
        {
          data: imageBase64,
          primary: true,
        },
      ],
      faceSizeRatio: {
        min: MIN_FACE_SIZE_RATIO,
        max: MAX_FACE_SIZE_RATIO,
      },
    },
    livenessCheck: {
      faceSizeRatio: {
        min: MIN_FACE_SIZE_RATIO,
        max: MAX_FACE_SIZE_RATIO,
      },
      segments: [
        {
          image: imageBase64,
          position: "TOP_LEFT",
        },
        {
          image: imageBase64,
          position: "TOP_RIGHT",
        },
        {
          image: imageBase64,
          position: "BOTTOM_LEFT",
        },
        {
          image: imageBase64,
          position: "BOTTOM_RIGHT",
        },
      ],
    },
  };

  const response = await fetch("/trust/api/v1/evaluate", {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    displayError(response.statusText);
    return;
  }

  const responseJSON = await response.json();

  if (responseJSON.errorCode != null) {
    displayError(responseJSON.errorCode);
    return;
  }

  displayResult("success", JSON.stringify(responseJSON, null, 4));
}

async function init() {
  const documentTypes = await getDocumentTypes();

  const options = documentTypes.map(
    (dt) => `<option value="${dt.id}">${dt.displayName}</option>`
  );

  documentSelect.innerHTML = options.join("\n");

  loadingSection.style.display = "none";
  inputSection.style.display = "block";

  startButton.addEventListener("click", () => {
    const image = imageInput.files[0];
    const document = documentInput.files[0];

    if (image == null || document == null) {
      return;
    }

    // do not display previous-results while we fetch the new results
    clearResult();

    evalTrust(image, document);
  });
}

init();
