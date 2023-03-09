import React from "react";
import Profile from "../assets/Profile.svg";

function Intro() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img src={Profile} alt="" />
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          Guilherme Delmiro
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Desenvolvedor Web Front-End
        </p>
        <p className="text-lg max-w-xl mb-6 font-bold">
          Sou um desenvolvedor indie full-stack construindo meu versão do mundo
          digital passo a passo. Todos os projetos de codificação são
          construídos a partir do zero, desde o planejamento e design até o fim
          para resolver problemas da vida real com código.
        </p>
      </div>
    </>
  );
}

export default Intro;
