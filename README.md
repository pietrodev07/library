# LIBRARY

Library is a project where you can add your books.

The project is structured in the following method:

- **index.html** (defines the structure of the page)

- **style.css** (defines the style of the page)

- **main.js** (defines the logic of the page)

The datas are saved in local storage with **setData** function:

```js 
function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}
```

The datas are taken from local storeìage with **getData** function

```js 
function getData() {
  if(!localStorage.myLibrary) {
      render();
  } else {
      let objects = localStorage.getItem('myLibrary');
      myLibrary = JSON.parse(objects);
      render();
  }
}
```

