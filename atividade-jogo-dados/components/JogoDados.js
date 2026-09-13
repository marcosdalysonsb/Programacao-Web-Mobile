"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [dadosJogador1, setDadosJogador1] = useState([1, 1]);
  const [dadosJogador2, setDadosJogador2] = useState([1, 1]);

  function jogarJogador1(){
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setDadosJogador1([dado1, dado2]);
  }
  
  return (
    <main>
      <h1>Jogo de Dados</h1>

      <p>Rodada 1 / 5</p>

      <div>
        <section>
          <h2>Jogador 1</h2>

          <div>
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>

          <button onClick={jogarJogador1}>Jogar</button>
        </section>

        <section>
          <h2>Jogador 2</h2>

          <div>
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>

          <button>Jogar</button>
        </section>
      </div>

      <section>
        <h2>MENSAGEM</h2>
      </section>
    </main>
  );
}
