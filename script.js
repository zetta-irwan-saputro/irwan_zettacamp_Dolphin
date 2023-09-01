// make button update hide
document.getElementById('update').style.display = 'none';
document.getElementById('form-control').style.display = 'none';

// function to active form
function ActiveForm() {
  document.getElementById('form-control').style.display = 'block';
  document.getElementById('button-add-data').style.display = 'none';
}

// functon to cancle create book
function CancleAdd() {
  document.getElementById('form-control').style.display = 'none';
  document.getElementById('button-add-data').style.display = 'inline';
}

// function to get element
function validationForm() {
  let bookTitle = document.getElementById('name').value;
  let bookAmount = document.getElementById('count').value;
  let bookAuthor = document.getElementById('author').value;
  let bookDescription = document.getElementById('description').value;

  //   console.log(bookTitle);

  // make validation
  if (bookTitle == '') {
    alert('please fill title of book !!!');
    return false;
  }

  if (bookAmount < 1) {
    alert('please fill your amount of book !!!');
    return false;
  }

  if (bookAuthor === '') {
    alert('please fill author of book !!!');
    return false;
  }

  if (bookDescription === '') {
    alert('please fill description of book !!!');
    return false;
  }

  return true;
}

// console.log(validationForm());

// function to show data
function showData() {
  let bookList;
  if (localStorage.getItem('bookList') === null) {
    bookList = [];
  } else {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }

  //   make variabel html
  let html = '';

  bookList.forEach(function (e, i) {
    html += '<tr>';
    html += '<td>' + e.title + '</td>';
    html += '<td>' + e.count + '</td>';
    html += '<td>' + e.author + '</td>';
    html += '<td>' + e.description + '</td>';
    html += '<td><button id="action1' + i + '" onclick="deleteData(' + i + ')" class="btn-action">Delete</button><button onclick="updateData(' + i + ')" class="btn-action one">Update</button></td>';
    html += '</tr>';
  });

  console.log(html);
  document.querySelector('#crudTable tbody').innerHTML = html;
}

// load when browser load
document.onload = showData();

// create function to add data
function AddData() {
  if (validationForm() === true) {
    let bookTitle = document.getElementById('name').value;
    let bookAmount = document.getElementById('count').value;
    let bookAuthor = document.getElementById('author').value;
    let bookDescription = document.getElementById('description').value;

    let bookList;
    if (localStorage.getItem('bookList') === null) {
      bookList = [];
    } else {
      bookList = JSON.parse(localStorage.getItem('bookList'));
    }

    bookList.push({
      title: bookTitle,
      count: bookAmount,
      author: bookAuthor,
      description: bookDescription,
    });

    localStorage.setItem('bookList', JSON.stringify(bookList));
    showData();
    document.getElementById('name').value = '';
    document.getElementById('count').value = '';
    document.getElementById('author').value = '';
    document.getElementById('description').value = '';

    // make button add data appear
    document.getElementById('button-add-data').style.display = 'block';
    document.getElementById('form-control').style.display = 'none';
  }
}

// function to delete data in local storage
function deleteData(i) {
  let bookList;
  if (localStorage.getItem('bookList') === null) {
    bookList = [];
  } else {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }

  bookList.splice(i, 1);
  localStorage.setItem('bookList', JSON.stringify(bookList));
  showData();
}

// fuction to update data
function updateData(i) {
  document.getElementById('submit').style.display = 'none';
  document.getElementById('update').style.display = 'block';
  document.getElementById('form-control').style.display = 'block';
  document.getElementById('button-add-data').style.display = 'none';
  document.getElementById('cancle').style.display = 'none';
  document.getElementById('action1' + i).style.display = 'none';

  let bookList;
  if (localStorage.getItem('bookList') === null) {
    bookList = [];
  } else {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }

  //   fill input field with data form index who clicked
  document.getElementById('name').value = bookList[i].title;
  document.getElementById('count').value = bookList[i].count;
  document.getElementById('author').value = bookList[i].author;
  document.getElementById('description').value = bookList[i].description;

  //   change value with new value who goted from input
  document.querySelector('#update').onclick = function () {
    if (validationForm() === true) {
      bookList[i].title = document.getElementById('name').value;
      bookList[i].count = document.getElementById('count').value;
      bookList[i].author = document.getElementById('author').value;
      bookList[i].description = document.getElementById('description').value;

      //   after changed with new value
      localStorage.setItem('bookList', JSON.stringify(bookList));
      showData();

      //   make input be empty again
      document.getElementById('name').value = '';
      document.getElementById('count').value = '';
      document.getElementById('author').value = '';
      document.getElementById('description').value = '';

      //   appear button
      document.getElementById('submit').style.display = 'block';
      document.getElementById('update').style.display = 'none';
      document.getElementById('form-control').style.display = 'none';
      document.getElementById('button-add-data').style.display = 'block';
      document.getElementById('cancle').style.display = 'block';
      document.getElementById('action1' + i).style.display = 'inline';
    }
  };
}
