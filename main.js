//! Html'den gelenler
const categoryList = document.querySelector(".categories");
const productList = document.querySelector(".products");
const modal = document.querySelector(".modal-wrapper");
const basketBtn = document.querySelector("#basket-btn");
const closeBtn = document.querySelector("#close-btn");
const basketList = document.querySelector("#list");
const totalInfo = document.querySelector("#total");

//! olay izleyicileri
// html'in yüklenme anını izler:
document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  fetchProducts();
});

/*
 * kategori bilgilerini alma
 * 1- api'ye istek at
 * 2- gelen veiriyi işle
 * 3- verileri ekran basıcak fonksinu çalıştır
 * 4- hata oluşursa kullanıcı bilgilendir
 */

const baseUrl = "https://api.escuelajs.co/api/v1";

function fetchCategories() {
  fetch(`${baseUrl}/categories`)
    .then((response) => response.json()) //arrow function { } yoksa yazılan şeyi kendi return eder.
    .then(renderCategories); // then çalıştırıldığı fonksiyona verileri parametre olarak gönderir
  //.then((data) => console.log(data)); //normali bu
  // .catch((err) => alert('Kategorileri alırken bir hata oluştu'));
}

// her bir kategori için ekrana kart oluşturur
function renderCategories(categories) {
  categories.forEach((category) => {
    //1- div oluştur
    const categoryDiv = document.createElement("div");
    //2- dive class ekleme
    categoryDiv.classList.add("category");
    //3- içeriğini belirleme
    const randomNum = Math.round(Math.random() * 1000);
    categoryDiv.innerHTML = `
              <img src="https://picsum.photos/300/300?r=${randomNum}" />
              <h2>${category.name}</h2>
      `;
    //4- html'e gönderme
    categoryList.appendChild(categoryDiv);
  });
}
