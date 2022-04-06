
import firebase from '../config'
import ClienteRepositorio from './../../src/core/ClienteRepositorio';
import Cliente from '../../src/core/Cliente';

export default class ColecaoCliente implements ClienteRepositorio {

    conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.QueryDocumentOptions : cliente) {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }
    
    async excluir(cliente: Cliente): Promise<void> {
        return null
    }

    async obterTodos(): Promise<Cliente[]> {
        return null
    }

}