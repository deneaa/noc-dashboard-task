import React from "react";
import Button from "../Button/Button";

const Device = ({ name, type, status, load, simulateTraffic, flushCache }) => {
  let color = "";
  if (load < 70) {
    color = "green";
    status = "Active";
  } else if (load < 90) {
    color = "yellow";
    status = "Warning";
  } else {
    color = "red";
    status = "Critical";
  }

  return (
    <>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>Load: {load}</p>
      <p style={{ color: color }}>{status}</p>

      <div style={{ display: "flex" }}>
        <Button
          text={"Simulate Traffic"}
          color={"blue"}
          onClick={simulateTraffic}
        />
        <Button text={"Flush Cache"} color={"green"} onClick={flushCache} />
      </div>
    </>
  );
};

export default Device;
