"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [dadosJogador1, setDadosJogador1] = useState([1, 1]);
  const [dadosJogador2, setDadosJogador2] = useState([1, 1]);
  const [jogadorDaVez, setJogadorDaVez] = useState(1);
  const [resultado, setResultado] = useState("");
  const [resultadoRodada, setResultadoRodada] = useState("");
  const [rodada, setRodada] = useState(1);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function jogarJogador1(){
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setDadosJogador1([dado1, dado2]);
    setResultadoRodada("");
    setJogadorDaVez(2);
  }
  
  function jogarJogador2(){
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    setDadosJogador2([dado1, dado2]);
    const somaJogador1 = dadosJogador1[0] + dadosJogador1[1];
    const somaJogador2 = dado1 + dado2;
    let novasVitoriasJogador1 = vitoriasJogador1;
let novasVitoriasJogador2 = vitoriasJogador2;

if (somaJogador1 > somaJogador2) {
  setResultadoRodada("Jogador 1 venceu!");
  novasVitoriasJogador1++;
  setVitoriasJogador1(novasVitoriasJogador1);
} else if (somaJogador2 > somaJogador1) {
  setResultadoRodada("Jogador 2 venceu!");
  novasVitoriasJogador2++;
  setVitoriasJogador2(novasVitoriasJogador2);
} else {
  setResultadoRodada("Empate!");
}

if (rodada === 5) {
  setJogoFinalizado(true);

    if (novasVitoriasJogador1 > novasVitoriasJogador2) {
      setResultado("Jogador 1 venceu o jogo!");
    } else if (novasVitoriasJogador2 > novasVitoriasJogador1) {
      setResultado("Jogador 2 venceu o jogo!");
    } else {
      setResultado("Empate geral!");
    }
  } else {
    setRodada(rodada + 1);
    setJogadorDaVez(1);
    }
  }

  function jogarNovamente() {
    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);
    setJogadorDaVez(1);
    setResultado("");
    setResultadoRodada("");
    setRodada(1);
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setJogoFinalizado(false);
  }


  return (
  <main>
  <h1>Jogo de Dados</h1>

  <p>Rodada {rodada} / 5</p>

  <p>
    Jogador 1: {vitoriasJogador1} | Jogador 2: {vitoriasJogador2}
  </p>

  <div>
    <section>
      <h2>Jogador 1</h2>

      <div>
        {jogadorDaVez === 1 && !jogoFinalizado ? (
          <>
            <span>❌</span>
            <span>❌</span>
          </>
        ) : (
          <>
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </>
        )}
      </div>

      <button
        onClick={jogarJogador1}
        disabled={jogadorDaVez !== 1 || jogoFinalizado}
      >
        Jogar
      </button>
    </section>

    <section>
      <h2>Jogador 2</h2>

      <div>
        {jogadorDaVez === 2 && !jogoFinalizado ? (
          <>
            <span>❌</span>
            <span>❌</span>
          </>
        ) : (
          <>
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </>
        )}
      </div>

      <button
        onClick={jogarJogador2}
        disabled={jogadorDaVez !== 2 || jogoFinalizado}
      >
        Jogar
      </button>
    </section>
  </div>

  <section>
    <h2>MENSAGEM</h2>
    <p>{resultadoRodada}</p>
  </section>

  {jogoFinalizado && (
    <section>
      <h2>FIM DE JOGO</h2>
      <p>{resultado}</p>
      <button onClick={jogarNovamente}>Jogar Novamente</button>
    </section>
  )}
</main>
);
}
