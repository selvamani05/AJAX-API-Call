var postsData ;

document.getElementById("tableId").style.display = "none";

function tablecreate() {
    $("#details tr").detach();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get',
        dataType: 'json',
        success: function (data) {
           

            postsData = data.slice(10,25)
            document.getElementById("tableId").style.display = "block";
            var openTr = '';

            for(i=0; i < postsData.length; i++){
                if((i % 2) == 0){
                    openTr += '<tr>';
                    openTr += '<td style = "background-color:###EAE7E7;"' + postsData[i].userId + '</td>';
                    openTr += '<td style = "background-color:###EAE7E7;">' + postsData[i].id + '</td>';
                    openTr += '<td style = "background-color:###EAE7E7;">' + postsData[i].title + '</td>';
                    openTr += '<td style = "background-color:###EAE7E7;">' + postsData[i].body + '</td>';
                    openTr += '</tr>';
                } else {
                    openTr += '<tr>';
                    openTr += '<td style = "background-color:rgb(222, 226, 230);"' + postsData[i].userId + '</td>';
                    openTr += '<td style = "background-color:rgb(222, 226, 230);">' + postsData[i].id + '</td>';
                    openTr += '<td style = "background-color:rgb(222, 226, 230);">' + postsData[i].title + '</td>';
                    openTr += '<td style = "background-color:rgb(222, 226, 230);">' + postsData[i].body + '</td>';
                    openTr += '</tr>';
                }
               
            }

            $('#details').append(openTr);

        }
    })
}

function clearData() {
    document.getElementById("tableId").style.display = "none";

}

