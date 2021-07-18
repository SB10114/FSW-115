data = [
        {
            "name": "Michael",
            "age": 69,
            "count": 233482
        },
        {
            "name": "Matthew",
            "age": 35,
            "count": 34742
        },
        {
            "name": "Jane",
            "age": 35,
            "count": 35010
        },
        {
            "name": "Gary",
            "age": 61,
            "count": 27715
        },
        {
            "name": "Austin",
            "age": 33,
            "count": 4452
        },
        {
            "name": "Andrew",
            "age": 64,
            "count": 57855
        }
]

let item = document.getElementById('names')

for (i=0; i < data.length; i++){
    let myList = document.createElement('li')
    myList.textContent = data[i].name
    item.appendChild(myList)
}