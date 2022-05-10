const list = document.querySelectorAll("li");

function handleClick(item){
  list.forEach(item => {
    item.classList.remove("active");
  })
  item.classList.add("active");
}

list.forEach(item => item.addEventListener("click",() => handleClick(item)));