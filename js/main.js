// Get element in Html
let elForm = document.querySelector("#search-form");
let elFormInput = document.querySelector("#search-input");

let elSearchResult = document.querySelector("#show-result");
let elNewestBtn = document.querySelector("#btn-newest");

let elBookmarksList = document.querySelector("#bookmarks-list");

let elTemplateBookmarks = document.querySelector("#template-bookmarks").content;
let elTemplateCards = document.querySelector("#template-cards").content;

console.log("salom");

// Render Bookmarks
elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value.trim()

    ;(async function() {
        let responce = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`)
        let data = await responce.json()
        let newdata = data.items
        
        renderBookMarks(newdata, elBookmarksList) 
        console.log(newdata);   
    })();
    
    elSearchResult.value = null
})


function renderBookMarks(data, node) {
    node.innerHTML = null

    let booksFragment = document.createDocumentFragment()

    array.forEach(item => {
        let booksCard = elTemplateCards.cloneNode(true)

        booksCard.querySelector(".cards-image").src = item.volumeInfo.imageLinks.smallThumbnail;
        booksCard.querySelector(".cards-title").textContent = item.volumeInfo.title;
        booksCard.querySelector(".cards-year").textContent = item.volumeInfo.authors;
        booksCard.querySelector(".cards-title").textContent = item.volumeInfo.title;

        booksFragment.appendChild(booksCard)
    });

    node.appendChild(booksFragment)

    elSearchResult.textContent = array.length
}
