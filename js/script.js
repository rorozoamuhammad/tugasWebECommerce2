function jam() {
    const jam = document.getElementById('jam');
    const dt = new Date();
    let h = dt.getHours();
    let m = dt.getMinutes();

    if(h < 10) {
        h = `0${h}`;
    } 
    if(m < 10) {
        m = `0${m}`;
    }

    jam.innerHTML = `${h}.${m}`;
}

setInterval(jam, 100);

function navbar() {
    const list = document.querySelectorAll('#list');
    const home = document.getElementById('home');
    const src = document.getElementById('src');
    const help = document.getElementById('help');
    const profile = document.getElementById('profile');
    
    list[0].addEventListener('click', () => {
        list[0].dataset.nav = 'yes';
        list[1].dataset.nav = 'no';
        list[2].dataset.nav = 'no';
        list[3].dataset.nav = 'no';
        list[4].dataset.nav = 'no';
        home.dataset.muncul = 'yes';
        src.dataset.muncul = 'no';
        help.dataset.muncul = 'no';
        profile.dataset.muncul = 'no';
    });
    list[1].addEventListener('click', () => {
        list[1].dataset.nav = 'yes';
        list[0].dataset.nav = 'no';
        list[2].dataset.nav = 'no';
        list[3].dataset.nav = 'no';
        list[4].dataset.nav = 'no';
        home.dataset.muncul = 'no';
        src.dataset.muncul = 'yes';
        help.dataset.muncul = 'no';
        profile.dataset.muncul = 'no';
    });
    list[2].addEventListener('click', () => {
        list[2].dataset.nav = 'yes';
        list[1].dataset.nav = 'no';
        list[0].dataset.nav = 'no';
        list[3].dataset.nav = 'no';
        list[4].dataset.nav = 'no';
        home.dataset.muncul = 'no';
        src.dataset.muncul = 'no';
        help.dataset.muncul = 'no';
        profile.dataset.muncul = 'yes';
    });
    list[3].addEventListener('click', () => {
        list[3].dataset.nav = 'yes';
        list[1].dataset.nav = 'no';
        list[2].dataset.nav = 'no';
        list[0].dataset.nav = 'no';
        list[4].dataset.nav = 'no';
        home.dataset.muncul = 'no';
        src.dataset.muncul = 'no';
        help.dataset.muncul = 'yes';
        profile.dataset.muncul = 'no';
    });
    list[4].addEventListener('click', () => {
        list[4].dataset.nav = 'yes';
        list[1].dataset.nav = 'no';
        list[2].dataset.nav = 'no';
        list[3].dataset.nav = 'no';
        list[0].dataset.nav = 'no';
        home.dataset.muncul = 'no';
        src.dataset.muncul = 'no';
        help.dataset.muncul = 'no';
        profile.dataset.muncul = 'no';
    });
}

navbar();

function burgerNav() {
    const ul = document.getElementById('burger');
    const burger = document.getElementById('mobile');
    const window = document.getElementById('window');

    burger.addEventListener('click', () => {
        if(burger.dataset.burger == 'no') {
            burger.dataset.burger = 'yes';
            ul.dataset.burger = 'yes';
            window.classList.add('scroll');
        } else {
            burger.dataset.burger = 'no';
            ul.dataset.burger = 'no';
            window.classList.remove('scroll');
        }
    });
}

burgerNav();


function headerPertama() {
    const pertama = document.getElementById('headerPertama');
    const kedua = document.getElementById('headerKedua');

    pertama.style.display = 'block';
    kedua.style.display = 'none';
}

setInterval(headerPertama, 5000);

function headerKedua() {
    const pertama = document.getElementById('headerPertama');
    const kedua = document.getElementById('headerKedua');

    pertama.style.display = 'none';
    kedua.style.display = 'block';
}

setInterval(headerKedua, 10000);

