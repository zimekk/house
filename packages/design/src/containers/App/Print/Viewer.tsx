import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Document from "./Document";

export default function Viewer() {
  return (
    <PDFViewer>
      <Document />
    </PDFViewer>
  );
}
