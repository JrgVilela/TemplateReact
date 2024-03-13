import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

import TopMenu from "./componente/web/top-menu/top-menu";
import LeftMenu from "./componente/web/left-menu/left-menu";

const grupos = [
  {
    name: "Grupo 1",
    itens: [
      { name: "Grupo 1 - Opção 1", icon: "uil uil-atom" },
      { name: "Grupo 1 - Opção 2", icon: "uil uil-atom" },
    ],
  },
  {
    name: "Grupo 2",
    itens: [
      { name: "Grupo 2 - Opção 1", icon: "uil uil-atom" },
      { name: "Grupo 2 - Opção 2", icon: "uil uil-atom" },
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TopMenu />
    <LeftMenu grupos={grupos} />
    <h1>Projeto Aqui</h1>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
