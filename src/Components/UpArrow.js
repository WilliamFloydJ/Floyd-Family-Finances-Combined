import React from "react";
import onClickUp from "../Functions/onClickUp";
function UpArrow(props) {
  return (
    <svg
      cache-id="ac6dd3ddc9964410b3ca9cbc219bbd18"
      id="eaD1dZmxy2q1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className="Arrow"
      onClick={() =>
        onClickUp(false, props.expenseid, props.isLoggedIn, props.setExpenses)
      }
    >
      <path
        d="M50.255056,99.471671Q150,250.865367,150,250.865367l99.744944-150.847149h-99.744944q-99.744944-1.093094-99.744944-.546547Z"
        transform="matrix(-1 0 0-1 300 325.12655)"
        stroke="#3f5787"
        strokeWidth="0.6"
      />
    </svg>
  );
}

export default UpArrow;
