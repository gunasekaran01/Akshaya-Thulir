import React, { useState } from "react";
import Api from "./api";
import "./demo.css"

function Satheesh() {
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [getname, setGetname] = useState("");
  const [getname1, setGetname1] = useState([]); 
  const [response, setResponse] = useState("");

  const pay = {
    name: name,
    age: age,
  };

  const sendData = async () => {
    const res = await Api.post("/send", pay);
    setResponse(res.data.recived_name);
  };

  const getdata = async () => {
    const res = await Api.get("/getdata", {
      params: { par1: getname },
    });
    setGetname1(res.data); 
  };

  return (
    <div className="form">
      <input
      className="in-box"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
      className="in-box"
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />

      <input
      className="in-box"

        type="text"
        placeholder="enter name"
        onChange={(e) => setGetname(e.target.value)}
      />

      <button className="in-box-bt-su" onClick={sendData}>Submit</button>
      <button className="in-box-bt-su" onClick={getdata}>Get</button>

      {/* <h2>{response}</h2> */}

    
      {getname1.map((item) => (
        <h1 className="h1-na">
          {item.name} - {item.age}
        </h1>
      ))}
    </div>
  );
}

export default Satheesh;
