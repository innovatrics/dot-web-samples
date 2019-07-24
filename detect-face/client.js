const MIN_EYE_DISTANCE = 0.01;
const MAX_EYE_DISTANCE = 0.9;

const detectFromDiskButton = document.querySelector("#detectFaceFromDisk");
const fileInput = document.querySelector("#fileInput");
const captureButton = document.querySelector("#captureButton");
const detectFromVideoButton = document.querySelector("#detectFaceFromVideo");
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

async function buildRequestData(blob) {
  const blobBase64 = await blobToBase64(blob);
  return {
    image: {
      data: blobBase64,
      eyeDistance: {
        min: MIN_EYE_DISTANCE,
        max: MAX_EYE_DISTANCE
      }
    },
    template: false,
    cropImage: true,
    facialFeatures: true,
    icaoAttributes: true
  };
}

function displayError(text) {
  window.alert("error, check the details");
  const info = document.createElement("pre");
  info.innerText = text;
  outputSection.innerHTML = "";
  outputSection.appendChild(info);
}

async function detectFace(blob) {
  const requestData = await buildRequestData(blob);

  const response = await fetch("/api/v3/detect-face", {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.status !== 200) {
    displayError(response.statusText);
    return;
  }

  const responseJSON = await response.json();

  if (responseJSON.score != null) {
    outputSection.innerHTML = "";
    const { score, cropImage } = responseJSON;
    const image = document.createElement("img");
    image.src = "data:application/octet-stream;base64," + cropImage;
    image.style.maxWidth = "50%";
    outputSection.appendChild(image);
    const pre = document.createElement("pre");
    const shortenedResponse = Object.assign({}, responseJSON);
    shortenedResponse.cropImage = "...";
    pre.innerText = JSON.stringify(shortenedResponse, null, 4);
    outputSection.appendChild(pre);
    window.alert("Score: " + score);
  } else {
    displayError(JSON.stringify(responseJSON, null, 4));
  }
}

detectFromDiskButton.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (file == null) {
    return;
  }

  return detectFace(file);
});

captureButton.addEventListener("click", async () => {
  captureButton.disabled = true;

  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1000 },
    audio: false
  });

  const vid = document.createElement("video");
  vid.id = "videoElement";
  vid.srcObject = stream;
  vid.style.maxWidth = "50%";
  vid.style.transform = "scaleX(-1)";
  vid.play();

  document.body.appendChild(vid);
});

detectFromVideoButton.addEventListener("click", async () => {
  const vid = document.querySelector("#videoElement");
  if (vid == null) {
    return;
  }

  const canvas = document.createElement("canvas");
  const { videoWidth, videoHeight } = vid;
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(vid, 0, 0, videoWidth, videoHeight);

  // we stop the camera and remove the video element
  vid.srcObject.getVideoTracks().forEach(track => track.stop());
  vid.remove();

  const blob = await new Promise(resolve => {
    canvas.toBlob(blob => {
      resolve(blob);
    });
  });
  return detectFace(blob);
});
