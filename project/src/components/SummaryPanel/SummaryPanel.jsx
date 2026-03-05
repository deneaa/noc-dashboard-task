import Device from "../Device/Device";
import Button from "../Button/Button";

const SummaryPanel = ({ devices, resetAll }) => {
  const activeDevices = devices.filter((d) => d.status === "Active").length;
  const criticalDevices = devices.filter((d) => d.status === "Critical").length;
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h3 style={{ marginRight: "20px" }}>Active Devices: {activeDevices}</h3>
        <h3 style={{ marginRight: "20px" }}>Critical: {criticalDevices} </h3>
        <Button text={"Emergency Reboot All"} onClick={resetAll} />
      </div>
    </div>
  );    
};

export default SummaryPanel;
