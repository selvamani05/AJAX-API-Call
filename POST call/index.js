var postsData ;

document.getElementById("tableId").style.display = "none";



function tablecreate() {
    var postInput = {
        title: document.getElementById("firstname").value,
        body: document.getElementById("lastname").value,
        userId: 1,
    
    }

    
    $("#details tr").detach();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        // body: JSON.stringify({
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        //   }),
        // The above things are given in a separate variable(postInput) and taken below.

        data: postInput,
        success: function (data) {
           console.log(data);


        }
    })
}