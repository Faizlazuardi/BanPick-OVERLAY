// Custom database lokal (contoh data untuk hero)
const heroes = [
    { name: 'Aamon', pickImg: 'Assets/HeroPick/aamon.png', banImg: 'Assets/Icon/Aamon.png'},
    { name: 'Akai', pickImg: 'Assets/HeroPick/akai.png', banImg: 'Assets/Icon/Akai.png' },
    { name: 'Aldous', pickImg: 'Assets/HeroPick/aldous.png', banImg: 'Assets/Icon/Aldous.png' },
    { name: 'Alice', pickImg: 'Assets/HeroPick/alice.png', banImg: 'Assets/Icon/Alice.png' },
    { name: 'Alpha', pickImg: 'Assets/HeroPick/alpha.png', banImg: 'Assets/Icon/Alpha.png' },
    { name: 'Alucard', pickImg: 'Assets/HeroPick/alucard.png', banImg: 'Assets/Icon/Alucard.png' },
    { name: 'Angela', pickImg: 'Assets/HeroPick/angela.png', banImg: 'Assets/Icon/Angela.png' },
    { name: 'Argus', pickImg: 'Assets/HeroPick/argus.png', banImg: 'Assets/Icon/Argus.png' },
    { name: 'Arlot', pickImg: 'Assets/HeroPick/arlot.png', banImg: 'Assets/Icon/Arlot.png' },
    { name: 'Atlas', pickImg: 'Assets/HeroPick/atlas.png', banImg: 'Assets/Icon/Atlas.png' },
    { name: 'Aulus', pickImg: 'Assets/HeroPick/aulus.png', banImg: 'Assets/Icon/Aulus.png' },
    { name: 'Aurora', pickImg: 'Assets/HeroPick/aurora.png', banImg: 'Assets/Icon/Aurora.png' },
    { name: 'Badang', pickImg: 'Assets/HeroPick/badang.png', banImg: 'Assets/Icon/Badang.png' },
    { name: 'Balmond', pickImg: 'Assets/HeroPick/balmond.png', banImg: 'Assets/Icon/Balmond.png' },
    { name: 'Bane', pickImg: 'Assets/HeroPick/bane.png', banImg: 'Assets/Icon/Bane.png' },
    { name: 'Barats', pickImg: 'Assets/HeroPick/barats.png', banImg: 'Assets/Icon/Barats.png' },
    { name: 'Baxia', pickImg: 'Assets/HeroPick/baxia.png', banImg: 'Assets/Icon/Baxia.png' },
    { name: 'Beatrix', pickImg: 'Assets/HeroPick/beatrix.png', banImg: 'Assets/Icon/Beatrix.png' },
    { name: 'Beleric', pickImg: 'Assets/HeroPick/beleric.png', banImg: 'Assets/Icon/Beleric.png' },
    { name: 'Benedetta', pickImg: 'Assets/HeroPick/benedetta.png', banImg: 'Assets/Icon/Benedetta.png' },
    { name: 'Brody', pickImg: 'Assets/HeroPick/brody.png', banImg: 'Assets/Icon/Brody.png' },
    { name: 'Bruno', pickImg: 'Assets/HeroPick/bruno.png', banImg: 'Assets/Icon/Bruno.png' },
    { name: 'Carmila', pickImg: 'Assets/HeroPick/carmila.png', banImg: 'Assets/Icon/Carmila.png' },
    { name: 'Cecilion', pickImg: 'Assets/HeroPick/cecilion.png', banImg: 'Assets/Icon/Cecilion.png' },
    { name: 'Chang\'e', pickImg: 'Assets/HeroPick/chang_e.png', banImg: 'Assets/Icon/Change.png' },
    { name: 'Chip', pickImg: 'Assets/HeroPick/chip.png', banImg: 'Assets/Icon/Chip.png' },
    { name: 'Chou', pickImg: 'Assets/HeroPick/chou.png', banImg: 'Assets/Icon/Chou.png' },
    { name: 'Cici', pickImg: 'Assets/HeroPick/cici.png', banImg: 'Assets/Icon/Cici.png' },
    { name: 'Claude', pickImg: 'Assets/HeroPick/claude.png', banImg: 'Assets/Icon/Claude.png' },
    { name: 'Clint', pickImg: 'Assets/HeroPick/clint.png', banImg: 'Assets/Icon/Clint.png' },
    { name: 'Cyclops', pickImg: 'Assets/HeroPick/cyclops.png', banImg: 'Assets/Icon/Cyclops.png' },
    { name: 'Diggie', pickImg: 'Assets/HeroPick/diggie.png', banImg: 'Assets/Icon/Diggie.png' },
    { name: 'Dyroth', pickImg: 'Assets/HeroPick/dyroth.png', banImg: 'Assets/Icon/Dyroth.png' },
    { name: 'Edith', pickImg: 'Assets/HeroPick/edith.png', banImg: 'Assets/Icon/Edith.png' },
    { name: 'Esmeralda', pickImg: 'Assets/HeroPick/esmeralda.png', banImg: 'Assets/Icon/Esmeralda.png' },
    { name: 'Estes', pickImg: 'Assets/HeroPick/estes.png', banImg: 'Assets/Icon/Estes.png' },
    { name: 'Eudora', pickImg: 'Assets/HeroPick/eudora.png', banImg: 'Assets/Icon/Eudora.png' },
    { name: 'Fanny', pickImg: 'Assets/HeroPick/fanny.png', banImg: 'Assets/Icon/Fanny.png' },
    { name: 'Faramis', pickImg: 'Assets/HeroPick/faramis.png', banImg: 'Assets/Icon/Faramis.png' },
    { name: 'Floryn', pickImg: 'Assets/HeroPick/floryn.png', banImg: 'Assets/Icon/Floryn.png' },
    { name: 'Franco', pickImg: 'Assets/HeroPick/franco.png', banImg: 'Assets/Icon/Franco.png' },
    { name: 'Fredrin', pickImg: 'Assets/HeroPick/fredrin.png', banImg: 'Assets/Icon/Fredrin.png' },
    { name: 'Freya', pickImg: 'Assets/HeroPick/freya.png', banImg: 'Assets/Icon/Freya.png' },
    { name: 'Gatotkaca', pickImg: 'Assets/HeroPick/gatotkaca.png', banImg: 'Assets/Icon/Gatotkaca.png' },
    { name: 'Gloo', pickImg: 'Assets/HeroPick/gloo.png', banImg: 'Assets/Icon/Gloo.png' },
    { name: 'Gord', pickImg: 'Assets/HeroPick/gord.png', banImg: 'Assets/Icon/Gord.png' },
    { name: 'Granger', pickImg: 'Assets/HeroPick/granger.png', banImg: 'Assets/Icon/Granger.png' },
    { name: 'Grock', pickImg: 'Assets/HeroPick/grock.png', banImg: 'Assets/Icon/Grock.png' },
    { name: 'Guinevere', pickImg: 'Assets/HeroPick/guinevere.png', banImg: 'Assets/Icon/Guinevere.png' },
    { name: 'Gusion', pickImg: 'Assets/HeroPick/gusion.png', banImg: 'Assets/Icon/Gusion.png' },
    { name: 'Hanabi', pickImg: 'Assets/HeroPick/hanabi.png', banImg: 'Assets/Icon/Hanabi.png' },
    { name: 'Hanzo', pickImg: 'Assets/HeroPick/hanzo.png', banImg: 'Assets/Icon/Hanzo.png' },
    { name: 'Harith', pickImg: 'Assets/HeroPick/harith.png', banImg: 'Assets/Icon/Harith.png' },
    { name: 'Harley', pickImg: 'Assets/HeroPick/harley.png', banImg: 'Assets/Icon/Harley.png' },
    { name: 'Hayabusa', pickImg: 'Assets/HeroPick/hayabusa.png', banImg: 'Assets/Icon/Hayabusa.png' },
    { name: 'Helcurt', pickImg: 'Assets/HeroPick/helcurt.png', banImg: 'Assets/Icon/Helcurt.png' },
    { name: 'Hilda', pickImg: 'Assets/HeroPick/hilda.png', banImg: 'Assets/Icon/Hilda.png' },
    { name: 'Hylos', pickImg: 'Assets/HeroPick/hylos.png', banImg: 'Assets/Icon/Hylos.png' },
    { name: 'Irithel', pickImg: 'Assets/HeroPick/irithel.png', banImg: 'Assets/Icon/Irithel.png' },
    { name: 'Ixia', pickImg: 'Assets/HeroPick/ixia.png', banImg: 'Assets/Icon/Ixia.png' },
    { name: 'Jawhead', pickImg: 'Assets/HeroPick/jawhead.png', banImg: 'Assets/Icon/Jawhead.png' },
    { name: 'Johnson', pickImg: 'Assets/HeroPick/johnson.png', banImg: 'Assets/Icon/Johnson.png' },
    { name: 'Joy', pickImg: 'Assets/HeroPick/joy.png', banImg: 'Assets/Icon/Joy.png' },
    { name: 'Julian', pickImg: 'Assets/HeroPick/julian.png', banImg: 'Assets/Icon/Julian.png' },
    { name: 'Kadita', pickImg: 'Assets/HeroPick/kadita.png', banImg: 'Assets/Icon/Kadita.png' },
    { name: 'Kagura', pickImg: 'Assets/HeroPick/kagura.png', banImg: 'Assets/Icon/Kagura.png' },
    { name: 'Kaja', pickImg: 'Assets/HeroPick/kaja.png', banImg: 'Assets/Icon/Kaja.png' },
    { name: 'Karina', pickImg: 'Assets/HeroPick/karina.png', banImg: 'Assets/Icon/Karina.png' },
    { name: 'Karrie', pickImg: 'Assets/HeroPick/karrie.png', banImg: 'Assets/Icon/Karrie.png' },
    { name: 'Khaleed', pickImg: 'Assets/HeroPick/khaleed.png', banImg: 'Assets/Icon/Khaleed.png' },
    { name: 'Khufra', pickImg: 'Assets/HeroPick/khufra.png', banImg: 'Assets/Icon/Khufra.png' },
    { name: 'Kimmy', pickImg: 'Assets/HeroPick/kimmy.png', banImg: 'Assets/Icon/Kimmy.png' },
    { name: 'Lancelot', pickImg: 'Assets/HeroPick/lancelot.png', banImg: 'Assets/Icon/Lancelot.png' },
    { name: 'Lapu Lapu', pickImg: 'Assets/HeroPick/lapulapu.png', banImg: 'Assets/Icon/Lapulapu.png' },
    { name: 'Layla', pickImg: 'Assets/HeroPick/layla.png', banImg: 'Assets/Icon/Layla.png' },
    { name: 'Leomord', pickImg: 'Assets/HeroPick/leomord.png', banImg: 'Assets/Icon/Leomord.png' },
    { name: 'Lesley', pickImg: 'Assets/HeroPick/lesley.png', banImg: 'Assets/Icon/Lesley.png' },
    { name: 'Ling', pickImg: 'Assets/HeroPick/ling.png', banImg: 'Assets/Icon/Ling.png' },
    { name: 'Lolita', pickImg: 'Assets/HeroPick/lolita.png', banImg: 'Assets/Icon/Lolita.png' },
    { name: 'Lucas', pickImg: 'Assets/HeroPick/lucas.png', banImg: 'Assets/Icon/Lucas.png' },
    { name: 'Lunox', pickImg: 'Assets/HeroPick/lunox.png', banImg: 'Assets/Icon/Lunox.png' },
    { name: 'Luo Yi', pickImg: 'Assets/HeroPick/luoyi.png', banImg: 'Assets/Icon/Luoyi.png' },
    { name: 'Lylia', pickImg: 'Assets/HeroPick/lylia.png', banImg: 'Assets/Icon/Lylia.png' },
    { name: 'Martis', pickImg: 'Assets/HeroPick/martis.png', banImg: 'Assets/Icon/Martis.png' },
    { name: 'Masha', pickImg: 'Assets/HeroPick/masha.png', banImg: 'Assets/Icon/Masha.png' },
    { name: 'Mathilda', pickImg: 'Assets/HeroPick/mathilda.png', banImg: 'Assets/Icon/Mathilda.png' },
    { name: 'Melissa', pickImg: 'Assets/HeroPick/melissa.png', banImg: 'Assets/Icon/Melissa.png' },
    { name: 'Minotaur', pickImg: 'Assets/HeroPick/minotour.png', banImg: 'Assets/Icon/Minotour.png' },
    { name: 'Minsitthar', pickImg: 'Assets/HeroPick/minsitthar.png', banImg: 'Assets/Icon/Minisitthar.png' },
    { name: 'Miya', pickImg: 'Assets/HeroPick/miya.png', banImg: 'Assets/Icon/Miya.png' },
    { name: 'Moskov', pickImg: 'Assets/HeroPick/moskov.png', banImg: 'Assets/Icon/Moskov.png' },
    { name: 'Nana', pickImg: 'Assets/HeroPick/nana.png', banImg: 'Assets/Icon/Nana.png' },
    { name: 'Natalia', pickImg: 'Assets/HeroPick/natalia.png', banImg: 'Assets/Icon/Natalia.png' },
    { name: 'Nathan', pickImg: 'Assets/HeroPick/nathan.png', banImg: 'Assets/Icon/Nathan.png' },
    { name: 'Nolan', pickImg: 'Assets/HeroPick/nolan.png', banImg: 'Assets/Icon/Nolan.png' },
    { name: 'Novaria', pickImg: 'Assets/HeroPick/novaria.png', banImg: 'Assets/Icon/Novaria.png' },
    { name: 'Odette', pickImg: 'Assets/HeroPick/odette.png', banImg: 'Assets/Icon/Odette.png' },
    { name: 'Paquito', pickImg: 'Assets/HeroPick/paquito.png', banImg: 'Assets/Icon/Paquito.png' },
    { name: 'Parsha', pickImg: 'Assets/HeroPick/parsha.png', banImg: 'Assets/Icon/Parsha.png' },
    { name: 'Phoveus', pickImg: 'Assets/HeroPick/phoveus.png', banImg: 'Assets/Icon/Phoveus.png' },
    { name: 'Popol and Kupa', pickImg: 'Assets/HeroPick/popolandkupa.png', banImg: 'Assets/Icon/Popolandkupa.png' },
    { name: 'Rafaela', pickImg: 'Assets/HeroPick/rafaela.png', banImg: 'Assets/Icon/Rafaela.png' },
    { name: 'Roger', pickImg: 'Assets/HeroPick/roger.png', banImg: 'Assets/Icon/Roger.png' },
    { name: 'Ruby', pickImg: 'Assets/HeroPick/ruby.png', banImg: 'Assets/Icon/Ruby.png' },
    { name: 'Saber', pickImg: 'Assets/HeroPick/saber.png', banImg: 'Assets/Icon/Saber.png' },
    { name: 'Selena', pickImg: 'Assets/HeroPick/selena.png', banImg: 'Assets/Icon/Selena.png' },
    { name: 'Silvanna', pickImg: 'Assets/HeroPick/silvanna.png', banImg: 'Assets/Icon/Silvanna.png' },
    { name: 'Sun', pickImg: 'Assets/HeroPick/sun.png', banImg: 'Assets/Icon/Sun.png' },
    { name: 'Suyou', pickImg: 'Assets/HeroPick/suyou.png', banImg: 'Assets/Icon/Suyou.png' },
    { name: 'Terizla', pickImg: 'Assets/HeroPick/terizla.png', banImg: 'Assets/Icon/Terizla' },
    { name: 'Thamuz', pickImg: 'Assets/HeroPick/thamuz.png', banImg: 'Assets/Icon/Thamuz.png' },
    { name: 'Tigreal', pickImg: 'Assets/HeroPick/tigreal.png', banImg: 'Assets/Icon/Tigreal.png' },
    { name: 'Uranus', pickImg: 'Assets/HeroPick/uranus.png', banImg: 'Assets/Icon/Uranus.png' },
    { name: 'Vale', pickImg: 'Assets/HeroPick/vale.png', banImg: 'Assets/Icon/Vale.png' },
    { name: 'Valentina', pickImg: 'Assets/HeroPick/valentina.png', banImg: 'Assets/Icon/Valentina.png' },
    { name: 'Valir', pickImg: 'Assets/HeroPick/valir.png', banImg: 'Assets/Icon/Valir.png' },
    { name: 'Vexana', pickImg: 'Assets/HeroPick/vexana.png', banImg: 'Assets/Icon/Vexana.png' },
    { name: 'Wanwan', pickImg: 'Assets/HeroPick/wanwan.png', banImg: 'Assets/Icon/Wanwan.png' },
    { name: 'Xavier', pickImg: 'Assets/HeroPick/xavier.png', banImg: 'Assets/Icon/Xavier.png' },
    { name: 'Xborg', pickImg: 'Assets/HeroPick/xborg.png', banImg: 'Assets/Icon/Xborg.png' },
    { name: 'Yin', pickImg: 'Assets/HeroPick/yin.png', banImg: 'Assets/Icon/Yin.png' },
    { name: 'Yisunshin', pickImg: 'Assets/HeroPick/yisunshin.png', banImg: 'Assets/Icon/Yisunshin.png' },
    { name: 'Yuzhong', pickImg: 'Assets/HeroPick/yuzhong.png', banImg: 'Assets/Icon/Yuzhong.png' },
    { name: 'Yve', pickImg: 'Assets/HeroPick/yve.png', banImg: 'Assets/Icon/Yve.png' },
    { name: 'Zhask', pickImg: 'Assets/HeroPick/zhask.png', banImg: 'Assets/Icon/Zhask.png' },
    { name: 'Zhuxin', pickImg: 'Assets/HeroPick/zhuxin.png', banImg: 'Assets/Icon/Zhuxin.png' },
    { name: 'Zilong', pickImg: 'Assets/HeroPick/zilong.png', banImg: 'Assets/Icon/Zilong.png' }
];

