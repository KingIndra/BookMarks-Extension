
export function TodoItem({ _id, title, url, deleteTodo }) {
  return (
    <li className="flexing">
      <a className="color-white" href={url}>{title !== "" ? title : url}</a>
      <button onClick={() => deleteTodo(_id)} className="btn btn-danger">🗑</button>
    </li>
  )
}
