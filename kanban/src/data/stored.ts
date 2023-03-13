const TODO = 'to do'
const DOING = 'doing'
const DONE = 'done'

export const stored = [
    {
        id: 1,
        title: 'Tarefa 1',
        description: 'Tarefa da coluna to do',
        columm: {
            nome: TODO,
            position: 0
        }
    },
    {
        id: 2,
        title: 'Tarefa 2',
        description: 'Tarefa da coluna doing',
        columm: {
            nome: DOING,
            position: 1
        }
    },
    {
        id: 3,
        title: 'Tarefa 3',
        description: 'Tarefa da coluna done',
        columm: {
            nome: DONE,
            position: 2
        }
    }
]