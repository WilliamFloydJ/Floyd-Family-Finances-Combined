import React from "react";
import onClickUp from "../Functions/onClickUp";
function DownArrow(props) {
  return (
    <svg
      id="ejzaef9EVcy1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className="Arrow"
      onClick={() =>
        onClickUp(true, props.expenseid, props.isLoggedIn, props.setExpenses)
      }
    >
      <path
        d="M50.255056,99.471671Q150,250.865367,150,250.865367l99.744944-150.847149h-99.744944q-99.744944-1.093094-99.744944-.546547Z"
        transform="translate(0-25.12655)"
        stroke="#3f5787"
        strokeWidth="0.6"
      />
    </svg>
  );
}

export default DownArrow;
