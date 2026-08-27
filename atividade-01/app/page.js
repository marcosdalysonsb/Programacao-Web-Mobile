import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '1rem 2rem', fontFamily: 'sans-serif' }}>

      <h1 style={{ marginTop: '-10px' }}>
        Lista de Exercícios 
      </h1>

      <ul style={{ lineHeight: '2', marginTop: '30px' }}>

        <li>
          <Link href="/exercicio-210">Exercício da Pg. 210</Link>
        </li>

        <li>
          <Link href="/exercicio-231">Exercício da Pg. 231</Link>
        </li>

        <li>
          <Link href="/exercicio-246">Exercício da Pg. 246</Link>
        </li>

        <li>
          <Link href="/exercicio-263">Exercício da Pg. 263</Link>
        </li>
      </ul>
    </main>
  );
}
