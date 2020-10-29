const detectButton = document.querySelector("#detect");
const fileInput = document.querySelector("#file");
const documentSelect = document.querySelector("#documents");
const loadingSection = document.querySelector("section#loading");
const inputSection = document.querySelector("section#input");
const outputSection = document.querySelector("section#output");

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

function displayError(text) {
  window.alert("error, check the details");
  const info = document.createElement("pre");
  info.innerText = text;
  outputSection.innerHTML = "";
  outputSection.appendChild(info);
}

detectButton.addEventListener("click", async () => {
  const documentType = documentSelect.value;
  const file = fileInput.files[0];

  if (file == null) {
    return;
  }

  const requestData = {
    image: await blobToBase64(file),
    normalizedDocumentImage: true,
    documentTypeAdvice:
      documentType === ""
        ? undefined
        : {
            ids: [documentType],
          },
  };

  const response = await fetch("/document/api/v5/document/ocr", {
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

  outputSection.innerHTML = "";

  // we copy it because we will modify it
  const jsonCopy = Object.assign({}, responseJSON);

  if (jsonCopy.normalizedImage != null) {
    const imageElem = document.createElement("img");
    imageElem.src =
      "data:application/octet-stream;base64," + jsonCopy.normalizedImage;
    imageElem.style.maxWidth = "50%";
    outputSection.appendChild(imageElem);
    jsonCopy.normalizedImage = "...";
  }

  const pre = document.createElement("pre");
  pre.innerText = JSON.stringify(jsonCopy, null, 4);
  outputSection.appendChild(pre);
  window.alert("success");
});

async function init() {
  const response = await fetch("/document/api/v5/document/metadata");
  if (response.status !== 200) {
    displayError(response.statusText);
    return;
  }

  const data = await response.json();

  const documentTypes = data.documentTypes.map((dt) => ({
    id: dt.id,
    displayName: dt.displayName,
  }));

  documentTypes.sort((a, b) => {
    if (a.displayName > b.displayName) {
      return 1;
    }

    if (a.displayName < b.displayName) {
      return -1;
    }

    return 0;
  });

  const options = documentTypes.map(
    (dt) => `<option value="${dt.id}">${dt.displayName}</option>`
  );

  const allOptions = ['<option selected value="">---</option>', ...options];

  documentSelect.innerHTML = allOptions.join("\n");

  loadingSection.style.display = "none";
  inputSection.style.display = "block";
}

init();
