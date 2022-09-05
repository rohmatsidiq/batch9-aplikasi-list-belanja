let modal = document.getElementById('modal');
let floating_btn = document.getElementById('floating_btn');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let data_list_belanja = [];
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

floating_btn.addEventListener('click', () => {
  if (modal.style.display === 'none') {
    showModal();
    return;
  }
  hideModal();
});

modal_bg.addEventListener('click', () => {
  hideModal();
});

addlist_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  //clear input
  event.target.barang.value = '';
  event.target.harga.value = '';

  hideModal();

  renderToHtml();
});

function showModal() {
  modal.style.display = 'flex';
  floating_btn.style.backgroundColor = 'orange';
  floating_btn.style.transform = 'rotate(45deg)';
}

function hideModal() {
  modal.style.display = 'none';
  floating_btn.style.backgroundColor = 'orange';
  floating_btn.style.transform = 'rotate(0deg)';
}

function renderToHtml() {
  root.innerHTML = '';

  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
      <small>${e.tanggal}</small>
      <div class="card_container">
        <img src="https://cdn.pixabay.com/photo/2018/02/26/14/47/check-3183217_960_720.png"/>
        <div class="namaharga">
          <span class= "nama_barang">${e.nama_barang}</span>
          <span class="harga_barang"> Rp ${e.harga_barang} </span>
        </div>
      </div>
      <button onclick="handleDelete(${i})">Selesai</button>
    </div>
    `;
  });
}

function handleDelete(index) {
  data_list_belanja.splice(index, 1);

  renderToHtml();
}

subtitle.innerHTML = new Date().toLocaleDateString();
