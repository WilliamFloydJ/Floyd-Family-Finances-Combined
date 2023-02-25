import React from "react";

function ContentHeader(props) {
  return (
    <div>
      <ul>
        <li>
          <input
            value={"Create Entry"}
            type={"button"}
            onClick={props.setFinancesFalse}
          />
        </li>
        <li>
          <input
            value={"Finances"}
            type={"button"}
            onClick={props.setFinancesTrue}
          />
        </li>
      </ul>
    </div>
  );
}

export default ContentHeader;
