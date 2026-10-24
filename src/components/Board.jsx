import Column from './Column'

const columns = [
  { id: 'todo', title: 'A fazer' },
  { id: 'doing', title: 'Em andamento' },
  { id: 'done', title: 'Concluído' },
]

function Board({ tasks }) {
  return (
    <main className="board">
      {columns.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          tasks={tasks.filter((task) => task.status === column.id)}
        />
      ))}
    </main>
  )
}

export default Board