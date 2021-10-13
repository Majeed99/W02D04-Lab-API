fetch("https://rickandmortyapi.com/api/character", {
  method: "GET",
})
  .then((response) => {
    // console.log("resolve", response);

    return response.json();
  })
  .then((data) => {
    data.results.forEach((e) => {
      let img = document.createElement("img");
      img.setAttribute("src", e.image);
      let title = document.createElement("h2");
      title.textContent = e.name;
      console.log(e.image, e.name);
      let div = document.createElement("div");
      //   document.body.appendChild(img);
      //   document.body.appendChild(title);
      let all = document.getElementById("all");
    //   addEventListener("DOMContentLoaded", function test() {
        div.appendChild(img);
        div.appendChild(title);
        all.appendChild(div);
    //   });
    });
  })
  .catch((err) => {
    console.log("rejected", err);
  });
