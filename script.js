const RELATIONSHIP_START = '2025-10-29T19:35:00+05:00';

const bookPages = [
  ['Глава 1', 'Сентябрь...', 'Там, где всё началось: обычные слова неожиданно стали первым кадром нашей истории.'],
  ['Глава 2', 'Первые сообщения...', 'Я ждал каждое уведомление, потому что в нём могла быть ты.'],
  ['Глава 3', '19:35...', 'Время, которое стало символом ожидания, улыбки и внутреннего волнения.'],
  ['Глава 4', 'Ташкент...', 'Город, дорога и ощущение, что чувства становятся ближе и смелее.'],
  ['Глава 5', 'Я понял, что люблю тебя...', 'Это случилось тихо: сердце просто перестало сомневаться.'],
  ['Глава 6', 'Авиация...', 'Наши встречи, взгляды и моменты, которые хочется повторить.'],
  ['Глава 7', '7 месяцев вместе...', 'Сегодня я снова выбираю тебя — нежно, искренне и навсегда.']
];

const reasons = [
  'Твоя улыбка делает любой день светлее.', 'Твои глаза умеют говорить нежнее слов.', 'Ты заботишься так, будто обнимаешь душой.', 'С тобой даже тишина становится уютной.', 'Ты вдохновляешь меня становиться лучше.',
  'Ты умеешь поддержать в нужный момент.', 'Твоя доброта — это отдельный вид красоты.', 'Мне нравится твой характер.', 'Ты делаешь меня счастливым без усилий.', 'С тобой хочется строить будущее.',
  'Ты умеешь радоваться мелочам.', 'Ты очень красивая.', 'Ты настоящая.', 'Ты нежная.', 'Ты сильная.', 'Ты смешная.', 'Ты милая, когда злишься.', 'Ты заставляешь меня улыбаться.', 'Ты стала моим домом.', 'С тобой спокойно.',
  'Ты умеешь слушать.', 'Ты важна для меня каждый день.', 'Ты особенная.', 'Ты мой любимый человек.', 'Ты делаешь обычные дни праздничными.', 'Ты даришь тепло.', 'Ты веришь в нас.', 'Ты красиво смеёшься.', 'Ты делаешь мир мягче.', 'Ты моя радость.',
  'Ты запоминаешь детали.', 'Ты умеешь быть рядом.', 'Мне нравится твой голос.', 'Мне нравится ждать тебя.', 'Мне нравится писать тебе.', 'Мне нравится думать о тебе.', 'Ты — мой самый тёплый сон.', 'Ты — причина моей нежности.', 'Ты прекрасна внутри.', 'Ты прекрасна снаружи.',
  'Ты умеешь удивлять.', 'Ты делаешь любовь настоящей.', 'Ты моя любимая привычка.', 'Ты мой самый красивый случай.', 'Ты дороже всех слов.', 'Ты умеешь быть ласковой.', 'Ты честная.', 'Ты умная.', 'Ты очаровательная.', 'Ты невероятная.',
  'С тобой хочется гулять бесконечно.', 'С тобой хочется смотреть на звёзды.', 'С тобой хочется путешествовать.', 'С тобой хочется мечтать.', 'С тобой хочется молчать и улыбаться.', 'Ты делаешь меня смелее.', 'Ты делаешь меня добрее.', 'Ты моя мотивация.', 'Ты мой свет.', 'Ты мой закат.',
  'Ты мой рассвет.', 'Ты моя самая красивая мысль.', 'Ты умеешь быть смешной и нежной одновременно.', 'Ты делаешь расстояние меньше.', 'Ты заставляешь сердце биться быстрее.', 'Ты мой любимый диалог.', 'Ты мой любимый человек в телефоне.', 'Ты мой любимый человек в жизни.', 'Ты умеешь быть заботливой.', 'Ты умеешь быть искренней.',
  'Я люблю твою энергию.', 'Я люблю твои привычки.', 'Я люблю наши воспоминания.', 'Я люблю наши планы.', 'Я люблю наши прогулки.', 'Я люблю наши разговоры.', 'Я люблю нашу ревность, потому что она про чувства.', 'Я люблю нашу нежность.', 'Я люблю нашу историю.', 'Я люблю наше сегодня.',
  'Ты делаешь музыку красивее.', 'Ты делаешь города теплее.', 'Ты делаешь ожидание приятным.', 'Ты делаешь встречи волшебными.', 'Ты делаешь моё сердце мягким.', 'Ты умеешь быть моей поддержкой.', 'Ты — моё вдохновение.', 'Ты — мой лучший подарок.', 'Ты — мой любимый человек.', 'Ты — моя любовь.',
  'Я люблю тебя за то, что ты есть.', 'Я люблю тебя за то, как ты смотришь.', 'Я люблю тебя за твою нежность.', 'Я люблю тебя за твоё тепло.', 'Я люблю тебя за твою душу.', 'Я люблю тебя за наши 7 месяцев.', 'Я люблю тебя за каждый будущий день.', 'Я люблю тебя больше, чем вчера.', 'Я люблю тебя сегодня.', 'Я буду любить тебя завтра.'
];

