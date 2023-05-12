

const data = [
  { name: "Product 1", image: "image1.jpg", price: "$10.00", description: "This is product 1" },
  { name: "Product 2", image: "image2.jpg", price: "$15.00", description: "This is product 2" },
  { name: "Product 3", image: "image3.jpg", price: "$20.00", description: "This is product 3" }
];

const resultsContainer = document.getElementById("results");


data.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  const nameElement = document.createElement("h2");
  nameElement.textContent = product.name;

  const imageElement = document.createElement("img");
  imageElement.src = product.image;

  const priceElement = document.createElement("p");
  priceElement.textContent = product.price;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;

  productDiv.appendChild(nameElement);
  productDiv.appendChild(imageElement);
  productDiv.appendChild(priceElement);
  productDiv.appendChild(descriptionElement);

  resultsContainer.appendChild(productDiv);
});