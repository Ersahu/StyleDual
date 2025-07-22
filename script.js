let slideIndex = 0;
const slides = document.querySelector('.slider-container');

// Slider functionality
function nextSlide() {
  slideIndex++;
  if (slideIndex > 2) slideIndex = 0;
  slides.style.transform = `translateX(-${slideIndex * 100}px)`;
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) slideIndex = 2;
  slides.style.transform = `translateX(-${slideIndex * 100}px)`;
}

// Optional: Keep this only if search bar exists
const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");

if (searchBtn && searchBar) {
  searchBtn.addEventListener("click", function () {
    let query = searchBar.value;
    alert("You searched for: " + query);
  });
}

// Product category tab switch
const categories = document.querySelectorAll(".category");

categories.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.dataset.category;
    displayProducts(category);
  });
});

const products = {
  "featured": [
    { name: "Urban Edge T-Shirt", img: "f1.jpg", rating: 4, oldPrice: "₹999", newPrice: "₹799" },
    { name: "Blush Bloom Kurti", img: "f2.jpg", rating: 5, oldPrice: "₹899", newPrice: "₹699" },
    { name: "MetroFlex Joggers", img: "f3.webp", rating: 3, oldPrice: "₹599", newPrice: "₹499" },
    { name: "StreetVibe Cap", img: "f4.jpg", rating: 4, oldPrice: "₹150", newPrice: "₹99" },
    { name: "Heritage Denim Jacket", img: "f5.webp", rating: 5, oldPrice: "₹799", newPrice: "₹679" },
    { name: "Aura Gold Earrings", img: "f6.webp", rating: 4, oldPrice: "₹699", newPrice: "₹549" },
    { name: "SteelCore Belt", img: "f7.webp", rating: 3, oldPrice: "₹497", newPrice: "₹398" },
    { name: "Chic Everyday Tote", img: "f8.jpg", rating: 4, oldPrice: "₹999", newPrice: "₹794" }
  ],
  "new-arrivals": [
    { name: "UrbanCore Tee", img: "n1.webp", rating: 4, oldPrice: "₹999", newPrice: "₹779" },
    { name: "Rosewood Kurti", img: "n2.webp", rating: 5, oldPrice: "₹896", newPrice: "₹699" },
    { name: "IronEdge Ring", img: "n3.jpg", rating: 3, oldPrice: "₹559", newPrice: "₹494" },
    { name: "Velvet Charm Dupatta", img: "n4.webp", rating: 4, oldPrice: "₹999", newPrice: "₹899" },
    { name: "Classic Leather Belt", img: "n5.jpg", rating: 5, oldPrice: "₹289", newPrice: "₹159" },
    { name: "Everyday Chic Tote", img: "n6.webp", rating: 4, oldPrice: "₹679", newPrice: "₹584" },
    { name: "Denim Era Jacket", img: "n7.jpg", rating: 3, oldPrice: "₹649", newPrice: "₹739" },
    { name: "CharmAura Necklace", img: "n8.webp", rating: 4, oldPrice: "₹1999", newPrice: "₹1774" }
  ],
  "best-sellers": [
    { name: "GlowDrop Earrings", img: "s1.webp", rating: 4, oldPrice: "₹989", newPrice: "₹779" },
    { name: "AllDay Slim Joggers", img: "s2.webp", rating: 5, oldPrice: "₹879", newPrice: "₹689" },
    { name: "Velvet Luxe Scarf", img: "s3.webp", rating: 3, oldPrice: "₹359", newPrice: "₹249" },
    { name: "Denim Flare Jeans", img: "s4.webp", rating: 4, oldPrice: "₹1009", newPrice: "₹989" },
    { name: "LunaSpark Ring", img: "s5.webp", rating: 5, oldPrice: "₹1079", newPrice: "₹959" },
    { name: "Midnight Zip Hoodie", img: "s6.webp", rating: 4, oldPrice: "₹689", newPrice: "₹548" },
    { name: "Crimson Bloom Top", img: "s7.webp", rating: 3, oldPrice: "₹479", newPrice: "₹389" },
    { name: "Monarch Polo Tee", img: "s8.webp", rating: 4, oldPrice: "₹989", newPrice: "₹794" }
  ]
};

function displayProducts(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  const selected = products[category] || [];
  selected.slice(0, 8).forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="rating">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
      <p class="price"><span class="old-price">${product.oldPrice}</span> <span class="new-price">${product.newPrice}</span></p>
      <button class="buy-now-btn">Buy Now</button>
    `;
    container.appendChild(div);
  });
}

// Buy Now logic
function buyNow(productName, price) {
  alert(`You selected "${productName}" for ${price}. Redirecting to checkout...`);
  window.location.href = "checkout.html";
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
  // Load Featured Products
  displayProducts("featured");

  // Infinite scroll image clone logic
  const slider = document.querySelector(".slider-container");
  const images = slider.querySelectorAll("img");
  images.forEach((img) => {
    let clone = img.cloneNode(true);
    slider.appendChild(clone);
  });

  // Brand hover effects (fix selector)
  document.querySelectorAll(".slider-container img").forEach(img => {
    img.addEventListener("mouseover", () => img.style.opacity = "0.8");
    img.addEventListener("mouseout", () => img.style.opacity = "1");
  });
});

 