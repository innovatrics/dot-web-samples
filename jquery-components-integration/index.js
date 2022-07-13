$(function () {
  $('#selfie').click(function () {
    let cam = document.createElement('x-dot-face-auto-capture'); // since the components dont support reinitialisation, we need to make sure we have a fresh one
    $('#container')
      .empty() // remove any potential existing components
      .append(cam); // and append the newly created fresh copy
    loadFaceProps(); // and now that the component is rendered, we supply it with props to properly start it
    resetState();
    $('#continue').on('click', continueFaceDetection);
  });

  $('#document').click(function () {
    // same as face component above, we need to make sure we're workign with a fresh copy before supplying it with props
    let cam = document.createElement('x-dot-document-auto-capture');
    $('#container').empty().append(cam);
    loadDocumentProps();
    resetState();
    $('#continue').on('click', continueDocumentDetection);
  });
});

function resetState() {
  $('#continue').attr("disabled", true);
  $('#result').empty();
  $('#continue').off('click', continueFaceDetection);
  $('#continue').off('click', continueDocumentDetection);
}

async function handleDocumentPhotoTaken(image, data) {
  const img = await blobToImage(image);
  console.log(data);
  $('#result').empty().append(img);
  $('#continue').attr("disabled", false);
}

// the component needs to have props supplied after first render, this must be done via the .prop() method, as attributes dont support objects and functions
function loadDocumentProps() {
  $('x-dot-document-auto-capture').prop('cameraOptions', {
    imageType: 'png',
    detectionLayerVisible: true,
    photoTakenCb: handleDocumentPhotoTaken,
    onError: handleError,
    samWasmUrl: 'lib/sam.wasm',
  });
}

async function handleFacePhotoTaken(image, data) {
  const img = await blobToImage(image);
  console.log(data);
  $('#result').empty().append(img);
  $('#continue').attr("disabled", false);
}

// the component needs to have props supplied after first render, this must be done via the .prop() method, as attributes dont support objects and functions
function loadFaceProps() {
  $('x-dot-face-auto-capture').prop('cameraOptions', {
    imageType: 'png',
    photoTakenCb: handleFacePhotoTaken,
    onError: handleError,
    samWasmUrl: 'lib/sam.wasm',
  });
}

function handleError(e) {
  alert(e);
}

function blobToImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.src = url;
  });
}

function continueDocumentDetection() {
  document.dispatchEvent(
    new CustomEvent('document-auto-capture', {
      detail: { instruction: 'continue-detection' },
    }),
  );
  $('#continue').attr("disabled", true);
}

function continueFaceDetection() {
  document.dispatchEvent(
    new CustomEvent('face-auto-capture', {
      detail: { instruction: 'continue-detection' },
    }),
  );
  $('#continue').attr("disabled", true);
}
