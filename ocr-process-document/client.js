const detectButton = document.querySelector("#detect");
const file1Input = document.querySelector("#file1");
const file2Input = document.querySelector("#file2");
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
  const file1 = file1Input.files[0];
  const file2 = file2Input.files[0];

  if (file1 == null && file2 == null) {
    return;
  }

  const images = [];

  if (file1 != null) {
    images.push({
      name: "image1",
      data: await blobToBase64(file1),
    });
  }

  if (file2 != null) {
    images.push({
      name: "image2",
      data: await blobToBase64(file2),
    });
  }

  const requestData = {
    images,
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
    displayError(response.statusText);
    return;
  }

  const responseJSON = await response.json();

  // we check if all is ok.
  // in our case all is ok if we get a pages-array,
  // and every page has a `normalizedImage`
  if (
    responseJSON.pages != null &&
    responseJSON.pages.every((p) => p.normalizedImage != null)
  ) {
    outputSection.innerHTML = "";
    responseJSON.pages.forEach((page) => {
      // we copy it because we will modify it
      const pageCopy = Object.assign({}, page);
      if (pageCopy.normalizedImage != null) {
        const imageElem = document.createElement("img");
        imageElem.src =
          "data:application/octet-stream;base64," + pageCopy.normalizedImage;
        imageElem.style.maxWidth = "50%";
        outputSection.appendChild(imageElem);
        pageCopy.normalizedImage = "...";
      }

      const pre = document.createElement("pre");
      pre.innerText = JSON.stringify(pageCopy, null, 4);
      outputSection.appendChild(pre);
    });
    window.alert("success");
  } else {
    window.alert("error");
    displayError(JSON.stringify(responseJSON, null, 4));
  }
});

async function init() {
  const response = await fetch("/ocr/api/v3/active-models");
  if (response.status !== 200) {
    displayError(response.statusText);
    return;
  }

  const data = await response.json();

  const options = data.models.map(
    (m) => `<option value="${m.modelMetadataId}">${m.displayName}</option>`
  );

  documentSelect.innerHTML = options.join("\n");

  loadingSection.style.display = "none";
  inputSection.style.display = "block";
}

init();
