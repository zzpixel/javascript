const todos = ["make dinner", "wash dishes"];



let todoListHtml = "";

for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  const html = `<p>${todo} <button onclick="todos.splice(${i},1)">delete<button></p>`;
  console.log(html);
  todoListHtml += html;
}

document.querySelector(".js-todo-list").innerHTML = todoListHtml;
console.log(todoListHtml);

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todos.push(name);
  console.log(todos);

  inputElement.value = "";
}
