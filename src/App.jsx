import Board from './components/Board'

const initialTasks = [
  { id: 1, title: 'Configurar o projeto', status: 'done' },
  { id: 2, title: 'Criar o layout das colunas', status: 'doing' },
  { id: 3, title: 'Implementar drag and drop', status: 'todo' },
  { id: 4, title: 'Salvar no localStorage', status: 'todo' },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Kanban Board</h1>
      </header>
      <Board tasks={initialTasks} />
    </div>
  )
}

export default App