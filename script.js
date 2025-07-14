for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.className = "wave";
  div.style.setProperty("--i", i);

  const delay = -Math.floor(Math.random() * 60);
  div.style.animationDelay = `${delay}s`;

  const color = `hsl(230, 50%, ${100 - i * 5}%)`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 50 Q25 0 50 50 T100 50 L100 100 L0 100 Z" fill="${color}"/>
    </svg>`.trim();
  const encoded = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  div.style.backgroundImage = `url("${encoded}")`;

  document.body.appendChild(div);
}
