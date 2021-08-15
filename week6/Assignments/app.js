
const getData = async () => {
     try {
        const reply = await axios.get('https://swapi.dev/api/people/10/')
        const ship1 = await axios.get(reply.data.starships[0])
        const ship2 = await axios.get(reply.data.starships[1])
        goToDom(ship1, ship2, reply)
    }
     catch(error){
        console.log(error)
    }
}
 getData()

function goToDom(ship1, ship2, reply){
    const title = document.createElement('h1')
    title.textContent = 'Character Name:'
    document.body.appendChild(title)

    const myName = document.createElement('p')
    myName.textContent = reply.data.name
    document.body.appendChild(myName)

    const title2 = document.createElement('h1')
    title2.textContent = 'Character Starships:'
    document.body.appendChild(title2)

    const listItem1 = document.createElement('li')
    listItem1.textContent = ship1.data.name
    document.body.appendChild(listItem1)

    const listItem2 = document.createElement('li')
    listItem2.textContent = ship2.data.name
    document.body.appendChild(listItem2)
}

