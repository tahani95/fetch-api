const url = 'https://fakerestapi.azurewebsites.net/api/v1/';
const headers = new Headers();
headers.append('Content-type',"application/json");

// get authors info
const getAuthors = fetch(`${url}Authors`).then(response =>{ return response.json()}).then(result => console.log('getAuthors',result));

// post new author

const options =
{
    method: 'POST',
    headers,
    body: JSON.stringify
    ({  
        "idBook" : '32',
        "firstName": "First Name 0",
        "lastName": "Last Name 0"  
    })
};
const postAuthor = fetch(`${url}Authors`,options).then(response =>{ return response.json()}).then(result => console.log('postAuthor ',result));


const bookId = prompt("Enter Book ID");
const getSpecificBookId = fetch(`${url}Authors/authors/books/${bookId}`).then(response =>{ return response.json()}).then(result => console.log('getSpecificBookID ',result));
