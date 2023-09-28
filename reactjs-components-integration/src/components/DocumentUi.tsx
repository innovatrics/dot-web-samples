import "@innovatrics/dot-auto-capture-ui/document";
import { useEffect } from "react";
import type {
  DocumentUiProps,
  HTMLDocumentUiElement,
} from "@innovatrics/dot-auto-capture-ui/document";

function DocumentUi(props: DocumentUiProps) {
  useEffect(() => {
    const uiElement = document.getElementById(
      "x-dot-document-auto-capture-ui",
    ) as HTMLDocumentUiElement | null;

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return <x-dot-document-auto-capture-ui id="x-dot-document-auto-capture-ui" />;
}

export default DocumentUi;
