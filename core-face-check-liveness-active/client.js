const MIN_FACE_SIZE_RATIO = 0.01;
const MAX_FACE_SIZE_RATIO = 0.9;

const startButton = document.querySelector("#startButton");
const videoContainer = document.querySelector("#videoContainer");
const marker = document.querySelector("#marker");
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

async function getVideoFrame(vid) {
  const canvas = document.createElement("canvas");
  const { videoWidth, videoHeight } = vid;
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(vid, 0, 0, videoWidth, videoHeight);

  const blob = await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, "image/jpeg");
  });
  return blob;
}

async function buildRequestData(results) {
  const segments = [];
  for (let i = 0; i < results.length; i += 1) {
    const [dotPosition, blob] = results[i];
    const base64 = await blobToBase64(blob);
    segments.push({
      dotPosition,
      image: base64,
    });
  }

  return {
    segments,
    minValidSegmentCount: 4,
    faceSizeRatio: {
      min: MIN_FACE_SIZE_RATIO,
      max: MAX_FACE_SIZE_RATIO,
    },
  };
}

function displayResult(alertMessage, text) {
  window.alert(alertMessage);
  const info = document.createElement("pre");
  info.innerText = text;
  outputSection.hidden = false;
  outputSection.appendChild(info);
}

function displayError(text) {
  displayResult("error, check the details", text);
}

async function sendLivenessCheckRequest(results) {
  const requestData = await buildRequestData(results);

  const response = await fetch("/core/api/v6/face/check-liveness-active", {
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

const POSITIONS = [
  "TOP_RIGHT",
  "BOTTOM_RIGHT",
  "BOTTOM_LEFT",
  "TOP_LEFT",
  "BOTTOM_RIGHT",
  "TOP_RIGHT",
  "BOTTOM_LEFT",
  "TOP_LEFT",
];

const positionClassName = {
  TOP_LEFT: "top left",
  TOP_RIGHT: "top right",
  BOTTOM_LEFT: "bottom left",
  BOTTOM_RIGHT: "bottom right",
};

function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

async function livenessCheck(videoElem) {
  const results = [];
  for (let i = 0; i < POSITIONS.length; i += 1) {
    const pos = POSITIONS[i];
    const className = positionClassName[pos];
    marker.className = "animate " + className;
    await sleep(4000);
    const blob = await getVideoFrame(videoElem);
    results.push([pos, blob]);
  }

  marker.className = "";

  // we stop the camera and remove the video element
  videoElem.srcObject.getVideoTracks().forEach((track) => track.stop());
  videoElem.remove();

  sendLivenessCheckRequest(results);
}

startButton.addEventListener("click", async () => {
  // if we are on localhost, we can be on HTTP.
  // but if it is not localhost, it must be HTTPS.
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;
  if (
    hostname !== "localhost" &&
    hostname !== "127.0.0.1" &&
    protocol !== "https:"
  ) {
    window.alert("must be on HTTPS when not on localhost");
    return;
  }

  // on mobile devices we hve to use innerWidth/innerHeight,
  // 100vw/100vh is unreliable because the maybe-hidden
  // browser-elements on mobile
  videoContainer.style.width = window.innerWidth + "px";
  videoContainer.style.height = window.innerHeight + "px";

  startButton.hidden = true;
  videoContainer.hidden = false;

  const mediaDevices = navigator.mediaDevices;

  if (mediaDevices == null) {
    window.alert("navigator.mediaDevices is nullish");
    return;
  }

  mediaDevices
    .getUserMedia({
      video: { width: 1280, height: 720, facingMode: "user" },
      audio: false,
    })
    .then(
      (stream) => {
        const vid = document.createElement("video");
        vid.setAttribute("playsinline", "true");

        vid.addEventListener("canplay", () => {
          const vidW = vid.videoWidth;
          const vidH = vid.videoHeight;
          const divRect = videoContainer.getBoundingClientRect();
          const divW = divRect.width;
          const divH = divRect.height;
          const scale1 = divW / vidW;
          const scale2 = divH / vidH;
          const scale = Math.min(scale1, scale2);
          const w = scale * vidW;
          const h = scale * vidH;
          vid.style.width = w + "px";
          vid.style.height = h + "px";
          livenessCheck(vid);
        });

        vid.id = "videoElement";
        vid.srcObject = stream;
        vid.style.transform = "scaleX(-1)";
        vid.play().catch((error) => {
          window.alert("video.play error:" + error.toString());
        });

        videoContainer.appendChild(vid);
      },
      (error) => {
        window.alert("getUserMedia error:" + error.toString());
      }
    );
});
