// Custom database lokal (contoh data untuk hero)
const heroes = [
    { name: 'Aamon', pickImg: 'Assets/HeroPick/aamon.png', banImg: 'Assets/HeroBan/Aamon.png'},
    { name: 'Akai', pickImg: 'Assets/HeroPick/akai.png', banImg: 'Assets/HeroBan/Akai.png' },
    { name: 'Aldous', pickImg: 'Assets/HeroPick/aldous.png', banImg: 'Assets/HeroBan/Aldous.png' },
    { name: 'Alice', pickImg: 'Assets/HeroPick/alice.png', banImg: 'Assets/HeroBan/Alice.png' },
    { name: 'Alpha', pickImg: 'Assets/HeroPick/alpha.png', banImg: 'Assets/HeroBan/Alpha.png' },
    { name: 'Alucard', pickImg: 'Assets/HeroPick/alucard.png', banImg: 'Assets/HeroBan/Alucard.png' },
    { name: 'Angela', pickImg: 'Assets/HeroPick/angela.png', banImg: 'Assets/HeroBan/Angela.png' },
    { name: 'Argus', pickImg: 'Assets/HeroPick/argus.png', banImg: 'Assets/HeroBan/Argus.png' },
    { name: 'Arlot', pickImg: 'Assets/HeroPick/arlot.png', banImg: 'Assets/HeroBan/Arlot.png' },
    { name: 'Atlas', pickImg: 'Assets/HeroPick/atlas.png', banImg: 'Assets/HeroBan/Atlas.png' },
    { name: 'Aulus', pickImg: 'Assets/HeroPick/aulus.png', banImg: 'Assets/HeroBan/Aulus.png' },
    { name: 'Aurora', pickImg: 'Assets/HeroPick/aurora.png', banImg: 'Assets/HeroBan/Aurora.png' },
    { name: 'Badang', pickImg: 'Assets/HeroPick/badang.png', banImg: 'Assets/HeroBan/Badang.png' },
    { name: 'Balmond', pickImg: 'Assets/HeroPick/balmond.png', banImg: 'Assets/HeroBan/Balmond.png' },
    { name: 'Bane', pickImg: 'Assets/HeroPick/bane.png', banImg: 'Assets/HeroBan/Bane.png' },
    { name: 'Barats', pickImg: 'Assets/HeroPick/barats.png', banImg: 'Assets/HeroBan/Barats.png' },
    { name: 'Baxia', pickImg: 'Assets/HeroPick/baxia.png', banImg: 'Assets/HeroBan/Baxia.png' },
    { name: 'Beatrix', pickImg: 'Assets/HeroPick/beatrix.png', banImg: 'Assets/HeroBan/Beatrix.png' },
    { name: 'Beleric', pickImg: 'Assets/HeroPick/beleric.png', banImg: 'Assets/HeroBan/Beleric.png' },
    { name: 'Benedetta', pickImg: 'Assets/HeroPick/benedetta.png', banImg: 'Assets/HeroBan/Benedetta.png' },
    { name: 'Brody', pickImg: 'Assets/HeroPick/brody.png', banImg: 'Assets/HeroBan/Brody.png' },
    { name: 'Bruno', pickImg: 'Assets/HeroPick/bruno.png', banImg: 'Assets/HeroBan/Bruno.png' },
    { name: 'Carmila', pickImg: 'Assets/HeroPick/carmila.png', banImg: 'Assets/HeroBan/Carmila.png' },
    { name: 'Cecilion', pickImg: 'Assets/HeroPick/cecilion.png', banImg: 'Assets/HeroBan/Cecilion.png' },
    { name: 'Chang\'e', pickImg: 'Assets/HeroPick/chang_e.png', banImg: 'Assets/HeroBan/Change.png' },
    { name: 'Chip', pickImg: 'Assets/HeroPick/chip.png', banImg: 'Assets/HeroBan/Chip.png' },
    { name: 'Chou', pickImg: 'Assets/HeroPick/chou.png', banImg: 'Assets/HeroBan/Chou.png' },
    { name: 'Cici', pickImg: 'Assets/HeroPick/cici.png', banImg: 'Assets/HeroBan/Cici.png' },
    { name: 'Claude', pickImg: 'Assets/HeroPick/claude.png', banImg: 'Assets/HeroBan/Claude.png' },
    { name: 'Clint', pickImg: 'Assets/HeroPick/clint.png', banImg: 'Assets/HeroBan/Clint.png' },
    { name: 'Cyclops', pickImg: 'Assets/HeroPick/cyclops.png', banImg: 'Assets/HeroBan/Cyclops.png' },
    { name: 'Diggie', pickImg: 'Assets/HeroPick/diggie.png', banImg: 'Assets/HeroBan/Diggie.png' },
    { name: 'Dyroth', pickImg: 'Assets/HeroPick/dyroth.png', banImg: 'Assets/HeroBan/Dyroth.png' },
    { name: 'Edith', pickImg: 'Assets/HeroPick/edith.png', banImg: 'Assets/HeroBan/Edith.png' },
    { name: 'Esmeralda', pickImg: 'Assets/HeroPick/esmeralda.png', banImg: 'Assets/HeroBan/Esmeralda.png' },
    { name: 'Estes', pickImg: 'Assets/HeroPick/estes.png', banImg: 'Assets/HeroBan/Estes.png' },
    { name: 'Eudora', pickImg: 'Assets/HeroPick/eudora.png', banImg: 'Assets/HeroBan/Eudora.png' },
    { name: 'Fanny', pickImg: 'Assets/HeroPick/fanny.png', banImg: 'Assets/HeroBan/Fanny.png' },
    { name: 'Faramis', pickImg: 'Assets/HeroPick/faramis.png', banImg: 'Assets/HeroBan/Faramis.png' },
    { name: 'Floryn', pickImg: 'Assets/HeroPick/floryn.png', banImg: 'Assets/HeroBan/Floryn.png' },
    { name: 'Franco', pickImg: 'Assets/HeroPick/franco.png', banImg: 'Assets/HeroBan/Franco.png' },
    { name: 'Fredrin', pickImg: 'Assets/HeroPick/fredrin.png', banImg: 'Assets/HeroBan/Fredrin.png' },
    { name: 'Freya', pickImg: 'Assets/HeroPick/freya.png', banImg: 'Assets/HeroBan/Freya.png' },
    { name: 'Gatotkaca', pickImg: 'Assets/HeroPick/gatotkaca.png', banImg: 'Assets/HeroBan/Gatotkaca.png' },
    { name: 'Gloo', pickImg: 'Assets/HeroPick/gloo.png', banImg: 'Assets/HeroBan/Gloo.png' },
    { name: 'Gord', pickImg: 'Assets/HeroPick/gord.png', banImg: 'Assets/HeroBan/Gord.png' },
    { name: 'Granger', pickImg: 'Assets/HeroPick/granger.png', banImg: 'Assets/HeroBan/Granger.png' },
    { name: 'Grock', pickImg: 'Assets/HeroPick/grock.png', banImg: 'Assets/HeroBan/Grock.png' },
    { name: 'Guinevere', pickImg: 'Assets/HeroPick/guinevere.png', banImg: 'Assets/HeroBan/Guinevere.png' },
    { name: 'Gusion', pickImg: 'Assets/HeroPick/gusion.png', banImg: 'Assets/HeroBan/Gusion.png' },
    { name: 'Hanabi', pickImg: 'Assets/HeroPick/hanabi.png', banImg: 'Assets/HeroBan/Hanabi.png' },
    { name: 'Hanzo', pickImg: 'Assets/HeroPick/hanzo.png', banImg: 'Assets/HeroBan/Hanzo.png' },
    { name: 'Harith', pickImg: 'Assets/HeroPick/harith.png', banImg: 'Assets/HeroBan/Harith.png' },
    { name: 'Harley', pickImg: 'Assets/HeroPick/harley.png', banImg: 'Assets/HeroBan/Harley.png' },
    { name: 'Hayabusa', pickImg: 'Assets/HeroPick/hayabusa.png', banImg: 'Assets/HeroBan/Hayabusa.png' },
    { name: 'Helcurt', pickImg: 'Assets/HeroPick/helcurt.png', banImg: 'Assets/HeroBan/Helcurt.png' },
    { name: 'Hilda', pickImg: 'Assets/HeroPick/hilda.png', banImg: 'Assets/HeroBan/Hilda.png' },
    { name: 'Hylos', pickImg: 'Assets/HeroPick/hylos.png', banImg: 'Assets/HeroBan/Hylos.png' },
    { name: 'Irithel', pickImg: 'Assets/HeroPick/irithel.png', banImg: 'Assets/HeroBan/Irithel.png' },
    { name: 'Ixia', pickImg: 'Assets/HeroPick/ixia.png', banImg: 'Assets/HeroBan/Ixia.png' },
    { name: 'Jawhead', pickImg: 'Assets/HeroPick/jawhead.png', banImg: 'Assets/HeroBan/Jawhead.png' },
    { name: 'Johnson', pickImg: 'Assets/HeroPick/johnson.png', banImg: 'Assets/HeroBan/Johnson.png' },
    { name: 'Joy', pickImg: 'Assets/HeroPick/joy.png', banImg: 'Assets/HeroBan/Joy.png' },
    { name: 'Julian', pickImg: 'Assets/HeroPick/julian.png', banImg: 'Assets/HeroBan/Julian.png' },
    { name: 'Kadita', pickImg: 'Assets/HeroPick/kadita.png', banImg: 'Assets/HeroBan/Kadita.png' },
    { name: 'Kagura', pickImg: 'Assets/HeroPick/kagura.png', banImg: 'Assets/HeroBan/Kagura.png' },
    { name: 'Kaja', pickImg: 'Assets/HeroPick/kaja.png', banImg: 'Assets/HeroBan/Kaja.png' },
    { name: 'Karina', pickImg: 'Assets/HeroPick/karina.png', banImg: 'Assets/HeroBan/Karina.png' },
    { name: 'Karrie', pickImg: 'Assets/HeroPick/karrie.png', banImg: 'Assets/HeroBan/Karrie.png' },
    { name: 'Khaleed', pickImg: 'Assets/HeroPick/khaleed.png', banImg: 'Assets/HeroBan/Khaleed.png' },
    { name: 'Khufra', pickImg: 'Assets/HeroPick/khufra.png', banImg: 'Assets/HeroBan/Khufra.png' },
    { name: 'Kimmy', pickImg: 'Assets/HeroPick/kimmy.png', banImg: 'Assets/HeroBan/Kimmy.png' },
    { name: 'Lancelot', pickImg: 'Assets/HeroPick/lancelot.png', banImg: 'Assets/HeroBan/Lancelot.png' },
    { name: 'Lapu Lapu', pickImg: 'Assets/HeroPick/lapulapu.png', banImg: 'Assets/HeroBan/Lapulapu.png' },
    { name: 'Layla', pickImg: 'Assets/HeroPick/layla.png', banImg: 'Assets/HeroBan/Layla.png' },
    { name: 'Leomord', pickImg: 'Assets/HeroPick/leomord.png', banImg: 'Assets/HeroBan/Leomord.png' },
    { name: 'Lesley', pickImg: 'Assets/HeroPick/lesley.png', banImg: 'Assets/HeroBan/Lesley.png' },
    { name: 'Ling', pickImg: 'Assets/HeroPick/ling.png', banImg: 'Assets/HeroBan/Ling.png' },
    { name: 'Lolita', pickImg: 'Assets/HeroPick/lolita.png', banImg: 'Assets/HeroBan/Lolita.png' },
    { name: 'Lucas', pickImg: 'Assets/HeroPick/lucas.png', banImg: 'Assets/HeroBan/Lucas.png' },
    { name: 'Lunox', pickImg: 'Assets/HeroPick/lunox.png', banImg: 'Assets/HeroBan/Lunox.png' },
    { name: 'Luo Yi', pickImg: 'Assets/HeroPick/luoyi.png', banImg: 'Assets/HeroBan/Luoyi.png' },
    { name: 'Lylia', pickImg: 'Assets/HeroPick/lylia.png', banImg: 'Assets/HeroBan/Lylia.png' },
    { name: 'Martis', pickImg: 'Assets/HeroPick/martis.png', banImg: 'Assets/HeroBan/Martis.png' },
    { name: 'Masha', pickImg: 'Assets/HeroPick/masha.png', banImg: 'Assets/HeroBan/Masha.png' },
    { name: 'Mathilda', pickImg: 'Assets/HeroPick/mathilda.png', banImg: 'Assets/HeroBan/Mathilda.png' },
    { name: 'Melissa', pickImg: 'Assets/HeroPick/melissa.png', banImg: 'Assets/HeroBan/Melissa.png' },
    { name: 'Minotaur', pickImg: 'Assets/HeroPick/minotour.png', banImg: 'Assets/HeroBan/Minotour.png' },
    { name: 'Minsitthar', pickImg: 'Assets/HeroPick/minsitthar.png', banImg: 'Assets/HeroBan/Minisitthar.png' },
    { name: 'Miya', pickImg: 'Assets/HeroPick/miya.png', banImg: 'Assets/HeroBan/Miya.png' },
    { name: 'Moskov', pickImg: 'Assets/HeroPick/moskov.png', banImg: 'Assets/HeroBan/Moskov.png' },
    { name: 'Nana', pickImg: 'Assets/HeroPick/nana.png', banImg: 'Assets/HeroBan/Nana.png' },
    { name: 'Natalia', pickImg: 'Assets/HeroPick/natalia.png', banImg: 'Assets/HeroBan/Natalia.png' },
    { name: 'Nathan', pickImg: 'Assets/HeroPick/nathan.png', banImg: 'Assets/HeroBan/Nathan.png' },
    { name: 'Nolan', pickImg: 'Assets/HeroPick/nolan.png', banImg: 'Assets/HeroBan/Nolan.png' },
    { name: 'Novaria', pickImg: 'Assets/HeroPick/novaria.png', banImg: 'Assets/HeroBan/Novaria.png' },
    { name: 'Odette', pickImg: 'Assets/HeroPick/odette.png', banImg: 'Assets/HeroBan/Odette.png' },
    { name: 'Paquito', pickImg: 'Assets/HeroPick/paquito.png', banImg: 'Assets/HeroBan/Paquito.png' },
    { name: 'Parsha', pickImg: 'Assets/HeroPick/parsha.png', banImg: 'Assets/HeroBan/Parsha.png' },
    { name: 'Phoveus', pickImg: 'Assets/HeroPick/phoveus.png', banImg: 'Assets/HeroBan/Phoveus.png' },
    { name: 'Popol and Kupa', pickImg: 'Assets/HeroPick/popolandkupa.png', banImg: 'Assets/HeroBan/Popolandkupa.png' },
    { name: 'Rafaela', pickImg: 'Assets/HeroPick/rafaela.png', banImg: 'Assets/HeroBan/Rafaela.png' },
    { name: 'Roger', pickImg: 'Assets/HeroPick/roger.png', banImg: 'Assets/HeroBan/Roger.png' },
    { name: 'Ruby', pickImg: 'Assets/HeroPick/ruby.png', banImg: 'Assets/HeroBan/Ruby.png' },
    { name: 'Saber', pickImg: 'Assets/HeroPick/saber.png', banImg: 'Assets/HeroBan/Saber.png' },
    { name: 'Selena', pickImg: 'Assets/HeroPick/selena.png', banImg: 'Assets/HeroBan/Selena.png' },
    { name: 'Silvanna', pickImg: 'Assets/HeroPick/silvanna.png', banImg: 'Assets/HeroBan/Silvanna.png' },
    { name: 'Sun', pickImg: 'Assets/HeroPick/sun.png', banImg: 'Assets/HeroBan/Sun.png' },
    { name: 'Suyou', pickImg: 'Assets/HeroPick/suyou.png', banImg: 'Assets/HeroBan/Suyou.png' },
    { name: 'Terizla', pickImg: 'Assets/HeroPick/terizla.png', banImg: 'Assets/HeroBan/Terizla' },
    { name: 'Thamuz', pickImg: 'Assets/HeroPick/thamuz.png', banImg: 'Assets/HeroBan/Thamuz.png' },
    { name: 'Tigreal', pickImg: 'Assets/HeroPick/tigreal.png', banImg: 'Assets/HeroBan/Tigreal.png' },
    { name: 'Uranus', pickImg: 'Assets/HeroPick/uranus.png', banImg: 'Assets/HeroBan/Uranus.png' },
    { name: 'Vale', pickImg: 'Assets/HeroPick/vale.png', banImg: 'Assets/HeroBan/Vale.png' },
    { name: 'Valentina', pickImg: 'Assets/HeroPick/valentina.png', banImg: 'Assets/HeroBan/Valentina.png' },
    { name: 'Valir', pickImg: 'Assets/HeroPick/valir.png', banImg: 'Assets/HeroBan/Valir.png' },
    { name: 'Vexana', pickImg: 'Assets/HeroPick/vexana.png', banImg: 'Assets/HeroBan/Vexana.png' },
    { name: 'Wanwan', pickImg: 'Assets/HeroPick/wanwan.png', banImg: 'Assets/HeroBan/Wanwan.png' },
    { name: 'Xavier', pickImg: 'Assets/HeroPick/xavier.png', banImg: 'Assets/HeroBan/Xavier.png' },
    { name: 'Xborg', pickImg: 'Assets/HeroPick/xborg.png', banImg: 'Assets/HeroBan/Xborg.png' },
    { name: 'Yin', pickImg: 'Assets/HeroPick/yin.png', banImg: 'Assets/HeroBan/Yin.png' },
    { name: 'Yisunshin', pickImg: 'Assets/HeroPick/yisunshin.png', banImg: 'Assets/HeroBan/Yisunshin.png' },
    { name: 'Yuzhong', pickImg: 'Assets/HeroPick/yuzhong.png', banImg: 'Assets/HeroBan/Yuzhong.png' },
    { name: 'Yve', pickImg: 'Assets/HeroPick/yve.png', banImg: 'Assets/HeroBan/Yve.png' },
    { name: 'Zhask', pickImg: 'Assets/HeroPick/zhask.png', banImg: 'Assets/HeroBan/Zhask.png' },
    { name: 'Zhuxin', pickImg: 'Assets/HeroPick/zhuxin.png', banImg: 'Assets/HeroBan/Zhuxin.png' },
    { name: 'Zilong', pickImg: 'Assets/HeroPick/zilong.png', banImg: 'Assets/HeroBan/Zilong.png' }
];

