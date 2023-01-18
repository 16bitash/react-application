import { createPortal } from "react-dom";

const portalDivNode = document.querySelector("#portal_div");

const Portal = () => {
  return createPortal(<div>Hello from the other side</div>, portalDivNode);
};

export default Portal;
