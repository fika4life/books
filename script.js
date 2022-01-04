const bookForm = document.getElementById('bookForm');
const bookNameEl = document.getElementById('bookName');
const authorEl = document.getElementById('author');

const wishListEl = document.getElementById('wishlistContainer');

let deleteBtn;

let books;
// if there is something in localstorage populateWishlist with data
if (JSON.parse(localStorage.getItem('books'))) {
  populateWishlist();
} else {
  books = [];
}

function handleSubmit(e) {
  e.preventDefault();

  let existing = JSON.parse(localStorage.getItem('books'));
  if (existing) {
    books = existing;
  }

  let name = bookNameEl.value;
  let author = authorEl.value;
  var selectedStatus = '';
  //check which radio button is selected
  document.getElementsByName('status').forEach((radio) => {
    if (radio.checked) {
      selectedStatus = radio.value;
    }
  });

  const newBook = {
    name: name,
    author: author,
    status: selectedStatus
  };

  // adds inputed book to array
  books.push(newBook);

  //resets form
  bookForm.reset();

  //console.log(books);
  //populate wishlist

  localStorage.setItem('books', JSON.stringify(books));

  populateWishlist();
}

//display books array in wishlist as li items
//for every item in books array, create li item and append to ul wishlist

function populateWishlist() {
  wishListEl.innerHTML = '';

  booksLS = JSON.parse(localStorage.getItem('books'));

  booksLS.forEach((book) => {
    //remove current list

    // create li item
    let wishlistItemEl = document.createElement('div');

    wishlistItemEl.classList.add('wishlistItem');

    //add book data to div
    wishlistItemEl.innerHTML = `<div class="wishlistItemText"><h6>${book.name}</h6><p>${book.author}</p></div><button class="button is-danger is-small is-light" id="deleteBtn">Delete</button>`;

    wishListEl.appendChild(wishlistItemEl);

    //add eventlisteners to dynamically created buttons
    deleteBtns = document.querySelectorAll('#deleteBtn');

    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', deleteItem);
    });
  });
}

//delete wishlist Item
function deleteItem(e) {
  console.log(e.target.parentNode);
}

bookForm.addEventListener('submit', handleSubmit);
