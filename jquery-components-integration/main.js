$(function () {
  $('#selfie').click(function (e) {
    e.preventDefault();
    let cam = document.createElement('x-dot-face-auto-capture'); // since the components dont support reinitialisation, we need to make sure we have a fresh one
    $('#container')
      .empty() // remove any potential existing components
      .append(cam); // and append the newly created fresh copy
    loadFaceProps(); // and now that the component is rendered, we supply it with props to properly start it
  });

  $('#document').click(function (e) {
    // same as face component above, we need to make sure we're workign with a fresh copy before supplying it with props
    e.preventDefault();
    let cam = document.createElement('x-dot-document-auto-capture');
    $('#container').empty().append(cam);
    loadDocumentProps();
  });
});

async function handleDocumentPhotoTaken(image, data) {
  const img = await blobToImage(image);
  $('#container').empty().append(img);
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
  $('#container').empty().append(img);
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
  console.error(e);
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
