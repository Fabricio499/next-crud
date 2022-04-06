interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray';
    className?: string;
    children: any;
    onClick?: () => void;
}

export default function Botao(props) {

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
        bg-gradient-to-bl from-${cor}-400 to-${cor}-500
        text-gray-200 px-4 py-2 rounded-full
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}