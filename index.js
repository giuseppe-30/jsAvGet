const url = "https://striveschool-api.herokuapp.com/books"
const input = document.getElementById("input")
const result = document.getElementById("section")
const carello = document.getElementById("carello")
const spanCounter = document.getElementById("x") 
let counter = 0 

 const searchBook =()=>{
  const query = input.value;
  const searchBook = `${url}?title=${query}`
  return fetch(searchBook)
        .then((books) => books.json() )
        .then((books) => {console.log(books)
          result.innerHTML = ""
          books.forEach(book =>cardBook(book, result) )
          
        })
        .catch( console.error("Error"))

 
    }
    searchBook()
 



    const cardBook = (cardData,posizione )=>{
  
    const card = document.createElement("div")
    card.classList.add("card", "col-4", "mt-5", "styleCard" ,)
    const boxButton = document.createElement("div")
    boxButton.classList.add("d-flex", "justify-content-between")
    const buttonAggiungi = document.createElement("button")
    buttonAggiungi.classList.add("btn", "btn-warning", "btn-text" ,"style_Btn" )
    buttonAggiungi.innerText = "aggiungi"
    buttonLascia = document.createElement("button")
    buttonLascia.classList.add("btn","btn-success","style_Btn")
    buttonLascia.innerText = "lascia" 
    const priceBook = document.createElement("span")
    priceBook.innerText = cardData.price
    const title = document.createElement("h6")
    title.innerText = cardData.title
    const bookImg = document.createElement("img")
    bookImg.classList.add( "card-img-top")
    bookImg.src = cardData.img
    boxButton.append(buttonAggiungi,buttonLascia) 
    card.append(bookImg,title,priceBook,boxButton)
    posizione.append(card)
      
      
    buttonAggiungi.addEventListener("click", () =>{
      counter++
      card.classList.add("borderRed")
      buttonAggiungi.innerText = "aggiunto"
      spanCounter.innerText = `${counter}`
      addCarello(cardData, card)  
      })

     buttonLascia.addEventListener("click", () =>{
      card.remove()

     } ) 
    }

const addCarello = (cardData, primaCard ) =>{

  const newCard = document.createElement("div")
  const imgCard = document.createElement("img")
  const boxText = document.createElement("div")
  const newTitle = document.createElement("h5")
  const newPrice = document.createElement("p")
  const buttonRemove = document.createElement("button")

  newCard.classList.add("card")
  imgCard.classList.add("card-img-top", "w-25")
  boxText.classList.add("card-body")
  imgCard.src = cardData.img
  newTitle.innerText = cardData.title
  newTitle.classList.add("mb-1")
  newPrice.innerText = `£${cardData.price}`
  buttonRemove.classList.add("btn", "btn-danger")
  buttonRemove.innerText = "REMOVE"
  

  boxText.append(newTitle, newPrice, buttonRemove)
  newCard.append(imgCard, boxText)
  carello.appendChild(newCard)

  buttonRemove.addEventListener("click" , () =>{
    if(counter > 0){
      counter--
      spanCounter.innerText = `${counter}`
      primaCard.classList.remove("borderRed")
      primaCard.querySelector(".btn-text").innerText = "aggiungi"
      newCard.remove()
    }
  })
}