function home() {
    const home = document.getElementById('home');

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`)
    .then(response => response.json())
    .then(data => {
        let html = ``;
        let count = 100;
        getList(data, count, html, home);
    });
}

home();

function full() {
    const full = document.getElementById('full');
    const btn = document.getElementById('home');
    const btnsrc = document.getElementById('src');
    const window = document.getElementById('window');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.classList.contains('btn')) {
            let mealItem = e.target.parentElement;
            getDataResep(full, window, mealItem);
        }
    });

    btnsrc.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.classList.contains('btn')) {
            let mealItem = e.target.parentElement;
            getDataResep(full, window, mealItem);
        }
    });

    full.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.classList.contains('close')) {
            full.innerHTML = ``;
            window.classList.remove('scroll');
        }
    });
}

full();

function pembayaran() {
    const full = document.getElementById('full');
    const pembayaran = document.getElementById('pembayaran');

    full.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.classList.contains('btnPembayaran')) {
            let getItem = e.target.parentElement.parentElement;
            pembayaran.innerHTML = `
            <div class="box">
                <div class="img">
                    <img src="${getItem.dataset.img}"
                        alt="gambar">
                </div>
                <article>
                    <p class="close">X</p>
                    <h1>${getItem.dataset.judul}</h1>
                    <p>Rp. ${getItem.dataset.harga}</p>
                    <select>
                        <option>Gopay</option>
                        <option>Shoopepay</option>
                        <option>BCA</option>
                    </select><br>
                    <button type="button" class="btnBuy">Beli</button>
                </article>
            </div>`;
        }
    });

    pembayaran.addEventListener('click', (e) => {
        const notif = document.getElementById('notif');
        e.preventDefault();
        if(e.target.classList.contains('close')) {
            pembayaran.innerHTML = ``;
        }
        if (e.target.classList.contains('btnBuy')) {
            let dapat = e.target.parentElement.parentElement.parentElement.previousElementSibling;
            let chield = dapat.children;
            let child = chield[0].children;
            let articel = child[0].children;
            let masukArticle = articel[2].children;
            let p = masukArticle[2];
            if(p.dataset.terbeli == "no") {
                notif.innerHTML = `
                <div class="full">
                    <div class="bungkus">
                    <h1>Terima Kasih Sudah Membeli Resep</h1>
                    </div>
                </div>`;
                setTimeout(() => {
                    notif.innerHTML = ``;
                    pembayaran.innerHTML = ``;
                }, 1000);
                p.dataset.terbeli = "yes";
            } else {
                notif.innerHTML = `
                <div class="fullTerbeli">
                    <div class="bungkus">
                        <h1>Anda Sudah Membeli Resep Ini</h1>
                    </div>
                </div>`;
                setTimeout(() => {
                    notif.innerHTML = ``;
                    pembayaran.innerHTML = ``;
                }, 1000);
            }
        }
    });
}

pembayaran();

function cari() {
    const bungkus = document.getElementById('bungkus');
    const input = document.getElementById('input');
    const btnInput = document.getElementById('btnSrc');
    bungkus.style.display = 'none';

    btnInput.addEventListener('click', () => {
        bungkus.style.display = 'flex';
        let ip = input.value.trim();
        
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ip}`)
        .then(response => response.json())
        .then(data => {
            let html = ``;
            let count = 100;
            getList(data, count, html, bungkus);
        });
    });
}

cari();

function getList(data, count, html, bungkus) {
    if(data.meals) {
        data.meals.forEach(meal => {
            if(count % 2 == 0) {
                html += `
                <div class="card" id="card" data-id="${meal.idMeal}" data-harga="100.000">
                    <div class="img">
                        <img src="${meal.strMealThumb}" alt="gambar">
                    </div>
                    <h1>${meal.strMeal}</h1>
                    <p>Rp.100.000</p>
                    <button type="button" class="btn">Beli</button>
                </div>`;
            } else {
                html += `
                <div class="card" id="card" data-id="${meal.idMeal}" data-harga="50.000">
                    <div class="img">
                        <img src="${meal.strMealThumb}" alt="gambar">
                    </div>
                    <h1>${meal.strMeal}</h1>
                    <p>Rp.50.000</p>
                    <button type="button" class="btn">Beli</button>
                </div>`;
            }
            count--;
        });
        bungkus.innerHTML = html;
    } else {
        bungkus.innerHTML = `<h1 class="hasilTidakDitemukan">Hasil Tidak Ditemukan</h1>`;
    }
}

function getDataResep(full, window, mealItem) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => {
            data = data.meals;
            full.innerHTML = `
            <div class="fullBlack" id="fullBlack">
                <div class="fullCard" id="fullCard" data-img="${data[0].strMealThumb}" data-judul="${data[0].strMeal}" data-harga="${mealItem.dataset.harga}">
                    <p id="close" class="close">X</p>
                    <img src="${data[0].strMealThumb}" alt="gmabar">
                    <article>
                        <h1>${data[0].strMeal}</h1>
                        <p>Rp. ${mealItem.dataset.harga}</p>
                        <p class="langkah" data-terbeli="no">langkah-langkah: ${data[0].strInstructions}</p>
                        <button type="button" class="btnPembayaran">Beli</button>
                    </article>
                </div>
            </div>`;
        });
    window.classList.add('scroll');
}

function offline() {
    const main = document.getElementById('main');
    // const window = document.getElementById('window');
    const offline = document.getElementById('offline');

    if(navigator.online) {
        main.dataset.online = 'yes';
        offline.dataset.online = 'no';
    }
    if(navigator.offline) {
        main.dataset.online = 'no';
        offline.dataset.online = 'yes';
    }

    window.addEventListener('online', () => {
        main.dataset.online = 'yes';
        offline.dataset.online = 'no';
    });
    window.addEventListener('offline', () => {
        main.dataset.online = 'no';
        offline.dataset.online = 'yes';
    });
}

offline();