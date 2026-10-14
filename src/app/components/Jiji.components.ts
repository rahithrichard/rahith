<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#fff0f5">
  <title>For Jiji ❤️</title>
  <style>
    :root { color-scheme: light; --pink:#e94d8a; --deep:#9b2458; --soft:#fff0f5; }
    * { box-sizing: border-box; }
    body {
      margin: 0; min-height: 100vh; display: grid; place-items: center;
      padding: 24px; overflow-x: hidden; font-family: ui-rounded, "Trebuchet MS", system-ui, sans-serif;
      color: #54233b;
      background: radial-gradient(circle at top, #fff 0, #fff0f5 46%, #ffdce9 100%);
    }
    .hearts { position: fixed; inset: 0; overflow: hidden; pointer-events: none; }
    .heart { position: absolute; bottom: -50px; opacity: .65; animation: floatUp linear infinite; }
    @keyframes floatUp { to { transform: translateY(-115vh) rotate(25deg); opacity: 0; } }
    .card {
      position: relative; width: min(100%, 540px); text-align: center; padding: clamp(26px, 6vw, 46px);
      border: 1px solid rgba(233,77,138,.22); border-radius: 30px;
      background: rgba(255,255,255,.83); box-shadow: 0 22px 70px rgba(155,36,88,.15);
      backdrop-filter: blur(8px);
    }
    .eyebrow { margin: 0 0 8px; color: var(--pink); font-weight: 800; letter-spacing: .14em; text-transform: uppercase; font-size: .78rem; }
    h1 { color: var(--deep); font-size: clamp(2.2rem, 8vw, 3.5rem); line-height: 1.06; margin: 10px 0 14px; }
    .big-heart { font-size: 4.2rem; display: inline-block; animation: pulse 1.3s ease-in-out infinite; filter: drop-shadow(0 8px 12px #e94d8a30); }
    @keyframes pulse { 50% { transform: scale(1.13); } }
    .intro { font-size: 1.1rem; line-height: 1.8; margin: 0 auto 24px; max-width: 390px; }
    button {
      border: 0; border-radius: 999px; padding: 15px 25px; cursor: pointer; font: inherit;
      font-weight: 800; color: white; background: linear-gradient(135deg, #f56b9f, #d93678);
      box-shadow: 0 10px 24px #d9367835; transition: transform .2s, box-shadow .2s;
    }
    button:hover { transform: translateY(-2px); box-shadow: 0 14px 28px #d9367845; }
    button:focus-visible { outline: 3px solid #9b2458; outline-offset: 4px; }
    .letter { display: none; text-align: left; margin-top: 25px; padding: 22px; border-radius: 20px; background: var(--soft); line-height: 1.85; animation: appear .5s ease both; }
    .letter.show { display: block; }
    @keyframes appear { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    .signature { text-align: right; color: var(--deep); font-weight: 800; }
    .footer { margin: 25px 0 0; font-size: .83rem; opacity: .7; }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; } }
  </style>
</head>
<body>
  <div class="hearts" id="hearts" aria-hidden="true"></div>
  <main class="card">
    <p class="eyebrow">A little surprise, just for you</p>
    <div class="big-heart" aria-hidden="true">❤️</div>
    <h1>I Love You,<br> Ponnumaaa!</h1>
    <p class="intro">To my favourite person, my happiness, and my forever. 💗</p>
    <button id="openLetter" type="button" aria-expanded="false" aria-controls="loveLetter">Tap for your love letter 💌</button>
    <section class="letter" id="loveLetter" aria-live="polite">
      <p>Ente ponnumaaa… 🥹❤️</p>
      <p>Nee aanu ente santhosham, ente lokam, ente ellam. Doore aanenkilum ente manassu eppozhum ninte koode aanu.</p>
      <p>Every day, I feel lucky to have you in my life. No matter what happens or how far apart we are, my love for you will always stay strong. You are my home, my peace, and my forever person.</p>
      <p><strong>I love you so much, ponnumaaa! Innnum ennum, nammal randuperum. ❤️😘</strong></p>
      <p class="signature">Forever yours 💋</p>
    </section>
    <p class="footer">Made with all my love, just for you ✨</p>
  </main>
  <script>
    const hearts = document.getElementById('hearts');
    const symbols = ['❤', '💕', '💗', '♡'];
    for (let i = 0; i < 18; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = symbols[i % symbols.length];
      heart.style.left = (Math.random() * 100) + '%';
      heart.style.fontSize = (14 + Math.random() * 22) + 'px';
      heart.style.animationDuration = (9 + Math.random() * 12) + 's';
      heart.style.animationDelay = (-Math.random() * 18) + 's';
      hearts.appendChild(heart);
    }
    const button = document.getElementById('openLetter');
    const letter = document.getElementById('loveLetter');
    button.addEventListener('click', () => {
      const opened = letter.classList.toggle('show');
      button.setAttribute('aria-expanded', String(opened));
      button.textContent = opened ? 'Close your love letter 💗' : 'Tap for your love letter 💌';
    });
  </script>
</body>
</html>
