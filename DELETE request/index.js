var postsData ;

document.getElementById("tableId").style.display = "none";

function tablecreate() {
    var postInput = {
        title: document.getElementById("firstname").value,
        body: document.getElementById("lastname").value,
        userId: 1,
        id:1,
    
    }

    
    // $("#details tr").detach();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PUT',
        data:postInput,
        success: function (data) {
        console.log(data);
        }
    })
}

function deletecreate() {
    var postInput = {
        title: document.getElementById("firstname").value,
        body: document.getElementById("lastname").value,
        userId: 1,
        id:1,
    
    }

    
    // $("#details tr").detach();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'DELETE',
        data:postInput,
        success: function (data) {
        console.log(data);
        }
    })
}

