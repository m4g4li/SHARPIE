let inicio = document.querySelector('.inicio');
        let menutoggle = document.querySelector('.toggle');
        menutoggle.onclick = function(){
            menutoggle.classList.toggle('active');
            inicio.classList.toggle('active');
        }