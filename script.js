// Implementasi Smooth Scrolling untuk link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset untuk tinggi navbar yang posisinya sticky
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Menambahkan sedikit efek log sederhana saat halaman termuat
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portofolio berhasil dimuat! Siap ngoding! 🚀");
});