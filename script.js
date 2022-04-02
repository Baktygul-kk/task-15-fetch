const div = document.querySelector(".container");
div.style.margin = "0 auto";
div.style.textAlign = "center";

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    let output = "";
    data.forEach(function (item) {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      div.appendChild(card);
      // card.innerHTML = `
      // <h3>${item.title}</h3>
      // <img  class="img" src="${item.img}" alt="${item.title}">
      // <p class="price">${item.price}</p>
      // <p>${item.desc}</p>
      // `


      const title = document.createElement("h3");
      const img = document.createElement("img");
      const desc = document.createElement("p");
      const price = document.createElement("p");
      const category = document.createElement("p");

      price.setAttribute("class", "price");
      img.classList.toggle("img");

      title.textContent = item.title;
      desc.innerText = item.desc;
      img.src = item.img;
      price.textContent = item.price;
      category.textContent = item.category;


      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(price);
      card.appendChild(category);
      card.appendChild(desc);
    });
    //console.log(data);
    document.getElementById("output").innerHTML = output;
  })
  .catch(function (error) {
    console.log("error");
  });


