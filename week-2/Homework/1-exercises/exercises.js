/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
let content = document.querySelector("#content");
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(p => {
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.innerText = p.name;
    h2.innerText = p.job;
    content.appendChild(h1);
    content.appendChild(h2);
  })
} 

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */


function exerciseTwo(shopping) {
  const ul = document.createElement("ul");
  shopping.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    ul.appendChild(listItem);

  })
  content.appendChild(ul) 
    

  // books.forEach(obj => {
  //   const bookTitle = obj.title;
  //   const author = obj.author;
  //   const read = obj.alreadyRead;
  //   const li = document.createElement("li");
  //   const ul = document.createElement("ul")
  //   const p = document.createElement("p");
  //   li.innerText = ul;
  //   ul.innerText = p;
  //   p.innerText = `${bookTitle} - ${author}`;
  //   content.appendChild(p);
  //   if (Object.values(read) === true){
  //     document.p.style.backgroudColor = "green"
  //   }else if (Object.values(read) === false){
  //     document.p.style.backgroudColor = "red";
  //   }
  // })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
 const ul = document.createElement("ul");
 books.forEach(book => {
   const li = document.createElement("li");
   li.style.backgroundColor = book.alreadyRead ? "green" : "red"
   const p = document.createElement("p");
   const img = document.createElement("img");
   p.textContent = book.title + " - " + book.author;
   img.setAttribute("src", book.url);
   li.appendChild(p);
   li.appendChild(img);
   ul.appendChild(li)
 })
 content.appendChild(ul)
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url:"https://images-na.ssl-images-amazon.com/images/I/51iSxrqL+sL._SX335_BO1,204,203,200_.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg"
  }
];

exerciseThree(books);