//  Input pencarian hero
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
            const item = document.createElement('option');
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


// Fungsi untuk up pick hero
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


// Fungsi untuk swap heropick
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


// Auto close dropdown
document.addEventListener('click', function(event) {
    const searchInputs = document.querySelectorAll('.dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-items');
    
    let isClickInsideInput = Array.from(searchInputs).some(input => input.contains(event.target));
    
    if (!isClickInsideInput) {
        dropdownItems.forEach(dropdown => {
            dropdown.innerHTML = '';
        });
    } else {
        searchInputs.forEach((input, index) => {
            if (input !== event.target) {
                dropdownItems[index].innerHTML = '';
            }
        });
    }
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
function ResetNickname() {
    document.querySelectorAll('.nickname-field').forEach(input => {
        input.value = '';
        document.getElementById('output-' + input.id.replace('input-', '')).textContent = '';
    });
};


 // Fungsi untuk mengupdate output nickname
document.querySelectorAll('.nickname-field').forEach(input =>{
    const inputElement = document.getElementById(input.id);
    inputElement?.addEventListener('input', function() {
        let id = input.id.replace('input-','')
        updateNickname(id);
    });
})

function updateNickname(id) {
    const inputText = document.getElementById(`input-${id}`).value;
    document.getElementById(`output-${id}`).textContent = inputText;
}


// Fungsi untuk menukar semua (nama tim, nickname pemain, gambar tim, dan status checkbox 1-3 dengan 4-6)
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
        const checkbox1 = document.getElementById(`win-check-${i}`);
        const checkbox2 = document.getElementById(`win-check-${i + 3}`);
        const winIcon1 = document.getElementById(`win-icon-${i}`);
        const winIcon2 = document.getElementById(`win-icon-${i + 3}`);
        
        // Tukar status checkbox
        [checkbox1.checked, checkbox2.checked] = [checkbox2.checked, checkbox1.checked];
        
        // Tukar tampilan gambar berdasarkan checkbox
        winIcon1.style.display = checkbox1.checked ? "block" : "none";
        winIcon2.style.display = checkbox2.checked ? "block" : "none";
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


// Fungsi untuk mereset logo, nama tim, nickname pemain, dan checkbox ke kondisi awal
document.getElementById('reset-team').addEventListener('click', function(){
    //reset nama team
    document.getElementById('team-1').value = "Team 1";
    document.getElementById('team-2').value = "Team 2";
    UpdateTeamName();
    
    // reset logo
    document.getElementById('logo-1').src = "Assets/images/80x80.png";
    document.getElementById('logo-2').src = "Assets/images/80x80.png";
    
    document.getElementById('file-logo-1').value = "";
    document.getElementById('file-logo-2').value = "";
    
    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`win-check-${i}`).checked = false;
        document.getElementById(`win-icon-${i}`).style.display = "none";
    }

    // Reset nickname
    ResetNickname()
});


// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
const checkboxes = document.querySelectorAll('.win-check')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(){
        const image = document.getElementById(`win-icon-${checkbox.id.replace('win-check-','')}`);
        image.style.display = checkbox.checked ? "block" : "none";
    })
});


// Fungsi display nama turnament
const tournamentnameInput = document.getElementById('tournament-name-input');
tournamentnameInput.addEventListener('input', function() {
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');
    tournamentnameOutput.textContent = tournamentnameInput.value;
});

// Fungsi untuk memuat logo tim dari file lokal
document.querySelectorAll('.file-logo').forEach(input => {
    input.addEventListener('change', function() {
        const imgId = input.id.replace('file-logo-', 'logo-');
        const img = document.getElementById(imgId);
        img.src = URL.createObjectURL(input.files[0]);
    });
});