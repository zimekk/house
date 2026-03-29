import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Document from "./Document";

export default function Viewer() {
  return (
    <PDFViewer width="100%" height="100%">
      <Document />
    </PDFViewer>
  );
}
