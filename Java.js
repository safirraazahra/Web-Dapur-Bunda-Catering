  // Smooth scroll & Navbar effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 100) {
                nav.classList.add('glass');
            } else {
                nav.classList.remove('glass');
            }
        });

        // Mouse Dot Follower
        const dot = document.getElementById('dot');
        window.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        });

        // Subtle parallax for images
        window.addEventListener('scroll', () => {
            const images = document.querySelectorAll('.cat-card img');
            images.forEach(img => {
                let speed = 0.2;
                let rect = img.parentElement.getBoundingClientRect();
                if(rect.top < window.innerHeight && rect.bottom > 0) {
                    img.style.transform = `translateY(${(rect.top - window.innerHeight/2) * speed}px) scale(1.1)`;
                }
            });
        });


// 1. Efek Header saat Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 80) {
        nav.classList.add('glass');
    } else {
        nav.classList.remove('glass');
    }
});

// 2. Custom Cursor Follower
const dot = document.getElementById('dot');
window.addEventListener('mousemove', (e) => {
    // Memberikan sedikit delay agar terlihat halus
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// 3. Efek Fade In sederhana saat scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.story-row').forEach(row => {
    row.style.opacity = '0';
    row.style.transform = 'translateY(50px)';
    row.style.transition = 'all 0.8s ease-out';
    observer.observe(row);
});

// 4. Parallax halus untuk background header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.page-header');
    let scrollPos = window.pageYOffset;
    header.style.backgroundPositionY = scrollPos * 0.5 + 'px';
});

/**
 * Logika Produk Dapur Bunda
 * Menangani filter kategori, lightbox, dan efek navigasi
 */

// 1. Data Informasi Kategori (Untuk efek "pindah halaman")
const categoryMeta = {
    all: { 
        title: "Produk Kami", 
        desc: "Jelajahi berbagai pilihan menu terbaik kami untuk segala jenis acara Anda." 
    },
    prasmanan: { 
        title: "Paket Prasmanan", 
        desc: "Sajian prasmanan mewah dengan pilihan menu Nusantara dan Internasional untuk pernikahan." 
    },
    tumpeng: { 
        title: "Nasi Tumpeng", 
        desc: "Simbol rasa syukur dengan hiasan tumpeng yang estetik dan rasa yang sangat autentik." 
    },
    nasikotak: { 
        title: "Nasi Kotak Premium", 
        desc: "Solusi praktis untuk rapat kantor, seminar, atau acara keluarga dengan kemasan higienis." 
    },
    nasikuning: { 
        title: "Nasi Kuning Spesial", 
        desc: "Gurihnya nasi kuning dengan lauk pauk lengkap yang dimasak dengan rempah pilihan Bunda." 
    },
    gubukan: { 
        title: "Menu Gubukan (Stall)", 
        desc: "Menu pendamping seru mulai dari Bakso, Siomay, hingga Sate untuk menyemarakkan acara." 
    }
};

const filterButtons = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');
const pageTitle = document.getElementById('page-title');
const pageDesc = document.getElementById('page-desc');

// 2. Logika Filter Kategori
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedCategory = btn.getAttribute('data-category');

        // Update status aktif tombol
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Efek transisi teks header (berubah halaman)
        pageTitle.style.opacity = '0';
        pageDesc.style.opacity = '0';

        setTimeout(() => {
            pageTitle.innerText = categoryMeta[selectedCategory].title;
            pageDesc.innerText = categoryMeta[selectedCategory].desc;
            pageTitle.style.opacity = '1';
            pageDesc.style.opacity = '1';
        }, 400);

        // Filter Grid Item
        productItems.forEach(item => {
            // Sembunyikan semua item terlebih dahulu
            item.style.display = 'none';
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';

            // Tunjukkan item yang sesuai kategori
            if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
                item.style.display = 'block';
                // Delay sedikit untuk memicu animasi masuk
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            }
        });
    });
});

// 3. Logika Lightbox (Klik Gambar)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close-lightbox');

productItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightbox.style.display = "block";
        lightboxImg.src = imgSrc;
        document.body.style.overflow = 'hidden'; // Kunci scroll saat lightbox buka
    });
});

closeBtn.onclick = () => {
    lightbox.style.display = "none";
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target == lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = 'auto';
    }
};

// 4. Efek Navigasi Glassmorphism
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('glass');
    } else {
        nav.classList.remove('glass');
    }
});

// 5. Kursor Kustom (Smooth Tracking)
const dot = document.getElementById('dot');
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateDot() {
    // Lerp untuk pergerakan halus
    dotX += (mouseX - dotX) * 0.1;
    dotY += (mouseY - dotY) * 0.1;
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';
    requestAnimationFrame(animateDot);
}
animateDot();

        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data input
            const name = document.getElementById('name').value;
            const package = document.getElementById('package').value;
            const guests = document.getElementById('guests').value || '-';
            const message = document.getElementById('message').value || '-';

            // Membuat teks pesan dengan format yang rapi
            const textRaw = `Halo Bunda! Saya ${name} ingin tanya tentang katering.\n\n` +
                          `• Paket: ${package}\n` +
                          `• Estimasi: ${guests} orang\n` +
                          `• Pesan: ${message}`;

            // Menggunakan encodeURIComponent agar karakter spesial (seperti spasi & baris baru) terenkode dengan benar untuk URL
            const waText = encodeURIComponent(textRaw);
            
            // Nomor WhatsApp tujuan
            const phoneNumber = "6287838504518";
            
            // Membuka WhatsApp di tab baru
            window.open(`https://wa.me/${phoneNumber}?text=${waText}`, '_blank');
        });