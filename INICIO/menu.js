let inicio = document.querySelector('.inicio');
        let menutoggle = document.querySelector('.toggle');
        menutoggle.onclick = function(){
            menutoggle.classList.toggle('active');
            inicio.classList.toggle('active');
        }

const cursor = document.createElement('div');
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.borderRadius = '50%';
cursor.style.position = 'absolute';
cursor.style.background = ' #F272B8';
cursor.style.pointerEvents = 'none';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - 10}px`;
  cursor.style.top = `${e.pageY - 10}px`;
});
//¡¡¡¡¡¡¡¡¡¡¡¡esta funcion permite agregar un cursor persanalizado!!!!!!!!!!!!

document.addEventListener('DOMContentLoaded', () => {
    const cambiarTema = () => {
      const horaActual = new Date().getHours();
      if (horaActual >= 18 || horaActual <= 6) {
        document.body.classList.add('modo-oscuro');
      } else {
        document.body.classList.remove('modo-oscuro');
      }
    };
    cambiarTema();
  });
  
//esta funcion permite cambiar el tema de la pagina dependiendo de la hora del dia              


