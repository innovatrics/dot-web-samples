const MIN_FACE_SIZE_RATIO = 0.01;
const MAX_FACE_SIZE_RATIO = 0.9;

const verifyButton = document.querySelector("#verifyButton");
const image1Input = document.querySelector("#image1");
const image2Input = document.querySelector("#image2");
const outputSection = document.querySelector("#output");

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

async function buildRequestData(blob1, blob2) {
  const blob1Base64 = await blobToBase64(blob1);
  const blob2Base64 = await blobToBase64(blob2);

  return {
    probeImage: {
      data: blob1Base64,
      faceSizeRatio: {
        min: MIN_FACE_SIZE_RATIO,
        max: MAX_FACE_SIZE_RATIO,
      },
    },
    referenceImage: {
      data: blob2Base64,
      faceSizeRatio: {
        min: MIN_FACE_SIZE_RATIO,
        max: MAX_FACE_SIZE_RATIO,
      },
    },
  };
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

async function verifyFace(blob1, blob2) {
  const requestData = await buildRequestData(blob1, blob2);

  const response = await fetch("/core/api/v6/face/verify", {
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

  if (responseJSON.score != null) {
    const { score } = responseJSON;
    displayResult("Score: " + score, JSON.stringify(responseJSON, null, 4));
  } else {
    displayError(JSON.stringify(responseJSON, null, 4));
  }
}

verifyButton.addEventListener("click", () => {
  const image1 = image1Input.files[0];
  const image2 = image2Input.files[0];

  if (image1 == null || image2 == null) {
    return;
  }

  // do not display previous-results while we fetch the new results
  clearResult();

  verifyFace(image1, image2);
});
