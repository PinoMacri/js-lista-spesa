const listaSpesa = ["pomodoro" , "pecorino" , "pasta" , "sale"]
/*-------------------METODO TEMPLATE LITERALS-----------------*/
const resultSpesa = document.getElementById("resultSpesa")
let i = 0;
let myList = `<ul>`
 while (i < listaSpesa.length) {
    myList += `<li>${listaSpesa[i]}</li>`
    i++
}
myList += `</ul>`
resultSpesa.innerHTML = myList
/*--------------------------METODO NODI-----------------------*/
const resultSpesaDue = document.getElementById("resultSpesaDue")
let ul = document.createElement("ul")
resultSpesaDue.appendChild(ul)
i = 0
while (i < listaSpesa.length) {
    let li = document.createElement("li")
    li.append(listaSpesa[i])
    ul.append(li)
    i++
}





