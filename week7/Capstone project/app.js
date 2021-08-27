const makeListItem = (obj) => {
    const listItems = document.createElement('li')
    myList.appendChild(listItems)
    listItems.textContent = obj.name 
    
    const priceIdentifier = document.createElement('p')
    listItems.appendChild(priceIdentifier)
    priceIdentifier.textContent = "Price: $" + obj.price

    const paragraphTag = document.createElement('p')
    listItems.appendChild(paragraphTag)
    paragraphTag.textContent = "Description: " + obj.description

    const checkboxItem = document.createElement('input')
    checkboxItem.type = "checkbox"
    listItems.appendChild(checkboxItem)

    if (obj.isComplete) {
        listItems.className = 'strikeThrough'
    }
    checkboxItem.addEventListener('change', function(e){  
        console.log(e.target.checked)  
        axios.put('http://api.bryanuniversity.edu/SierraButler/list/' + id, {isComplete: e.target.checked})  
        .then ( res => {
            if (e.target.checked) {
        listItems.className = 'strikeThrough'
            } else {
                listItems.classList.remove('strikeThrough')
        }
    })
        .catch(err => console.error(err))
})
    
    var id = obj._id
    
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    listItems.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(event){
        console.log(id)
        axios.delete('http://api.bryanuniversity.edu/SierraButler/list/' + id)
        .then(res => listItems.remove())
        .catch(err => console.error(err))
    })
}

axios.get('http://api.bryanuniversity.edu/SierraButler/list')
.then(res => {
    console.log(res)
for(i = 0; i < res.data.length; i++){
    makeListItem(res.data[i])
    }
})

const integrateApi = async (e) => {
    e.preventDefault()

    const starWars = await addSwapi()

    let description = form.description.value
    let price = form.price.value

    if(!form.description.value) description = starWars.description
    if(!form.price.value) price = starWars.price

    const newItem = {
        name: form.title.value,
        description: description,
        price: price
    }

    axios.post('http://api.bryanuniversity.edu/SierraButler/list', newItem)
    .then(res => makeListItem(res.data))
    .catch(res => console.log(res))
}

const form = document.myForm
form.addEventListener("submit", integrateApi)



const addSwapi = async () => {

    let randomInt = Math.ceil( Math.random() * 10 )
    let description = ''

    await axios.get('https://swapi.dev/api/people/' + randomInt)
    .then(res => {
        description = `Hair color:${res.data.hair_color}, Eye color: ${res.data.eye_color}, Skin color: ${res.data.skin_color}`
    })
    .catch(err => console.log(err))

    let parts = await axios.get('https://api.themoviedb.org/3/collection/10?api_key=922d98ed31642ec4a01ff7e8abcc4833')
    .then(res => res.data.parts)
    .catch(err => console.log(err))

    let randomNum = Math.floor( Math.random() * (8 - 0 ) + 0 )
    let selectedPart = parts[randomNum]
    let price = Math.floor( selectedPart.popularity )

    console.log(description)
    console.log(price)

    return { description: description, price: price }
}










