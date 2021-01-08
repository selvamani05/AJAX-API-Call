var postsData ;

document.getElementById("tableId").style.display = "none";



function tablecreate() {
    var postInput = {
        bodys: document.getElementById("lastname").value,
        userId: 1,
    
    }

    
    $("#details tr").detach();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/post',
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
           document.getElementById("success").innerHTML = "The inputs are" +" " + postInput.title + " " + postInput.body;
        },
        error: function error() {
            document.getElementById("error").innerHTML = "Error happened";
        }
       
    })
}


// error: function error() {
//     document.getElementById("error").innerHTML = "Error happened";
// }