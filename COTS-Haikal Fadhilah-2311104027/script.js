// PRODUKNYA DISINI
fetch("produk.json")
  .then((res) => res.json())
  .then((data) => {
    const list = document.getElementById("produk-list");
    data.forEach((item) => {
      list.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100">
            <img src="${item.gambar}" class="card-img-top" alt="${item.nama}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${item.nama}</h5>
              <p class="card-text text-danger fw-bold">${item.harga}</p>
              <button class="btn btn-danger w-100 mt-auto" onclick="lihatDetail(${item.id})">Details</button>
            </div>
          </div>
        </div>
      `;
    });
  });

// MENAMPILKAN REKOMENDASI
fetch("rekomendasi.json")
  .then((res) => res.json())
  .then((data) => {
    const box = document.querySelector(".recommendation-box");
    const content = data
      .map(
        (item) => `
      <div class="card recommendation-card mb-4">
        <img src="${item.gambar}" class="card-img-top" alt="${item.nama}">
        <div class="card-body text-center">
          <p class="card-text mb-1 fw-medium fs-5">${item.nama}</p>
          <p class="text-danger fw-bold fs-5 mb-2">${item.harga}</p>
          <button class="btn btn-danger w-100" onclick="lihatDetail(${item.id}, 'rekomendasi')">Details</button>
        </div>
      </div>
    `
      )
      .join("");

    // REKOMENDASI
    box.innerHTML =
      `<h3 class="mb-3 text-center">Recommendation</h3>` + content;
  });

function lihatDetail(id, tipe = "produk") {
  // Menyimpan ID
  localStorage.setItem("selectedId", id);
  localStorage.setItem("selectedType", tipe);

  // NAH INI DIA yang ngarahin ke detail.html
  window.location.href = "detail.html";
}

$("#Cart").on("click", function() {
    alert("Berhasil")
});
