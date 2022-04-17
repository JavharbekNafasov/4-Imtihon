// Header elements
let elForm = document.querySelector("#search-form");
let elFormInput = document.querySelector("#search-input");

let elSearchResult = document.querySelector("#show-result");
let elNewestBtn = document.querySelector("#btn-newest");

let elTemplateBookmarks = document.querySelector("#template-bookmarks").content;
let elTemplateCards = document.querySelector("#template-card").content;

let elBookmarksList = document.querySelector("#bookmarks-list");

// Fetch Cards Data
(async function() {
    let responce = await fetch(`https://www.googleapis.com/books/v1/volumes?q=$%7B%7D`)
    let data = await responce.json()
    let newdata  = data.items

    // renderBookmarks(newdata, elBookmarksList)
    console.log(newdata);
})();


/*
// Render Users...
function renderBookmarks(array, node) {
    // node.innerHTML = null 
    
    if (array.length > 0) {
        let booksFragment = document.createDocumentFragment()
        
        array.forEach(item => {
            let booksTemplate = elTemplateCards.cloneNode(true) 
            
            booksTemplate.querySelector(".cards-image").src = item.smallThumbnail
            // booksTemplate.querySelector("#users-email").textContent = item.email
            
            booksFragment.appendChild(booksTemplate)
        });
        
        node.appendChild(booksFragment)
        elSearchResult.textContent = array.length    
    }
}
*/
