import React from "react";
import "./itemList.scss";
import Banner from "../banner/banner";

const ItemLista = (props) => {
  if (props.index % 2 !== 0) {
    return (
      <div className="item-lista-wrap direita">
        <div className="titulo-container direita">
          <h3>{props.label}</h3>
        </div>
        <div className="paragrafo-container">
          <p>{props.children}</p>
          <ul className="valores-lista">
            {props.lista
              ? props.lista.map((item, index) => (
                  <li key={index}>
                    <div>
                      <h4>{item.titulo}:</h4>
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="item-lista-wrap esquerda">
      <div className="titulo-container esquerda">
        <h3>{props.label}</h3>
      </div>
      <div className="paragrafo-container">
        <p>{props.children}</p>
        <ul className="valores-lista">
          {props.lista
            ? props.lista.map((item, index) => (
                <li key={index}>
                  <div>
                    <h4>{item.titulo}:</h4>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ItemLista;
