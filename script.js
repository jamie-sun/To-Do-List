// add a task to the to do list
function addTask() {
  var li = document.createElement('li');
  var userInput = document.getElementById('input').value;
  // check input is not empty
  if(userInput == "") {
    return;
  }
  else{
    var textNode = document.createTextNode(userInput);
    li.append(textNode);
    document.getElementById('ul').append(li);
    document.getElementById('input').value = "";
    // add a remove button "x" to the end of each task
    var remove = document.createElement("SPAN");
    var x = document.createTextNode("x");
    remove.append(x);
    remove.className = "removeItem";
    li.append(remove);
    removeItem();
  }
}

// remove a task
function removeItem(){
  var removeButton = document.getElementsByClassName("removeItem");
  for (i=0; i < removeButton.length; i++) {
    removeButton[i].onclick = function(){
      this.parentElement.style.display = "none";
    }
  }
}

// toggle to check and uncheck a task
var list = document.querySelector('ul');
list.addEventListener('click', function(e){
  if(e.target.tagName == "LI") {
    e.target.classList.toggle('done')
  }
})

// eventlistener for "enter" key when adding tasks
addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addTask(e);
  }
})
