import { useState } from "react";
import "./App.css";
import { QRScanner } from "./components/qrcode-scanner";

function App() {
  const [isOpenQr, setOpenQr] = useState(false);
  return (
    <>
      <p>QR Code scanner</p>
      <button
        type="button"
        onClick={() => setOpenQr((prev) => !prev)}
        style={{ backgroundColor: "black", color: "white" }}
      >
        {isOpenQr ? "Close Scanner" : "Scan QR"}
      </button>
      {isOpenQr && <QRScanner />}
    </>
  );
}

export default App;
