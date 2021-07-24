const xhr = new XMLHttpRequest()
        //method    //url                       //async?
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true)
xhr.send()


xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(xhr.responseText)
        let data = JSON.parse(xhr.responseText)
        showData(data.results)
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
    }
}

function showData(data) {
    for(i = 0; i < data.length; i++){
        const character = document.createElement("div")
        const name = document.createElement("h1")
        name.textContent = data[i].name
        character.append(name)
        character.id = i
        document.body.appendChild(character)
        getPokeStats(data[i].url, i)
    }
}
 function getPokeStats(url, id){
    const xhr = new XMLHttpRequest()
        
xhr.open("GET", url, true)
xhr.send()


xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(xhr.responseText)
        let data = JSON.parse(xhr.responseText)
        displayStats(data, id)
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
    }
}
 }


function displayStats(data, id){
    for (var i = 0; i < data.abilities.length; i++){
 const abilities = document.createElement('p')
 abilities.textContent = data.abilities[i].ability.name
 document.getElementById(id.toString()).appendChild(abilities)
    }
}