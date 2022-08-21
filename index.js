let input=document.getElementById("input").value;
let file = "https://jsonplaceholder.typicode.com/users";

        function addItemloadJSON(path, success) {

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if (success){
                            success(JSON.parse(xhr.responseText));
                        }
                    }
                }
            };
            xhr.open("GET", path);
            xhr.send();
        }
        loadJSON('https://jsonplaceholder.typicode.com/users',
         function(data) {
             console.log(data);
        })