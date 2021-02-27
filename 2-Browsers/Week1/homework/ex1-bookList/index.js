//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

class DomElement {
  constructor(tagType, tagId, cssClass, content) {
    this.tagType = tagType;
    this.tagId = tagId !== undefined ? tagId : '';
    this.cssClass = cssClass !== undefined ? cssClass : '';
    this.content = content !== undefined ? content : '';
    this.child = [];
  }
  addContent(content) {
    this.content = content;
  }
  addChild(child) {
    if (Array.isArray(child)) {
      child.forEach((element) => {
        this.child.push(element);
      });
    } else {
      this.child.push(child);
    }
  }
  addCssClass(cssClass) {
    this.cssClass = cssClass;
  }
  createDom() {
    this.domObject = document.createElement(this.tagType);
    if (this.cssClass !== '') {
      this.domObject.classList.add(this.cssClass);
    }
    if (this.tagId !== '') {
      this.domObject.id = this.tagId;
    }
    this.domObject.innerHTML = this.content;
    if (this.child.length > 0) {
      this.child.forEach((element) => {
        console.log(element);
        this.domObject.appendChild(element);
      });
    }
    return this.domObject;
  }
}

class ImageElement extends DomElement {
  constructor(tagType, src, alt, tagId, cssClass) {
    super(tagType, tagId, cssClass);
    this.src = src;
    this.alt = alt;
  }
  createImageDom() {
    this.domObject = document.createElement(this.tagType);
    this.domObject.setAttribute('src', this.src);
    this.domObject.setAttribute('alt', this.alt);
    return this.domObject;
  }
}

function createBookList(books) {
  const ulElement = new DomElement('ul');
  books.forEach((element) => {
    const liElement = new DomElement('li');
    if (element.alreadyRead) {
      liElement.addCssClass('read');
    } else {
      liElement.addCssClass('unread');
    }
    const pElement = new DomElement('p');
    const imgElement = new ImageElement(
      'img',
      createImageName(element.title),
      element.title
    );
    pElement.addContent(element.title + ' - ' + element.author);
    liElement.addChild([pElement.createDom(), imgElement.createImageDom()]);
    console.log(liElement.createDom());
    ulElement.addChild(liElement.createDom());
  });
  return ulElement.createDom();
}

function createImageName(str) {
  const arr = str.split(' ').map((e) => e.toLowerCase());
  return `assets/${arr.join('_')}.jpg`;
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
