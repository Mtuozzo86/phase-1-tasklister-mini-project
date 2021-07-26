document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputField = document.getElementById("new-task-description")
  const toDoListBox = document.querySelector('#list ul')
  const submitButton = document.querySelectorAll('input')[1]
  const formArea = document.getElementById('create-task-form')
  const li = document.createElement('li')
  
formArea.addEventListener('submit', function(e){
  e.preventDefault()
  inputField(createListItem)
})


  function createListItem(text){
  const li = document.createElement('li')
  toDoListBox.append(li)
  li.innerText = `${text}`

}


  
});

