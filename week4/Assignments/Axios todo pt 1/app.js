const myList = document.createElement('ul')
document.body.appendChild(myList)
myList.textContent = "The Soul Summoner Series"

axios.get('http://api.bryanuniversity.edu/SierraButler/list')
.then(res => {
    console.log(res)
for(i = 0; i < res.data.length; i++){
    const listItems = document.createElement('li')
    myList.appendChild(listItems)
    listItems.textContent = res.data[i].name

    const paragraphTag = document.createElement('p')
    listItems.appendChild(paragraphTag)
    paragraphTag.textContent = res.data[i].description

    const checkboxItem = document.createElement('input')
    checkboxItem.type = "checkbox"
    listItems.appendChild(checkboxItem)
    checkboxItem.checked = res.data[i].isComplete

    if (res.data[i].isComplete) {
        listItems.className = 'strikeThrough'
    }
    checkboxItem.addEventListener('change', function(e){  
        console.log(e.target.checked)    
    if (e.target.checked) {
        listItems.className = 'strikeThrough'
    } else {
        listItems.classList.remove('strikeThrough')
    }
    })

    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    listItems.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(event){
        listItems.remove()
        })
    }
})
