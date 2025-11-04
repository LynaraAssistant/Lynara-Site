/* =======================================
   LYNARA scripts.js v3.7
   UX optimizada + scroll + avisos + preventa final
   ======================================= */

// -------- FORMULARIO DE PREVENTA --------
document.getElementById("preventForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    nombre: form.nombre.value.trim(),
    empresa: form.empresa.value.trim(),
    telefono: form.telefono.value.trim(),
    email: form.email.value.trim(),
  };

  if (!data.nombre || !data.empresa || !data.telefono || !data.email) {
    mostrarAviso("⚠️ Por favor, completa todos los campos.", "error");
    return;
  }

  const btn = form.querySelector("button[type='submit']");
  const textoOriginal = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Enviando...";

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwxM4Tp-YASN-BFzNixvok6aSziTHR-a-VnYS8D26YSLy8r3Lu-Vb2cPXNTj3K7fgt/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    mostrarAviso("✅ Registro enviado con éxito. Te avisaremos antes del lanzamiento.", "ok");
    form.reset();
  } catch (error) {
    console.error(error);
    mostrarAviso("❌ Error de conexión. Inténtalo más tarde.", "error");
  } finally {
    btn.disabled = false;
    btn.textContent = textoOriginal;
  }
});

// -------- AVISOS VISUALES --------
function mostrarAviso(mensaje, tipo = "ok") {
  let aviso = document.createElement("div");
  aviso.textContent = mensaje;
  aviso.className = `aviso ${tipo}`;
  document.body.appendChild(aviso);

  setTimeout(() => aviso.classList.add("visible"), 100);
  setTimeout(() => aviso.classList.remove("visible"), 3500);
  setTimeout(() => aviso.remove(), 4000);
}

// -------- SCROLL SUAVE --------
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const destino = document.querySelector(enlace.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      window.scrollTo({
        top: destino.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// -------- SELECCIÓN DE PLAN --------
const plans = document.querySelectorAll(".plan.card");
plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    plans.forEach((p) => p.classList.remove("active"));
    plan.classList.add("active");
  });
});

// -------- BOTONES DE PLAN → FORMULARIO --------
document.querySelectorAll(".plan button, .plan a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const destino = document.getElementById("preventas");
    if (destino) {
      window.scrollTo({
        top: destino.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// -------- ESTILO DE AVISOS --------
const estiloAviso = document.createElement("style");
estiloAviso.textContent = `
  .aviso {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: rgba(0, 225, 180, 0.1);
    border: 1px solid rgba(0, 225, 180, 0.5);
    color: #00e1b4;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 600;
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 9999;
  }
  .aviso.error {
    background: rgba(255, 80, 80, 0.1);
    border-color: rgba(255, 80, 80, 0.5);
    color: #ff7b7b;
  }
  .aviso.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;
document.head.appendChild(estiloAviso);
