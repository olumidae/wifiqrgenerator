import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./App.css";


function App() {
  const [ssid, SetSSID] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [qr, SetQR] = React.useState(null);

  const generateQR = () => {
    axios.post("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", { ssid, password })
      .then(res => {
        SetQR(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    // <div className="App">
    <div className="container">
      <div className="row">
        <h1 className="App display-1">Wi-Fi QR Generator</h1><i></i>
      </div>

      <Row 
        xs={1}
        md={2}
        className="g-4"
        style={{ marginTop: "20px" }}
        justify="center"
        align="center"
        noGutters={true}
        alignContent="center"
        // alignItems="center"
      >
        <Col>
          <div className="card" style={{ width: "28rem" }}>
         
            <div className="card-body">
              <h5 className="card-title">Enter Details</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>

        <Col xs={5}>
          <h5 className="card-title">QR Code</h5>

        </Col>
      </Row>
    </div>
    // </div>
  );
}

export default App;
