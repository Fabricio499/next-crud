import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Pedro', 22, '2'),
    new Cliente('João', 50, '3'),
    new Cliente('Bia', 17, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  } 

  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir... ${cliente.nome}`)
  } 

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-bl from-blue-500 to-purple-500
      text-white
    ">
      <Layout titulo="Cadastro simples">
        <div className="flex justify-end">
        <Botao className="mb-4">Novo cliente</Botao>
        </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
