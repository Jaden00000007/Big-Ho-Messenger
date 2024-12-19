fetch("https://jsonplaceholder.typicode.com/users/")
   .then(response => response.json())
   .then(json => {
       for (user of json) {
           let html = document.createElement("h1")
           html.innerText = `
           ID: ${user.id}
           Name: ${user.name}
           Username: ${user.username}
           Email: ${user.email}
           Phone Number: ${user.phone}\
           `
           html.innerHTML +=
           `Website: <a href = ${user.website}>${user.website}<a>`
           html.id = "info"
           document.getElementById("quazi").appendChild(html)
       }
       console.log(json)
   });

for(let i = 1; i < 11; i++){
    fetch("https://jsonplaceholder.typicode.com/posts/" + i)
    .then(response => response.json())
    .then(json => {
            let html = document.createElement("h1")
            html.innerText = 
            `Title: ${json.title}
            ${json.body}`
            html.id = "info"
            document.getElementById("posts").appendChild(html)
            console.log(json)
    });
}

for(let i = 1; i < 11; i++){
    fetch("https://jsonplaceholder.typicode.com/comments/" + i)
    .then(response => response.json())
    .then(json => {
            let html = document.createElement("h1")
            html.innerText = 
            `Email: ${json.email}
            Title: ${json.name}
            ${json.body}`
            html.id = "info"
            document.getElementById("comments").appendChild(html)
            console.log(json)
    });
}

let user = prompt("Please enter your skibidi profile name");
document.getElementById("title").innerHTML(user)
let i = 0
localStorage.setItem(i, user)
