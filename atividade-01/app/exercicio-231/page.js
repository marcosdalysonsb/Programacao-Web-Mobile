export default function Exercicio231() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'red',
          width: '700px',
          padding: '0px',
          margin: '0 auto'
        }}
      >
      </div>

      <div
        style={{
          backgroundColor: 'green',
          width: '700px',
          padding: '25px',
          margin: '0 auto'
        }}
      >
      </div>
      <div
        style={{
          width: '700px',
          margin: '20px auto'
        }}
      >
        <strong>Por que os dois DIVs não estão completamente alinhados?</strong>
        <p>
          Isso acontece porque o padding é somado à largura do elemento.
          O DIV vermelho tem 700px, enquanto o DIV verde tem 700px + 25px
          de cada lado, ficando com 750px no total. Se o vermelho ficasse com o mesmo tamanho, os dois apareceriam, o vermelho acima e o verde abaixo.
        </p>
      </div>
    </>
  );
}
