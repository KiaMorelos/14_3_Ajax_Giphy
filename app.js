const gifForm = document.getElementById("gif-form")
const deleteBtn = document.getElementById("deleteAll")

gifForm.addEventListener("submit", function(e){
    e.preventDefault();
    const userSearch = document.getElementById("gif-input").value
    getGifs(userSearch)
    gifForm.reset()
   
    if(userSearch === ""){
        alert("Search cannot be blank")
        return
    }
})

async function getGifs(userSearch){
    const giphyToken = "CT5KSKClaKrOmKu5vza0H3MzWQ3zWInj"
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyToken}&q=${userSearch}&limit=25&offset=0&rating=g&lang=en`)
    addGifToPage({nestedData} = response.data)
}

function addGifToPage(nestedData){
     
    const gifArea = document.querySelector("#gif-area")
   
    const randomGif = Math.floor(Math.random() * 24)

    const src = nestedData.data[randomGif].images.original.url
    returned = src
      

         const newGif = document.createElement("img")
         newGif.setAttribute("src", `${src}`)
         newGif.setAttribute("class", "col card")
         gifArea.append(newGif)       
    
}

deleteBtn.addEventListener('click', function(e){
    const gifArea = document.querySelector("#gif-area")
    gifArea.innerHTML = ""

})
