const resultSpesa = document.getElementById("resultSpesa")
const listaSpesa = ["pomodoro " , "pecorino " , "pasta " , "sale"]

let i = 0;
let myList = `<ul`
 while (i < listaSpesa.length) {
    myList += `<li>${listaSpesa[i]}</li`
    i++
}
myList += `</ul`
resultSpesa.innerHTML = myList





