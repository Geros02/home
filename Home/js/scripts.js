let lastScrollTop = 0;

        window.addEventListener("scroll", function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Aparece borde superior al desplazarse hacia abajo
                document.querySelector(".border-top").style.opacity = "1";
                document.querySelector(".border-bottom").style.opacity = "0";
            } else {
                // Aparece borde inferior al desplazarse hacia arriba
                document.querySelector(".border-top").style.opacity = "0";
                document.querySelector(".border-bottom").style.opacity = "1";
            }
            lastScrollTop = scrollTop;
        });