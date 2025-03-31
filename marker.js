const canvas = document.getElementById("marcadorCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let isDrawing = false;

  // Variables para guardar la última posición
  let lastX = 0, lastY = 0;

  window.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY]; // Guarda la posición inicial
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    ctx.strokeStyle = "#F20505"; // Color sólido sin transparencia
    ctx.lineWidth = 6; // Grosor del trazo
    ctx.lineCap = "round"; // Bordes redondeados
    ctx.lineJoin = "round"; // Uniones redondeadas

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    [lastX, lastY] = [e.clientX, e.clientY]; // Actualiza la posición
  });

  window.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  // Borra el trazo al presionar "X"
  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "x") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }); 

