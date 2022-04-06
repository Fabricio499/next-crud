import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import { useState } from 'react';


export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio()) 
  // Encontrado no core/Cliente.ts - Irá criar um novo cliente, de acordo com o que é projetado para acontecer.
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Pedro', 22, '2'),
    new Cliente('João', 50, '3'),
    new Cliente('Bia', 17, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  } 

  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir... ${cliente.nome}`)
  } 

  function salvarCliente(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('tabela')
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio)
    setVisivel('form')
  }


  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-bl from-blue-500 to-purple-500
      text-white
    ">
      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4"
                onClick={novoCliente}
                
                >
                  Novo cliente
                </Botao>
            </div>
            <Tabela 
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}>
            </Tabela>
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
            />
        ) }
        
      </Layout>
    </div>
  )
}
