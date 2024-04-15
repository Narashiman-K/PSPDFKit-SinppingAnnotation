import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

import {
  ThemeProvider,
  I18nProvider,
  Link,
  Avatar,
  FileUpload,
  Accordion,
  AccordionItem,
  ActionButton,
  Slider,
  TextInput,
} from "@baseline-ui/core";
import { MinusIcon } from "@baseline-ui/icons/24";

function App() {
  const [document, setDocument] = useState<string>("document1.pdf");
  const [toolbar, setToolbar] = useState<string>("default");
  const [value, setValue] = useState<number>(50);

  const handleFileSelected = (files) => {
    if (files && files.length > 0) {
      const fileUrl = URL.createObjectURL(files[0]);
      setDocument(fileUrl);
      setToolbar("default");
    }
  };

  const handleDocumentEdit = () => {
    setToolbar("document-editor");
  };

  const handleContentEditor = () => {
    setToolbar("content-editor");
  };

  const handleoutofscope = () => {
    setToolbar("outofscope");
  };

  return (
    <>
      <ThemeProvider>
        <I18nProvider locale="en-US">
          <div className="background">
            <h1 className="first-heading">
              Learning
              <span className="first-heading--special">Baseline-UI</span>
            </h1>
            <Link
              href="https://pspdfkit.com"
              target="_blank"
              size="lg"
              style={{ alignItems: "center", width: "50px" }}
            >
              <Avatar
                name="Narashiman Krishnamurthy"
                size="md"
                imgSrc="/simha.jpg"
                hasNotifications
              />
            </Link>
          </div>
          <div className="container">
            <div className="left-column textarea">
              <Slider
                includeNumberInput
                label="Slider label"
                maxValue={1}
                minValue={0}
                numberFormatOptions={{
                  style: "percent",
                }}
                onChange={function Da() {}}
                onChangeEnd={function Da() {}}
                step={0.01}
              />
              <br />
              <br />
              <FileUpload
                label="Click here to Upload"
                onChange={handleFileSelected}
                variant="inline"
                className="btnstyle"
                onValueChange={(files) => handleFileSelected(files)}
              />
              <br></br>
              <br></br>
              <Accordion expansionMode={"single"}>
                <AccordionItem title="Editors" value="editor-1">
                  <ActionButton
                    label="Content Editor"
                    onPress={handleContentEditor}
                    className="btnstyle"
                  />
                  <br></br>
                  <br></br>
                  <ActionButton
                    label="Document Editor"
                    onPress={handleDocumentEdit}
                    className="btnstyle"
                  />
                </AccordionItem>
              </Accordion>
              <br></br>
              <br></br>
              <button
                id="outofscope"
                type="button"
                onClick={handleoutofscope}
                className="btnstyle"
              >
                outofscope
              </button>
              <br></br>
              <br></br>
              <MinusIcon size={24} />
              <br />
              <br />
              <TextInput
                aria-label="test"
                onBeforeInput={function Da() {}}
                onBlur={function Da() {}}
                onChange={(value) => console.log(value)}
                onCompositionEnd={function Da() {}}
                onCompositionStart={function Da() {}}
                onCompositionUpdate={function Da() {}}
                onCopy={function Da() {}}
                onCut={function Da() {}}
                onFocus={function Da() {}}
                onFocusChange={(value) => console.log(value)}
                onInput={function Da() {}}
                onKeyDown={function Da() {}}
                onKeyUp={function Da() {}}
                onPaste={function Da() {}}
                onSelect={function Da() {}}
                placeholder="Placeholder"
              />
            </div>
            <div className="right-column">
              <PdfViewerComponent document={document} toolbar={toolbar} />
            </div>
          </div>
          <footer>
            <p>© Copyright ® 2010-2024 PSPDFKit GmbH. All Rights Reserved</p>
          </footer>
        </I18nProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
