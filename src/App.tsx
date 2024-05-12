import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import axios from "axios";

interface WifiDetails {
  ssid: string;
  password: string;
  encryption: "WPA" | "WEP" | "None";
}

function App() {
  const [wifiDetails, setWiFiDetails] = useState<WifiDetails>({
    ssid: "",
    password: "",
    encryption: "WPA",
  });
  const [qrImage, setQRImage] = useState<string>("");

  const GenerateQRCode = async (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(wifiDetails);
    if (wifiDetails.ssid === "" || wifiDetails.password === "") {
      alert("Please enter Wi-Fi details");
      return;
    }

    try {
      await axios.post("http://localhost:8000/createqr", wifiDetails).then(res => {
        console.log(res);
        setQRImage(res.data.qrcode);
      })

    } catch (error) {
      console.log(error)
    }    

    
  };

  return (
    // <div className="App">
    <div className="container">
      <div className="row">
        <h1 className="App display-1">Wi-Fi QR Code Generator</h1>
        <i></i>
      </div>

      <Row
        // xs={1}
        md={2}
        className="g-4"
        style={{ marginTop: "20px" }}
        justify="center"
        // noGutters={true}
      >
        <Col>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Enter Details</h5>
              <form>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Wi-Fi Name
                  </label>
                  <input
                    type="text"
                    value={wifiDetails.ssid}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="ssidHelp"
                    placeholder="Enter your Wi-Fi name"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setWiFiDetails({ ...wifiDetails, ssid: e.target.value });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={wifiDetails.password}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your Wi-Fi paassword"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setWiFiDetails({
                        ...wifiDetails,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
               
                <div className="mb-3">
                  <label htmlFor="exampleInputEnc" className="form-label">
                    Encryption
                  </label>{"  "}
                  <select onChange={
                    (e: React.ChangeEvent<HTMLSelectElement>) => {
                      setWiFiDetails({
                        ...wifiDetails,
                        encryption: e.target.value as WifiDetails["encryption"],
                      });
                    }
                  }>
                    <option value="WPA">WPA/WPA2/WPA3</option>
                    <option value="WEP">WEP</option>
                    <option value="None">None</option>
                  </select>

                </div>
              </form>

              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
                onClick={GenerateQRCode}
              >
                Generate QR Code
              </button>
            </div>
          </div>
        </Col>

        <Col md={5}>

          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">QR Code</h5>
              <div className="card-text">

                { qrImage && <img src={qrImage} alt="QR Image" style={{ width: "100%", height: "100%" }}  /> }
              </div>
            </div>
          </div>

        </Col>
      </Row>
    </div>
    // </div>
  );
}

export default App;

