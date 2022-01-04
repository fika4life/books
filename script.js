const bookForm = document.getElementById('bookForm');
const bookNameEl = document.getElementById('bookName');
const authorEl = document.getElementById('author');

const wishListEl = document.getElementById('wishlistContainer');

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
    wishlistItemEl.innerHTML = `<h6>${book.name}</h6><p>${book.author}</p>`;

    wishListEl.appendChild(wishlistItemEl);
  });
}

bookForm.addEventListener('submit', handleSubmit);
