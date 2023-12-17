import html from "../react-redux/core.js";

function TodoItem(todo, index, editIndex) {
  return html`
    <li
      class="${todo.completed && "completed"} ${index === editIndex &&
      "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('startEdit', ${index})"
          >${todo.title}</label
        >
        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        autofocus
        onkeyup="event.key === 'Enter' && dispatch('endEdit', this.value); event.key === 'Escape' && dispatch('cancelEdit')"
        onblur="dispatch('endEdit', this.value)"
      />
    </li>
  `;
}

export default TodoItem;
