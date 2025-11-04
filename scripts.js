document.getElementById("preventaForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nombre: form.nombre.value,
    empresa: form.empresa.value,
    telefono: form.telefono.value,
    email: form.email.value
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxwN4Tp-YASn-BFzNixxHxGa5IzTHMrR-vmvY5Dz6Y3YLer3Lu-Vkb2QCPNTX5gLJg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("✅ Registro enviado con éxito. Te avisaremos antes del lanzamiento.");
    form.reset();

  } catch (error) {
    alert("❌ Error de conexión. Intenta más tarde.");
    console.error(error);
  }
});
document.getElementById("preventaForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nombre: form.nombre.value,
    empresa: form.empresa.value,
    telefono: form.telefono.value,
    email: form.email.value,
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwaMTp-YASN-BFzNixxok6aSziTHR-a-VmYS0D26Y5Ly8r3Lu-Vbz0CPNTXJeLxg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("✅ Registro enviado con éxito. Te avisaremos antes del lanzamiento.");
    form.reset();
  } catch (error) {
    alert("❌ Error de conexión. Intenta más tarde.");
    console.error(error);
  }
});


// 🟩 Selección animada de plan
const plans = document.querySelectorAll(".card.plan");
plans.forEach(plan => {
  plan.addEventListener("click", () => {
    plans.forEach(p => p.classList.remove("active"));
    plan.classList.add("active");
  });
});
