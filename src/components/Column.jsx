import Card from './Card'

function Column({ title, tasks }) {
  return (
    <section className="column">
      <h2 className="column-title">
        {title} <span className="column-count">{tasks.length}</span>
      </h2>
      <div className="column-cards">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default Column