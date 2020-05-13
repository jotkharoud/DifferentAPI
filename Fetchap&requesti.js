//Get ; retrieving the data from the server.
fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(response => response.json())
.then(json =>console.log(json))
//will return this specific resource
/*
{
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }*/

  //post method: sending the data to the server and creates an new resource

  fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body : JSON.stringify({
       //jsonstringufy converting javascript value into json string   
        
        userId : 1,
        title : "welcome to fetchapi",
        completed : false
    
      }),
      headers : {
          "Content-type " : "application/json; charset = UTF-8"
      }

  })

  .then(response => response.json())
  .then(json => console.log(json))

  /*will return
  {
    “userId”: 1,
    “title”: “welcome to fetchapi”,
    “completed”: false,
    “id”: 201
    }
  }*/

  //PUT request : it is just updating an existing resource 
  fetch('https://jsonplaceholder.typicode.com/todos/5',{
      
  method: 'PUT',

  body : JSON.stringify({

    userId: 1,
    id:6,
    title: 'javascript is here',
    completed: false
  }),
  headers : {
     "Content-type": "application/json; charset=UTF-8"
  }
  })
  .then(response => response.json())
  .then(json =>console.log(json))

  /*will return 
  {
       userId: 1,
    id:6,
    title: 'javascript is here',
    completed: false
  }

*/

//PATCH Method: when body needs to change somethinf specific to the resource

fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method: 'PATCH',
    body: JSON.stringify({
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"

    }
})
.then(response => response.json())
.then(json =>console.log(json))

/* will return
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }*/



  //Delete method

  fetch('‘https://jsonplaceholder.typicode.com/todos/1',{
      method: 'DELETE'
  })

  //empty response : {}
