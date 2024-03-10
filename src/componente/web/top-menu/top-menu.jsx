import React from "react";

import "./top-menu.css";

const TopMenu = () => {
  return (
    <header>
      <div className="left-top-menu">
        <h3>Modulo Financeiro</h3>
      </div>
      <div className="center-top-menu">
        <div className="top-menu-search">
          <input
            id="input-search"
            name="input-search"
            type="text"
            placeholder="Faça sua pesquisa aqui..."
          ></input>
          <i class="uil uil-search-alt"></i>
        </div>
      </div>
      <div className="right-top-menu">
        <div className="group-icons">
          <i class="uil uil-envelope"></i>
          <i class="uil uil-question"></i>
          <i class="uil uil-lightbulb"></i>
          <i class="uil uil-setting"></i>
        </div>
        <div className="user-online">
          <i class="uil uil-user-circle"></i>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
