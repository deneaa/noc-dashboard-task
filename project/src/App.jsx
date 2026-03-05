import "./App.css";
import React, { useState } from "react";
import SummaryPanel from "./components/SummaryPanel/SummaryPanel";
import devices from "./data/devices.json";
import Board from "./components/Board/Board";

const App = () => {
  const [allDevices, setAllDevices] = useState(devices);

  const getStatus = (load) => {
    if (load <= 69) return "Active";
    else if (load >= 70 && load <= 89) return "Warning";
    else return "Critical";
  };

  const updateStatuses = () => {
    allDevices.forEach((device) => (device.status = getStatus(device.load)));
  };

  const resetDevices = () => {
    const newDevices = [...allDevices];
    newDevices.forEach((device) => {
      device.load = 0;
      device.status = "Active";
    });
    updateStatuses();
    setAllDevices(newDevices);
  };

  const simulateTraffic = (id) => {
    const newDevices = [...allDevices];
    const index = newDevices.findIndex((d) => d.id === id);
    if (newDevices[index].load >= 100) return;
    else if (newDevices[index].load >= 90 && newDevices[index].load <= 99) {
      newDevices[index].load = 100;
    } else newDevices[index].load += 10;
    updateStatuses();
    setAllDevices(newDevices);
  };

  const flushCache = (id) => {
    const newDevices = [...allDevices];
    const index = newDevices.findIndex((d) => d.id === id);
    if (newDevices[index].load <= 0) return;
    else if (newDevices[index].load <= 19 && newDevices[index].load >= 1) {
      newDevices[index].load = 0;
    } else newDevices[index].load -= 20;
    updateStatuses();
    setAllDevices(newDevices);
  };
  return (
    <>
      <h1>NOC Dashboard</h1>
      <SummaryPanel devices={allDevices} resetAll={resetDevices} />
      <Board
        devices={allDevices}
        simulateTraffic={simulateTraffic}
        flushCache={flushCache}
      />
    </>
  );
};

export default App;
