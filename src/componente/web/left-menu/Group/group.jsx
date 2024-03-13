import React from "react";

const Group = ({ groupName, itens }) => {
  return (
    <div className="group-sidebar">
      <span>{groupName}</span>
      {!!itens
        ? itens.map((item) => (
            <div key={item.name} className="itens" title={item.name}>
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Group;