//  input pencarian hero  (bug id 6) ----------------------------------------------------------------------------------------------
const searchInputs = document.querySelectorAll('.dropdown');
searchInputs.forEach(searchInput => {
    searchInput.addEventListener('input', function() {
        let id = searchInput.id.replace('search-', '');
        let action = id < 11 ? 'pick' : 'ban';
        filterDropdown(id, action);
    });
});

// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id, action) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = ''; // Kosongkan dropdown sebelum ditampilkan
    
    // Filter heroes berdasarkan pencarian
    heroes
        .filter(hero => hero.name.toLowerCase().startsWith(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => UpdateHeroImage(hero, id, action);
            dropdownItems.appendChild(item);
        });
}


// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
function UpdateHeroImage(hero, id, action) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');
    
    id = (action === 'pick') ? ShiftHero(id) : id;
    
    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => {
            DisplayHeroImage(hero, id, action);
        }, 500);
    } else {
        DisplayHeroImage(hero, id, action);
    }
}


// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function DisplayHeroImage(hero, id, action) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const imgSrc = action === 'ban' ? hero.banImg : hero.pickImg;
    imageDisplay.innerHTML = `<img src="${imgSrc}" alt="${hero.name}" class="fly-in">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = ''; // Sembunyikan dropdown
}


// fungsi untuk up pick hero
function ShiftHero(id) {
    let shiftId = id;
    while (shiftId > 1 && shiftId != 6) {
        shiftId--;
        const existingImage = document.getElementById(`image-display-${shiftId}`).querySelector('img');
        if (existingImage) {
            shiftId++;
            break;
        }
    }
    
    if (shiftId != id) {
        // Hapus input hero saat ini
        const inputHero = document.getElementById(`search-${id}`);
        inputHero.value = '';
        
        document.getElementById(`dropdown-items-${id}`).innerHTML = '' ; //sembunyikan dropdown
        
        // Menukar nickname
        const currentNickname = document.getElementById(`input-${id}`);
        const shiftNickname = document.getElementById(`input-${shiftId}`);
        
        if (currentNickname && shiftNickname) {
            [shiftNickname.value, currentNickname.value] = [currentNickname.value, shiftNickname.value]
            updateNickname(id);
            updateNickname(shiftId);
        }
        return shiftId;
    }
    return id;
}


//fungsi untuk swap heropick
const swaperElements = document.querySelectorAll('.swaper');
swaperElements.forEach(swaperElement => {
    swaperElement.addEventListener('click', function SwapHero() {
        const checkboxesBlue = document.querySelectorAll('.blue-swaper');
        const checkboxesRed = document.querySelectorAll('.red-swaper');
        const selectedBlue = Array.from(checkboxesBlue).filter(cb => cb.checked);
        const selectedRed = Array.from(checkboxesRed).filter(cb => cb.checked);
        let id1, id2;
        
        let selectedArray = selectedBlue.length === 2 ? selectedBlue : selectedRed.length === 2 ? selectedRed : null;
        if (selectedArray) {
            id1 = selectedArray[0].id.replace('swap-', '');
            id2 = selectedArray[1].id.replace('swap-', '');
        } else {
            return;
        }
        
        //reset swaper
        const swaper1 = document.getElementById(`swap-${id1}`);
        const swaper2 = document.getElementById(`swap-${id2}`);
        swaper1.checked = false
        swaper2.checked = false
        
        //menukar nickname
        const Nickname1 = document.getElementById(`input-${id1}`);
        const Nickname2 = document.getElementById(`input-${id2}`);
        [Nickname1.value, Nickname2.value] = [Nickname2.value, Nickname1.value];
        updateNickname(id1);
        updateNickname(id2);
        
        //menukar hero
        const existingImage1 = document.getElementById(`image-display-${id1}`).querySelector('img');
        const existingImage2 = document.getElementById(`image-display-${id2}`).querySelector('img');
        if(existingImage1 && existingImage2){
            //menukar input
            const input1 = document.getElementById(`search-${id1}`);
            const input2 = document.getElementById(`search-${id2}`);
            [input1.value, input2.value] = [input2.value, input1.value]
            
            // Mencari hero berdasarkan nilai input
            const hero1 = heroes.find(hero => hero.name === input1.value);
            const hero2 = heroes.find(hero => hero.name === input2.value);
            
            // Memperbarui gambar hero
            UpdateHeroImage(hero1, id1, 'pick')
            UpdateHeroImage(hero2, id2, 'pick')
        }
    });
});


// Auto close dropdown (logic menjadi per item) ---------------------------------------------------------------------------------------
document.addEventListener('click', function(event) {
    const searchInputs = document.querySelectorAll('.dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-items');
    
    let isClickInsideInput = Array.from(searchInputs).some(input => input.contains(event.target));
    dropdownItems.forEach(dropdown => {
        if (!isClickInsideInput) {
            dropdown.innerHTML = '';
        }
    });
});


// Reset semua dropdown dan input dengan animasi fly-out
document.getElementById('reset-dropdowns').addEventListener('click', function() {
    // Pilih semua elemen image-display dan dropdown-items secara bersamaan
    const imageDisplays = document.querySelectorAll('[id^="image-display-"]');
    const searchInputs = document.querySelectorAll('[id^="search-"]');
    const dropdownItems = document.querySelectorAll('[id^="dropdown-items-"]');
    
    // Iterasi setiap elemen yang ditemukan
    imageDisplays.forEach((imageDisplay, index) => {
        const image = imageDisplay.querySelector('img');
        if (image) {
            // Tambahkan kelas animasi fly-out
            image.classList.add('fly-out');
        }
        
        // Hapus nilai input dan dropdown setelah animasi selesai
        setTimeout(() => {
            // Reset nilai input dan dropdown untuk elemen yang bersesuaian
            searchInputs[index].value = '';
            imageDisplay.innerHTML = '';
            dropdownItems[index].innerHTML = '';
        }, 500); // Delay sesuai dengan durasi animasi (0.5 detik)
    });
});


// Fungsi untuk mereset nickname
document.getElementById('reset-nickname').addEventListener('click', function ResetNickname() {
    document.querySelectorAll(".nickname-field").forEach(input => {
        input.value = '';
        document.getElementById("output-" + input.id.replace("input-", "")).textContent = '';
    });
});

 // Fungsi untuk mengupdate output nickname
document.querySelectorAll('.nickname-field').forEach(input =>{
    const inputElement = document.getElementById(input.id);
    inputElement?.addEventListener("input", function() {
        let id = input.id.replace('input-','')
        updateNickname(id);
    });
})

function updateNickname(id) {
    const inputText = document.getElementById(`input-${id}`).value;
    document.getElementById(`output-${id}`).textContent = inputText;
}


// Fungsi untuk menukar semua (nama tim, nickname, gambar tim, dan status checkbox 1-3 dengan 4-6)
document.getElementById('switch-team').addEventListener('click', function() {
    //tukar nickname
    for (let i = 1; i <= 5; i++) {
        let blue = document.getElementById(`input-${i}`);
        let red = document.getElementById(`input-${i + 5}`);
        [blue.value, red.value] = [red.value, blue.value]
        updateNickname(i);
        updateNickname(i+5);
    };
    
    // Tukar nama tim
    const team1 = document.getElementById('team-1');
    const team2 = document.getElementById('team-2');
    [team1.value, team2.value] = [team2.value, team1.value];
    UpdateTeamName();
    
    // Tukar gambar utama
    const img1 = document.getElementById('logo-1');
    const img2 = document.getElementById('logo-2');
    [img1.src, img2.src] = [img2.src, img1.src];
    
    // Tukar status checkbox dan visibilitas gambar tambahan
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById(`win-check-${i}`);
        const checkboxB = document.getElementById(`win-check-${i + 3}`);
        const extraImageA = document.getElementById(`extraImage-${i}`);
        const extraImageB = document.getElementById(`extraImage-${i + 3}`);
        
        // Tukar status checkbox
        [checkboxA.checked, checkboxB.checked] = [checkboxB.checked, checkboxA.checked];
        
        // Tukar tampilan gambar berdasarkan checkbox
        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
});


// Fungsi untuk mengupdate nama tim yang ditampilkan
document.querySelectorAll('.teams').forEach(team => {
    team.addEventListener('input', UpdateTeamName);
});

function UpdateTeamName() {
    document.querySelectorAll('.teams').forEach(team => {
        const teamId = team.id.replace('team-', '');
        const teamName = team.value;
        document.getElementById(`team-name-display-${teamId}`).textContent = teamName;
    });
}


// Fungsi untuk mereset gambar, nama tim, dan checkbox ke kondisi awal
document.getElementById('reset-team').addEventListener('click', function(){
    document.getElementById('team-1').value = "Team 1";
    document.getElementById('team-2').value = "Team 2";
    UpdateTeamName();
    
    document.getElementById('logo-1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('logo-2').src = "https://via.placeholder.com/300x200?text=Image+2";
    
    document.getElementById('file-logo-1').value = "";
    document.getElementById('file-logo-2').value = "";
    
    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`win-check-${i}`).checked = false;
        document.getElementById(`extraImage-${i}`).style.display = "none";
    }
});


// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
const checkboxes = document.querySelectorAll('.win-check')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(){
        const image = document.getElementById(`extraImage-${checkbox.id.replace('win-check-','')}`);
        image.style.display = checkbox.checked ? "block" : "none";
    })
});


//fungsi display nama turnament
const tournamentnameInput = document.getElementById('tournamentnamemid');
tournamentnameInput.addEventListener('input', function() {
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');
    tournamentnameOutput.textContent = tournamentnameInput.value;
});

// Fungsi untuk memuat logo tim dari file lokal
document.querySelectorAll('.file-logo').forEach(input => {
    input.addEventListener('change', function(event) {
        const imgId = input.id.replace('file-logo-', 'logo-');
        const img = document.getElementById(imgId);
        img.src = URL.createObjectURL(event.target.files[0]);
    });
});