let audioContext;
let musicTimer;
let currentPage = 0;
let secretClicks = 0;
let loveBuffer = '';

const $ = (selector) => document.querySelector(selector);

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  initAnimations();
  initCounter();
  initGallery();
  initBook();
  initReasons();
  initSecrets();
  initFutureLetter();
  initMusic();
  initSky();
  initCursor();
  setInterval(spawnLoveNote, 5200);
});

function initAnimations() {
  if (window.AOS) AOS.init({ duration: 900, easing: 'ease-out-cubic', once: false, offset: 90 });
  if (window.Lenis) {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
  if (!window.gsap) return;
  gsap.timeline({ delay: 0.4 })
    .to('.intro-line:nth-child(1)', { opacity: 1, duration: 1.2 })
    .to('.intro-line:nth-child(1)', { opacity: 0, duration: .8, delay: 1 })
    .to('.intro-line:nth-child(2)', { opacity: 1, duration: 1.2 })
    .to('.intro-line:nth-child(2)', { opacity: 0, duration: .8, delay: 1 })
    .to('.intro-line:nth-child(3)', { opacity: 1, scale: 1.05, duration: 1.4 });
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.story-card').forEach((card) => {
      gsap.to(card, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: card, scrub: true } });
    });
  }
}

function initCounter() {
  const start = new Date(RELATIONSHIP_START).getTime();
  const tick = () => {
    const diff = Math.max(0, Date.now() - start);
    const totalSeconds = Math.floor(diff / 1000);
    $('#days').textContent = Math.floor(totalSeconds / 86400);
    $('#hours').textContent = Math.floor((totalSeconds % 86400) / 3600);
    $('#minutes').textContent = Math.floor((totalSeconds % 3600) / 60);
    $('#seconds').textContent = totalSeconds % 60;
  };
  tick();
  setInterval(tick, 1000);
}

function initGallery() {
  const wrapper = $('#mediaGallery');
  const media = window.LOVE_MEDIA?.length ? window.LOVE_MEDIA : [];
  wrapper.innerHTML = media.map((item) => {
    const caption = `<div class="media-caption"><strong>${item.title || 'Наш момент'}</strong><br>${item.caption || ''}</div>`;
    if (item.type === 'image') return `<div class="swiper-slide"><figure class="media-item"><img src="${item.src}" alt="${item.title || 'Фото'}" loading="lazy">${caption}</figure></div>`;
    if (item.type === 'video') return `<div class="swiper-slide"><figure class="media-item"><video src="${item.src}" muted loop playsinline preload="metadata"></video>${caption}</figure></div>`;
    return `<div class="swiper-slide"><figure class="media-item"><div class="placeholder"><div><h3>${item.title}</h3><p>${item.caption}</p></div></div>${caption}</figure></div>`;
  }).join('');
  if (!window.Swiper) return;
  const swiper = new Swiper('.media-swiper', { slidesPerView: 1.08, centeredSlides: true, spaceBetween: 18, pagination: { el: '.swiper-pagination' }, breakpoints: { 760: { slidesPerView: 2.15 } } });
  const playActiveVideo = () => document.querySelectorAll('video').forEach((video) => (video.closest('.swiper-slide-active') ? video.play().catch(() => {}) : video.pause()));
  swiper.on('slideChangeTransitionEnd', playActiveVideo);
  playActiveVideo();
}

function initBook() {
  const render = () => {
    const [chapter, title, text] = bookPages[currentPage];
    $('#bookPage').classList.remove('flip');
    void $('#bookPage').offsetWidth;
    $('#bookPage').classList.add('flip');
    $('#bookPage').innerHTML = `<p class="eyebrow">${chapter}</p><h3>${title}</h3><p>${text}</p>`;
  };
  $('#prevPage').addEventListener('click', () => { currentPage = (currentPage - 1 + bookPages.length) % bookPages.length; render(); });
  $('#nextPage').addEventListener('click', () => { currentPage = (currentPage + 1) % bookPages.length; render(); });
  render();
}

function initReasons() {
  $('#reasonButton').addEventListener('click', () => {
    const reason = reasons[Math.floor(Math.random() * reasons.length)];
    if (window.gsap) gsap.fromTo('#reasonCard', { opacity: 0, y: 30, rotateX: -18 }, { opacity: 1, y: 0, rotateX: 0, duration: .7 });
    $('#reasonCard').textContent = reason;
    heartConfetti(18);
  });
}

