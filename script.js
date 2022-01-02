let books = [];

const bookForm = document.getElementById('bookForm');
const bookNameEl = document.getElementById('bookName');
const authorEl = document.getElementById('author');

const wishListEl = document.getElementById('wishlistContainer');

function handleSubmit(e) {
  e.preventDefault();

  let name = bookNameEl.value;
  let author = authorEl.value;
  var selectedStatus = '';
  //check which radio button is selected
  document.getElementsByName('status').forEach((radio) => {
    if (radio.checked) {
      selectedStatus = radio.value;
    }
  });

  console.log(selectedStatus);

  const newBook = {
    name: name,
    author: author,
    status: selectedStatus
  };

  console.log(newBook);
  // adds inputed book to array
  books.push(newBook);

  //resets form
  bookForm.reset();

  //console.log(books);
  //populate wishlist
  populateWishlist();
}

//display books array in wishlist as li items
//for every item in books array, create li item and append to ul wishlist

function populateWishlist() {
  books.forEach((book) => {
    // create li item
    let wishlistItemEl = document.createElement('div');

    wishlistItemEl.classList.add('wishlistItem');

    //add book data to div
    wishlistItemEl.innerHTML = `<h4>${book.name}</h4><p>${book.author}</p>`;

    wishListEl.appendChild(wishlistItemEl);
  });
}

bookForm.addEventListener('submit', handleSubmit);
