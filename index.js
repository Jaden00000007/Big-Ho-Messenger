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




fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => response.json())
.then(json => {
   for (post of json) {
       let html = document.createElement("h1")
       html.innerText =
       `Title: ${post.title}
       ${post.body}`
       html.id = "info"
       document.getElementById("posts").appendChild(html)
   }
   console.log(json)
});


fetch("https://jsonplaceholder.typicode.com/comments/")
.then(response => response.json())
.then(json => {
   for (comment of json) {
       let html = document.createElement("h1")
       html.innerText =
       `Email: ${comment.email}
       Title: ${comment.name}
       ${post.body}`
       html.id = "info"
       document.getElementById("comments").appendChild(html)
   }
   console.log(json)
});


alert()
