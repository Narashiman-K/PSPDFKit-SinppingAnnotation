import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import {
  ThemeProvider,
  I18nProvider,
  Link,
  Avatar,
  FileUpload,
  ActionButton,
} from "@baseline-ui/core";
import "@baseline-ui/icons/dist/index.css";
import "@baseline-ui/recipes/dist/index.css";
import "./App.css";

function App() {
  const [document, setDocument] = useState<string>("document1.pdf");
  const [handleAnnotation, setHandleAnnotation] = useState<string>("set");
  const handleAnnotationCoordinates = () => {
    if (handleAnnotation === "set") setHandleAnnotation("get");
    else setHandleAnnotation("set");
  };

  const handleFileSelected = (files: FileList) => {
    if (files && files.length > 0) {
      const fileUrl = URL.createObjectURL(files[0]);
      setDocument(fileUrl);
      setHandleAnnotation("get");
    }
  };

  return (
    <ThemeProvider>
      <I18nProvider locale="en-US">
        <div className="background"></div>
        <h1 className="first-heading">
          Snipping ...
          <span className="first-heading--special">Annotations</span>
          <Link
            href="https://pspdfkit.com"
            target="_blank"
            size="lg"
            style={{ alignItems: "center", width: "50px" }}
          >
            <Avatar
              name="Narashiman"
              size="md"
              hasNotifications
              style={{ color: "red", alignItems: "center", width: "50px" }}
            />
          </Link>
        </h1>
        <div className="container">
          <section className="stats">
            <section className="stat">
              <FileUpload
                label="Click here to Upload"
                onChange={handleFileSelected}
                variant="inline"
                onValueChange={(files) => handleFileSelected(files)}
                className="btnstyleUpload"
              />
              <br />
              <ActionButton
                label="Save Annotation as Image"
                onPress={handleAnnotationCoordinates}
                className="btnstyle"
              />
            </section>
          </section>
          <div className="textarea">
            <PdfViewerComponent
              document={document}
              handleAnnotation={handleAnnotation}
            />
          </div>
        </div>
        <footer className="footer">
          <small className="copyright">
            Narashiman - &copy; Copyright ® 2010-2024 PSPDFKit GmbH. All Rights
            Reserved
          </small>
        </footer>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
