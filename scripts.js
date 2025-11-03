const FORM = document.getElementById('preventaForm');
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxmBPLrZs_n2PvRBYKABFq-v80FhMdjXTQ0TEzzu9l6rfC2NwRlTRFch_Ln4Qq3K1bu/exec';

FORM.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Generar fecha automática
  document.getElementById('fecha_registro').value = new Date().toLocaleString('sv-SE', {
    timeZone: 'Europe/Madrid'
  }).replace(' ', 'T');

  const data = Object.fromEntries(new FormData(FORM).entries());

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const out = await res.json();

    if (out.result === 'success') {
      alert(' Registro completado. ¡Te contactaremos antes del lanzamiento!');
      FORM.reset();
    } else {
      alert(' Error al registrar. Intenta de nuevo.');
    }
  } catch (err) {
    alert(' Error de conexión. Intenta más tarde.');
  }
});
