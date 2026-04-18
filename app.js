// 1. Logika Menumbuhkan Bunga dalam Bentuk Hati
function growFlowers() {
    const garden = document.getElementById('flower-garden');
    const flowerCount = 180; // Jumlah bunga

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';

        // Rumus matematika Heart Curve
        const angle = Math.random() * Math.PI * 2;
        // x = 16 sin^3(t)
        // y = 13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t)
        const x = 16 * Math.pow(Math.sin(angle), 3);
        const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        // Beri sedikit variasi posisi agar terlihat rimbun natural
        const randomness = Math.random() * 20; 
        const size = Math.random() * 10 + 5; // Ukuran bunga acak
        const delay = Math.random() * 4; // Jeda waktu mekar (0-4 detik)

        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        
        // Atur posisi bunga ke tengah container (Skala dikali 5.5)
        flower.style.left = `calc(50% + ${(x * 5.5) + (Math.random()*10 - 5)}px)`;
        flower.style.top = `calc(40% + ${(y * 5.5) + (Math.random()*10 - 5)}px)`;
        
        flower.style.animationDelay = `${delay}s`;
        
        // Variasi warna kuning (beberapa agak oranye)
        const yellowTones = ['#ffeb3b', '#ffd700', '#fbc02d', '#ffea00'];
        flower.style.background = yellowTones[Math.floor(Math.random() * yellowTones.length)];

        garden.appendChild(flower);
    }
}

// 2. Logika Penghitung Waktu
const startDate = new Date("2023-03-21T00:00:00").getTime(); // GANTI TANGGAL JADIANMU DI SINI

function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}

// Jalankan fungsi
growFlowers();
setInterval(updateTimer, 1000);
updateTimer();
