document.addEventListener("DOMContentLoaded", () => {
  let total = 0, cart = document.querySelector(".cart-content"), totalEl = document.querySelector(".total");
  document.querySelectorAll(".card button").forEach(btn => btn.addEventListener("click", () => {
    const c = btn.closest(".card"), n = c.querySelector("h3").textContent, p = parseFloat(c.querySelector("p").textContent.replace(/[^\d.]/g,""));
    const item = document.createElement("div"); item.className="cart-item"; item.innerHTML=`<span>${n}</span><span>₱${p.toFixed(2)}</span>`;
    cart.appendChild(item);
    total += p; totalEl.textContent = `Total: ₱${total.toFixed(2)}`;
  }));
});
