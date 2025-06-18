const products = [
  { name: "Laptop", category: "tech", rating: 4.5 },
  { name: "Book A", category: "books", rating: 4.7 },
  { name: "Phone", category: "tech", rating: 4.2 },
  { name: "Book B", category: "books", rating: 3.9 }
];

const list = document.getElementById("productList");
const filter = document.getElementById("categoryFilter");

filter.addEventListener("change", () => {
  displayProducts();
});

function displayProducts() {
  const category = filter.value;
  list.innerHTML = "";
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - Rating: ${p.rating}`;
    list.appendChild(div);
  });
}

function sortProducts(by) {
  products.sort((a, b) => b[by] - a[by]);
  displayProducts();
}

window.onload = displayProducts;