function initSecrets() {
  $('#specialButton').addEventListener('click', () => { showModal('Спасибо, что ты есть в моей жизни.'); heartConfetti(90); });
  $('#secretButton').addEventListener('click', () => showModal('Ты — лучшее, что случилось со мной ❤️'));
  $('#secretHeart').addEventListener('click', () => { if (++secretClicks >= 5) { secretClicks = 0; showModal('Ты лучшее, что случилось в моей жизни ❤️'); } });
  $('#modalClose').addEventListener('click', closeModal);
  $('#modal').addEventListener('click', (event) => { if (event.target.id === 'modal') closeModal(); });
  window.addEventListener('keydown', (event) => {
    loveBuffer = (loveBuffer + event.key.toUpperCase()).slice(-4);
    if (loveBuffer === 'LOVE') showModal('Скрытая глава: я понял, что люблю тебя, когда начал искать тебя в каждом своём дне ❤️');
  });
}

function initFutureLetter() {
  const message = 'Привет из будущего. Если ты читаешь это через 7 лет, знай: я всё ещё выбираю тебя. Я всё ещё помню наши первые сообщения, 19:35, Ташкент, авиацию, прогулки и твою руку в моей. И я всё ещё люблю тебя — ещё сильнее.';
  $('#futureButton').addEventListener('click', () => typeText($('#futureLetter'), message));
}

function initMusic() {
  $('#musicToggle').addEventListener('click', async () => {
    if (musicTimer) { stopMusic(); return; }
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    await audioContext.resume();
    document.body.classList.add('music-on');
    $('#playerStatus').textContent = 'Играет нежная синтезированная piano-мелодия.';
    playPianoLoop();
    musicTimer = setInterval(playPianoLoop, 4200);
  });
}

function playPianoLoop() {
  const notes = [392, 493.88, 587.33, 659.25, 587.33, 493.88, 440, 392];
  notes.forEach((frequency, index) => setTimeout(() => playTone(frequency, 0.42), index * 420));
}

function playTone(frequency, duration) {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.05);
}

function stopMusic() {
  clearInterval(musicTimer);
  musicTimer = null;
  document.body.classList.remove('music-on');
  $('#playerStatus').textContent = 'Музыка на паузе. Нажми ещё раз, чтобы продолжить.';
}

function typeText(node, text) {
  node.textContent = '';
  let index = 0;
  const timer = setInterval(() => {
    node.textContent += text[index++] || '';
    if (index > text.length) clearInterval(timer);
  }, 34);
}

function showModal(text) { $('#modalText').textContent = text; $('#modal').classList.add('open'); $('#modal').setAttribute('aria-hidden', 'false'); }
function closeModal() { $('#modal').classList.remove('open'); $('#modal').setAttribute('aria-hidden', 'true'); }

function heartConfetti(count = 30) {
  for (let index = 0; index < count; index++) {
    const heart = document.createElement('span');
    heart.className = 'burst-heart';
    heart.textContent = ['❤️', '💖', '💗', '🌹', '✨'][Math.floor(Math.random() * 5)];
    heart.style.left = `${50 + (Math.random() - .5) * 30}vw`;
    heart.style.top = `${50 + (Math.random() - .5) * 20}vh`;
    heart.style.setProperty('--x', `${(Math.random() - .5) * 1100}px`);
    heart.style.setProperty('--y', `${(Math.random() - .9) * 900}px`);
    heart.style.fontSize = `${18 + Math.random() * 30}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

function spawnLoveNote() {
  const texts = ['Я скучаю по тебе', 'Ты моя нежность', '19:35 ❤️', 'Парижон, улыбнись', 'Самиржон любит тебя'];
  const note = document.createElement('span');
  note.className = 'love-note';
  note.textContent = texts[Math.floor(Math.random() * texts.length)];
  note.style.left = `${10 + Math.random() * 72}vw`;
  note.style.bottom = `${8 + Math.random() * 28}vh`;
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 7200);
}

function initCursor() {
  window.addEventListener('pointermove', (event) => {
    $('.cursor-heart').style.left = `${event.clientX}px`;
    $('.cursor-heart').style.top = `${event.clientY}px`;
  });
}

function initSky() {
  const canvas = $('#sky');
  const context = canvas.getContext('2d');
  const particles = [];
  const resize = () => { canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; };
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 160; i++) particles.push({ x: Math.random(), y: Math.random(), r: Math.random() * 2.2 + .4, s: Math.random() * .28 + .06, hue: Math.random() > .78 ? 335 : 48 });
  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y += p.s / 1000;
      if (p.y > 1.05) p.y = -0.05;
      context.beginPath();
      context.fillStyle = `hsla(${p.hue}, 100%, 78%, ${0.32 + Math.random() * .42})`;
      context.shadowBlur = 18;
      context.shadowColor = context.fillStyle;
      context.arc(p.x * canvas.width, p.y * canvas.height, p.r * devicePixelRatio, 0, Math.PI * 2);
      context.fill();
    });
    requestAnimationFrame(draw);
  };
  draw();
}
