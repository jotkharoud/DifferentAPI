//GET IN AJAX
$(function(){

    var $users = $('#users')
    var $user = $('#user')
    var $author = $('#author')
    
    var newuser = ""+
    "<li>"+
    "<p><strong> name : {{name}}</p>" +
    "<p><strong> author: {{author}}</p>" +
    "<button data-id= '{{id}}' class = 'remove'>x</button>" +
    "</li>"

    $.ajax({
        type: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users',
        success : function(users){
            $.each(users, function(i, user){
                $.users.append('<li>name: '+ user.name +', author: ' + user.author+'</li>');
    //user and author is the input type , it can be any value depending upon webpage
            })
        },
        error: function(){
            alert('error loading users')
        }
   
    })
})

//POST in AJAX
$('#button').on('click', function(){
    var users = {
        user : $user.val(),
        author : $user.val()
    };
        //val is value of input
       
        $.ajax({
            type:'POST',
            url : 'http://jsonplaceholder.typicode.com/',
            data : users,
            success: function(user){
                $users.append('<li>user:' + user.name + ',author:' +user.author + '</li>')

            },
           error: function(){
               alert('error saving new user')
           }
        });
    


//DELETE IN AJAX

$users.delegate('.remove' , 'click' , function(){
//we are using delegate cause it needs a resource like a
// list so that we can remove the items from it

   var $li = $(this).closest('li')
    $.ajax({
        type: 'DELETE',
        url : 'http://jsonplaceholder.typicode.com/users' + $(this).attr('data-id'),
        success : function(){
         $li.fadeOut(300, function(){
             $(this).remove()

             //i am using this to point the upper this of which list i am using
         })
         
        }
    });
})


});
