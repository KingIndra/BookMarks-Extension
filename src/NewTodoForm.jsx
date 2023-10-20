import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newUrl, setNewUrl] = useState("")
  const [newTitle, setNewTitle] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newUrl === "") {
      return
    }
    onSubmit({url:newUrl, title:newTitle})
    setNewUrl("")
    setNewTitle("")
  }
  
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newUrl}
          onChange={e => setNewUrl(e.target.value)}
          type="text"
          id="item"
          placeholder="URL"
        />
        <input
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Title"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
