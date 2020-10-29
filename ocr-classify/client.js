const classifyButton = document.querySelector("#classify");
const fileInput = document.querySelector("#file");
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

classifyButton.addEventListener("click", async () => {
  const f = fileInput.files[0];

  if (f == null) {
    return;
  }

  const requestData = {
    images: [
      {
        name: "image1",
        data: await blobToBase64(f),
      },
    ],
  };

  const response = await fetch("/ocr/api/v3/classify", {
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

  outputSection.innerHTML =
    "<pre>" + JSON.stringify(responseJSON, null, 4) + "</pre>";
});
