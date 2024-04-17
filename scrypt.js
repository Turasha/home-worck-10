let serch = document.getElementById("serch");
let users = document.getElementById("users-ul");
let listItems = [];

async function asyncFunc() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("cet fetch data");
    }
    let responsedata = await response.json();
    responsedata.forEach((el) => {
      let li = document.createElement("li");
      listItems.push(li);
      li.textContent = `${el.name}`;
      users.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

asyncFunc();
 




function filtreData(serchitem){
    listItems.forEach((item)=>{
        if(item.innerText.includes(serchitem)){
            item.classList.remove('none')
        }else{
            item.classList.add('none')   
        }
    })
}

serch.addEventListener("keyup", function(){
    filtreData(this.value)
})