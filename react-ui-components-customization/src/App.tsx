import { useCallback, useState } from "react";
import "./styles/index.css";
import { FaceComponentCustomization } from "./components/FaceComponentCustomization";
import type {
  CallbackImage,
  FaceOnCompleteCallbackImage,
} from "@innovatrics/dot-face-auto-capture";

function App() {
  const [photoUrl, setPhotoUrl] = useState<string>();

  function handlePhotoTaken<T>(imageData: CallbackImage<T>) {
    const imageUrl = URL.createObjectURL(imageData.image);

    setPhotoUrl(imageUrl);
  }

  function handleFaceCapturePhotoTaken(imageData: FaceOnCompleteCallbackImage) {
    handlePhotoTaken(imageData);
  }

  const handleError = useCallback((error: Error) => {
    alert(error);
  }, []);

  return (
    <div className="app">
      <h1>Customized UI</h1>
      <FaceComponentCustomization
        onError={handleError}
        onPhotoTaken={handleFaceCapturePhotoTaken}
      />
      {photoUrl && (
        <div>
          <img alt="Web component result" src={photoUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
