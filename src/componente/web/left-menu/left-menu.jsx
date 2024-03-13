import React, { useState } from "react";

import "./left-menu.css";
import Group from "./Group/group";

const LeftMenu = ({ grupos, onClickOpenSide }) => {
  const [isOpen, setIsOpen] = useState(true);
  const ClickOpenSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sideBar" : "sideBar sideBarClose"}>
      <div className="btn-bars">
        <i onClick={onClickOpenSide} class="uil uil-bars"></i>
      </div>
      {!!grupos
        ? grupos.map((grupo) => (
            <Group
              key={grupo.name}
              groupName={grupo.name}
              itens={grupo.itens}
            />
          ))
        : ""}
    </div>
  );
};

export default LeftMenu;
