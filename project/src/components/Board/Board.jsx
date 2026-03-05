import React from "react";
import Device from "../Device/Device";

const Board = ({ devices, simulateTraffic, flushCache }) => {
  return (
    <div>
      {devices.map((device) => (
        <Device
          key={device.id}
          name={device.name}
          type={device.type}
          status={device.status}
          load={device.load}
          simulateTraffic={() => simulateTraffic(device.id)}
          flushCache={() => flushCache(device.id)}
        />
      ))}
    </div>
  );
};

export default Board;
