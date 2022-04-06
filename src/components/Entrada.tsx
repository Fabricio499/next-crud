interface EntradaProps {
    texto: string;
    tipo: 'text' | 'number';
    valor: any;
    somenteLeitura?: boolean;
    className?: string;
    valorModou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input 
            type={props.tipo ?? 'text'} 
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorModou?.(e.target.value)}
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-50 
                ${props.somenteLeitura ? 'focus:bg-purple-200' : 'bg-gray-50'}
                px-4 py-2
            `}
            />
        </div>
    )
}