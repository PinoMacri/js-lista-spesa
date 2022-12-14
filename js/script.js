const listaSpesa = ["pomodoro" , "pecorino" , "pasta" , "sale"]
/*---------------------------------------------------------------*/
const resultSpesa = document.getElementById("resultSpesa")
let i = 0;
let myList = `<ul>`
 while (i < listaSpesa.length) {
    myList += `<li>${listaSpesa[i]}</li>`
    i++
}
myList += `</ul>`
resultSpesa.innerHTML = myList
/*---------------------------------------------------------------*/




