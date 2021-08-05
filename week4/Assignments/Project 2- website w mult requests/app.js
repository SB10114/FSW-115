//"https://swapi.dev/api/"

const goPokemon = () => {
axios.get("https://pokeapi.co/api/v2/pokemon")
.then(response => {
    console.log(response)
    for (i = 0; i < response.data.results.length; i++){
        const li = document.createElement("li")
        li.textContent = response.data.results[i].name
        document.body.appendChild(li)
    }
})
// .catch(error => console.log(error))
}

const goSWAPI = () => {
    axios.get("https://www.swapi.it/api/people")
    .then(response => {
        console.log(response)
        for (i = 0; i < response.data.results.length; i++){
            const li2 = document.createElement("li")
            li2.textContent = response.data.results[i].name
            document.body.appendChild(li2)
        }
    })
}


const numberButton = document.getElementById("pmButton")
if (numberButton) { 
    numberButton.addEventListener("click", goPokemon)
}

const secondButton = document.getElementById("swButton")
if(secondButton) {
    secondButton.addEventListener("click", goSWAPI)
}