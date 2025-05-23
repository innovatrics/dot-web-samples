$(function () {
  $('#face').click(function () {
    let cam = document.createElement('x-dot-face-auto-capture'); // since the components don't support reinitialization, we need to make sure we have a fresh one
    let ui = document.createElement('x-dot-face-auto-capture-ui');
    cam.setAttribute('id', 'x-dot-face-auto-capture');
    ui.setAttribute('id', 'x-dot-face-auto-capture-ui');
    $('#container')
      .empty() // remove any potential existing components
      .append(cam) // and append the newly created fresh copy
      .append(ui); // append newly created ui
    loadFaceProps(); // and now that the component is rendered, we supply it with props to properly start it
    loadFaceUiProps();
    resetState();
    $('#continue').on('click', continueFaceDetection);
  });

  $('#document').click(function () {
    // same as face component above, we need to make sure we're working with a fresh copy before supplying it with props
    let cam = document.createElement('x-dot-document-auto-capture');
    let ui = document.createElement('x-dot-document-auto-capture-ui');
    cam.setAttribute('id', 'x-dot-document-auto-capture');
    ui.setAttribute('id', 'x-dot-document-auto-capture-ui');
    $('#container').empty().append(cam).append(ui);
    loadDocumentProps();
    loadDocumentUiProps();
    resetState();
    $('#continue').on('click', continueDocumentDetection);
  });

  $('#palm').click(function () {
    // same as face component above, we need to make sure we're working with a fresh copy before supplying it with props
    let cam = document.createElement('x-dot-palm-capture');
    let ui = document.createElement('x-dot-palm-capture-ui');
    cam.setAttribute('id', 'x-dot-palm-capture');
    ui.setAttribute('id', 'x-dot-palm-capture-ui');
    $('#container').empty().append(cam).append(ui);
    loadPalmProps();
    loadPalmUiProps();
    resetState();
    $('#continue').on('click', continuePalmDetection);
  });

  $('#magnifeye').click(function () {
    // same as face component above, we need to make sure we're working with a fresh copy before supplying it with props
    let cam = document.createElement('x-dot-magnifeye-liveness');
    let ui = document.createElement('x-dot-magnifeye-liveness-ui');
    cam.setAttribute('id', 'x-dot-magnifeye-liveness');
    ui.setAttribute('id', 'x-dot-magnifeye-liveness-ui');
    $('#container').empty().append(cam).append(ui);
    loadMagnifEyeProps();
    loadMagnifEyeUiProps();
    resetState();
    $('#continue').on('click', continueMagnifEyeDetection);
  });

  $('#smile').click(function () {
    // same as face component above, we need to make sure we're working with a fresh copy before supplying it with props
    let cam = document.createElement('x-dot-smile-liveness');
    let ui = document.createElement('x-dot-smile-liveness-ui');
    cam.setAttribute('id', 'x-dot-smile-liveness');
    ui.setAttribute('id', 'x-dot-smile-liveness-ui');
    $('#container').empty().append(cam).append(ui);
    loadSmileProps();
    loadSmileUiProps();
    resetState();
    $('#continue').on('click', continueSmileDetection);
  });

});

// component event handlers

async function handleDocumentPhotoTaken(imageData, content) {
  const img = await blobToImage(imageData.image);
  $('#result').empty().append(img);
  $('#continue').attr('disabled', false);
}

async function handleFacePhotoTaken(imageData, content) {
  const img = await blobToImage(imageData.image);
  $('#result').empty().append(img);
  $('#continue').attr('disabled', false);
}

async function handlePalmPhotoTaken(imageData, content) {
  const img = await blobToImage(imageData.image);
  $('#result').empty().append(img);
  $('#continue').attr('disabled', false);
}

/**
 * At this point use @content property with Digital Identity Service in order to evaluate the MagnifEye liveness score.
 * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
 */
async function handleMagnifEyeComplete(imageData, content) {
  const img = await blobToImage(imageData.image);
  $('#result').empty().append(img);
  $('#continue').attr('disabled', false);
}

async function handleSmileComplete(imageData, content) {
  const [, smileImageData] = imageData;
  const img = await blobToImage(smileImageData.image);
  $('#result').empty().append(img);
  $('#continue').attr('disabled', false);
}

// component props

function loadDocumentProps() {
  $('x-dot-document-auto-capture').prop('cameraOptions', {
    onPhotoTaken: handleDocumentPhotoTaken,
    onError: handleError,
    cameraFacing: 'environment',
  });
}

function loadDocumentUiProps() {
  $('x-dot-document-auto-capture-ui').prop('props', {
    showCameraButtons: true,
    // customize document UI props here
    // DOCS: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/
  });
}

// the component needs to have props supplied after first render, this must be done via the .prop() method, as attributes dont support objects and functions
function loadFaceProps() {
  $('x-dot-face-auto-capture').prop('cameraOptions', {
    onPhotoTaken: handleFacePhotoTaken,
    onError: handleError,
    cameraFacing: 'user',
  });
}

function loadFaceUiProps() {
  $('x-dot-face-auto-capture-ui').prop('props', {
    showCameraButtons: true,
    // customize face UI props here
    // DOCS: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-face/latest/documentation/
  });
}

function loadPalmProps() {
  $('x-dot-palm-capture').prop('cameraOptions', {
    onPhotoTaken: handlePalmPhotoTaken,
    onError: handleError,
    cameraFacing: 'environment',
  });
}

function loadPalmUiProps() {
  $('x-dot-palm-capture-ui').prop('props', {
    showCameraButtons: true,
  });
}

function loadMagnifEyeProps() {
  $('x-dot-magnifeye-liveness').prop('props', {
    onComplete: handleMagnifEyeComplete,
    onError: handleError,
  });
}

function loadMagnifEyeUiProps() {
  $('x-dot-magnifeye-liveness-ui').prop('props', {
    showCameraButtons: true,
    // customize magnifEye UI props here
    // DOCS: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-magnifeye-liveness/latest/documentation/
  });
}

function loadSmileProps() {
  $('x-dot-smile-liveness').prop('props', {
    onComplete: handleSmileComplete,
    onError: handleError,
  });
}

function loadSmileUiProps() {
  $('x-dot-smile-liveness-ui').prop('props', {
    showCameraButtons: true,
  });
}

// component control events

function continueDocumentDetection() {
  document.dispatchEvent(
    new CustomEvent('document-auto-capture:control', {
      detail: { instruction: 'continue-detection' },
    })
  );
  $('#continue').attr('disabled', true);
}

function continueFaceDetection() {
  document.dispatchEvent(
    new CustomEvent('face-auto-capture:control', {
      detail: { instruction: 'continue-detection' },
    })
  );
  $('#continue').attr('disabled', true);
}

function continuePalmDetection() {
  document.dispatchEvent(
    new CustomEvent('palm-capture:control', {
      detail: { instruction: 'continue-detection' },
    })
  );
  $('#continue').attr('disabled', true);
}

function continueSmileDetection() {
  document.dispatchEvent(
    new CustomEvent('smile-auto-capture:control', {
      detail: { instruction: 'continue-detection' },
    })
  );
}

function continueMagnifEyeDetection() {
  document.dispatchEvent(
    new CustomEvent('magnifeye-auto-capture:control', {
      detail: { instruction: 'continue-detection' },
    })
  );
}

// global functions

function resetState() {
  $('#continue').attr('disabled', true);
  $('#result').empty();
  $('#continue').off('click', continueFaceDetection);
  $('#continue').off('click', continueDocumentDetection);
  $('#continue').off('click', continuePalmDetection);
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
