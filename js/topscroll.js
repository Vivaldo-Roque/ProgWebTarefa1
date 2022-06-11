window.addEventListener("load", () => {
    //Pega o botão
    var mybutton = document.getElementById("myTopBtn");

    // Quando o usuário rola para baixo 20px da parte superior do documento, mostra o botão
    window.onscroll = function () { 
        scrollFunction();
        headerFollow();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Quando o usuário clicar no botão, role até o topo do documento
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    mybutton.addEventListener("click", () => {
        topFunction();
    });

    // Get the header
    var header = document.getElementsByTagName("header")[0];

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    var bannerSize = 360;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function headerFollow() {
        if (window.pageYOffset > sticky + bannerSize) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

});