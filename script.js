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
      categories[11] = "sport"
      categories[12] = "money"
      let index = Math.floor(Math.random() * 16);
      let myCategory = categories[index];
      const url2 = "https://api.chucknorris.io/jokes/random?category=" + myCategory;
      fetch(url2)
        .then(function(response){
          return response.json();
        }).then(function(json){
          console.log(json);
          document.getElementById("footer").style = "display: flex;";
          document.getElementById("response-body").innerHTML += "<div class='joke'>" + json.value + "</div>";
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
      let joke = "";
      if (json.type === "twopart"){
        joke += (json.setup + "<br>");
        joke += json.delivery;
      }
      else if (json.type === "single"){
        joke += json.joke;
      }
      document.getElementById("footer").style = "display: flex;";
      document.getElementById("response-body").innerHTML += "<div class='joke'>" + joke + "</div>";
    })
})

document.getElementById("misc").addEventListener("click",function(event){
  //debugger
  event.preventDefault();
  fetch("https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let joke = "";
      if (json.type === "twopart"){
        joke += (json.setup + "<br>");
        joke += json.delivery;
      }
      else if (json.type === "single"){
        joke += json.joke;
      }
      document.getElementById("footer").style = "display: flex;";
      document.getElementById("response-body").innerHTML += "<div class='joke'>" + joke + "</div>";
    })
})
