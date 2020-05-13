// request in XHR

//create an XHR object
const xhr = new XMLHttpRequest()

//listen for 'onload' event

xhr.onload = () => {
    //process response
    if(xhr.status == 200){
        //parse JSON data
        console.log(JSON.parse(xhr.response))
    }else{
        console.error('Error!')
    }
};

//create a 'GET' request

xhr.open('GET' , 'http://jsonplaceholder.typicode.com/')

//send request

xhr.send()


//POST request

const xhr = new XMLHttpRequest()

//configure a 'Post' request

xhr.open('POST', './login')

//prepare form data
let params = 'username=jotkharoud93&password=1234'

//set 'Content-Type' header
xhr.setRequestHeader('Content-Type' , 'application/x-www-form-urlencoded')

//pass 'params' to 'send()' method
xhr.send(params)

//listen for 'load' event
xhr.load = () =>{
    console.log(xhr.responseText)
}

// Delete a user
var url = "http://jsonplaceholder.typicode.com/";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url+'/12', true);
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);



