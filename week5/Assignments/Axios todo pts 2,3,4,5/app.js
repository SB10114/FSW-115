const myHeader = document.createElement('h1')
document.body.appendChild(myHeader)
myHeader.textContent = "Book List"

const myList = document.getElementById('myList')
document.body.appendChild(myList)

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
})
    
    var id = obj._id
    
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    listItems.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(event){
        console.log(id)
        axios.delete('http://api.bryanuniversity.edu/SierraButler/list/' + id)
        .then(res => listItems.remove())
        })
}

axios.get('http://api.bryanuniversity.edu/SierraButler/list')
.then(res => {
    console.log(res)
for(i = 0; i < res.data.length; i++){
    makeListItem(res.data[i])
    }
})

    const form = document.myForm

    form.addEventListener("submit", e => {
         e.preventDefault()
        
        const newItem = {
            name: form.title.value,
            description: form.description.value,
            price: form.price.value
        }

        axios.post('http://api.bryanuniversity.edu/SierraButler/list', newItem)
        .then(res => makeListItem(res.data))
        .catch(res => console.log(res))
        // for(i = 0; i < res.data.length; i++){
})