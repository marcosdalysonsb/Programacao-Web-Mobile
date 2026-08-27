export default function Exercicio246() {
  return (
    <main
      style={{
        width: "70%",
        minHeight: "300px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "black",
        border: "1px solid white",
      }}
    >
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          textDecoration: "underline",
        }}
      >
        Parágrafo do site. Aqui estão dois sites que uso constantemente no meu dia a dia. Segue abaixo:
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Site do YouTube
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Site do GitHub
        </a>
      </div>
    </main>
  );
}