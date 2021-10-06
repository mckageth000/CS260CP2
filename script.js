document.getElementById("chucknorris").addEventListener("click",function(event){
  event.preventDefault();
  const url1 = "https://api.chucknorris.io/jokes/categories";
  let categories = 0;
  //debugger
  fetch(url1)
    .then(function(response){
      return response.json();
    }).then(function(json){
      categories = json;
      categories[4] = "dev";
      let index = Math.floor(Math.random() * 16);
      let myCategory = categories[index];
      const url2 = "https://api.chucknorris.io/jokes/random?category=" + myCategory;
      fetch(url2)
        .then(function(response){
          return response.json();
        }).then(function(json){
          console.log(json);
          document.getElementById("response-body").innerHTML = json.value;
        });
    });
})

document.getElementById("programming").addEventListener("click",function(event){
  //debugger
  event.preventDefault();
  fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit")
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      document.getElementById("response-body").innerHTML = json.joke;
    })
})

document.getElementById("yomamma").addEventListener("click",function(event){
  //debugger
  event.preventDefault();
  fetch("https://yomomma-api.herokuapp.com/jokes")
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      document.getElementById("response-body").innerHTML = json.joke;
    })
})
