import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "./components/Resume";
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
