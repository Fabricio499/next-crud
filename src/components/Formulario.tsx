import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado?: () => void;

}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente.nome ?? '') 
    const [idade, setIdade] = useState(props.cliente.idade ?? 0) 

    return(
        <div>
            {id ? (
                <Entrada 
                    valor={id}
                    somenteLeitura
                    texto="Codigo:"
                    tipo="text"
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                valor={nome}
                texto="Nome:"
                tipo="text"
                valorModou={setNome}
                className="mb-5"
            />

            <Entrada 
                valor={idade}
                texto="Idade:"
                tipo="number"
                valorModou={setIdade}
            />
            <div className="flex justify-content mt-3">
                <Botao 
                    cor="blue"
                    className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}