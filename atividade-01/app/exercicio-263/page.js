export default function Exercicio263() {
  const produtos = [
    {
      nome: "Tênis Esportivo",
      preco: "R$ 199,90",
      imagem: "/tenis.jpg",
    },
    {
      nome: "Chuteira",
      preco: "R$ 249,90",
      imagem: "/chuteira.jpg",
    },
    {
      nome: "Sandália",
      preco: "R$ 59,90",
      imagem: "/sandalia.jpg",
    },
    {
      nome: "Sapato Social",
      preco: "R$ 259,90",
      imagem: "/sapato.jpg",
    },
    {
      nome: "Tênis Casual",
      preco: "R$ 179,90",
      imagem: "/tenis-casual.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Caetés Calçados
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {produtos.map((produto) => (
            <div
              key={produto.nome}
              style={{
                backgroundColor: "green",
                padding: "15px",
                width: "180px",
                textAlign: "center",
                color: "white",
              }}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                style={{
                  width: "100%",
                  height: "130px",
                  objectFit: "cover",
                }}
              />

              <h3>{produto.nome}</h3>

              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                {produto.preco}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Caetés Calçados
      </footer>
    </div>
  );
}