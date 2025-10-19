# Resume Generator

The purpose of this package is to abstract away the logic dealing with formatting a resume for PDF output. It does not allow for any customization, mainly to help keep the focus on the content of the document. To use it, install the package and its dependencies:

```bash
npm install react react-dom @react-pdf/renderer @johnrdoty92/resume-generator
```

You can also get started with a [Vite](https://vite.dev/) template and just install the following:

```bash
npm install @react-pdf/renderer @johnrdoty92/resume-generator
```

## Quickstart

The main export of this library is a single `react-pdf` [`Document` component](https://react-pdf.org/components#document). Simply pass it the props it requires and render it according to react-pdf's [documentation](https://react-pdf.org/).

### Example

```ts
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "@johnrdoty92/resume-generator";
import { staticResume } from "./staticResume";
import "./index.css";

function App() {
  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Resume {...staticResume} />
    </PDFViewer>
  );
}

export default App;
```
