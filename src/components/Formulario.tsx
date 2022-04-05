import Entrada from "./Entrada";

interface FormularioProps {

}

export default function Formulario(props: FormularioProps){
    return(
        <div>
            <Entrada 
            texto="Nome:"
            valor="Teste"
            tipo="text"
            />
        </div>
    )
}