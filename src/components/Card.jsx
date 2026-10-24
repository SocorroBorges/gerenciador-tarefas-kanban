function Card({ task }) {
  return (
    <div className="card">
      <p>{task.title}</p>
    </div>
  )
}

export default Card