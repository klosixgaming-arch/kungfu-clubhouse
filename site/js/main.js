/* =========================================================
   The Kung-Fu Clubhouse — site behavior
   EDIT HERE: programs, animals and the weekly schedule.
   ========================================================= */

const PROGRAMS = {
  kids: {
    name: "Little Dragons", age: "Ages 4–6 · 45 minutes", photo: "kids",
    desc: "Balance, listening and big-energy fun. Little Dragons learn basic stances, kicks and how to fall safely through games that build focus and confidence.",
    points: ["Coordination and balance drills", "Stranger safety and simple grab escapes", "Respect, focus and listening skills"]
  },
  youth: {
    name: "Youth Kung Fu", age: "Ages 7–12 · 60 minutes", photo: "youth",
    desc: "Real kung fu, taught at a kid's pace. Students learn traditional forms, kicking combinations and practical self-defense, and test for new sashes as they grow.",
    points: ["Self-defense and anti-bullying skills", "Traditional hand forms and kicks", "Sash testing every few months"]
  },
  adults: {
    name: "Teen & Adult Kung Fu", age: "Ages 13+ · 75 minutes", photo: "adults",
    desc: "For teens, and for parents who'd rather train than wait in the lobby. Conditioning, forms, partner drills and weapons in a friendly mixed-level class.",
    points: ["Practical self-defense and ground escapes", "Northern Shaolin forms and weapons", "Strength, flexibility and cardio"]
  },
  taichi: {
    name: "Tai Chi", age: "All ages · 60 minutes", photo: "taichi",
    desc: "Slow, deliberate movement for balance, breath and joint health. Gentle enough for any fitness level, deep enough to study for a lifetime.",
    points: ["Low-impact, easy on the joints", "Balance and fall prevention", "Breathing and stress relief"]
  },
  family: {
    name: "Family Kung Fu", age: "Kids 5+ with a parent · 60 minutes", photo: "family",
    desc: "Parents, grandparents and kids on the mat together. Partner drills, games and real kung fu basics. The easiest way to get the whole family moving.",
    points: ["Self-defense practiced together", "Partner drills that build teamwork", "Covered by the family membership"]
  }
};

const ANIMALS = {
  tiger:   { glyph: "虎", name: "Tiger",   trait: "Strength · Bone",
             desc: "Low, rooted stances and the tiger claw. Tiger training builds raw power, strong tendons and the courage to move forward." },
  crane:   { glyph: "鶴", name: "Crane",   trait: "Balance · Spirit",
             desc: "One-legged stances, wide wings and precise strikes. The crane teaches poise, patience and striking at exactly the right moment." },
  leopard: { glyph: "豹", name: "Leopard", trait: "Speed · Power",
             desc: "Short, explosive attacks with the leopard fist. Leopard training develops fast hips, quick footwork and speed over size." },
  snake:   { glyph: "蛇", name: "Snake",   trait: "Breath · Flow",
             desc: "Soft, coiling movement that hides sudden strikes. The snake trains breath control, flexibility and fluid power." },
  dragon:  { glyph: "龍", name: "Dragon",  trait: "Mind · Focus",
             desc: "Twisting, rising and sinking. The dragon ties the other four together through focus, intention and whole-body movement." }
};

/* Weekly schedule. tag: kids | youth | family | adult | taichi | party */
const SCHEDULE = {
  Mon: [
    { time: "4:30 – 5:15 pm", name: "Little Dragons", who: "Ages 4–6", tag: "kids" },
    { time: "5:30 – 6:30 pm", name: "Youth Kung Fu", who: "Ages 7–12", tag: "youth" },
    { time: "6:45 – 8:00 pm", name: "Teen & Adult Kung Fu", who: "Ages 13+", tag: "adult" }
  ],
  Tue: [
    { time: "9:00 – 10:00 am", name: "Morning Tai Chi", who: "All ages", tag: "taichi" },
    { time: "5:30 – 6:30 pm", name: "Youth Kung Fu", who: "Ages 7–12", tag: "youth" },
    { time: "6:45 – 8:00 pm", name: "Teen & Adult Kung Fu", who: "Ages 13+", tag: "adult" }
  ],
  Wed: [
    { time: "4:30 – 5:15 pm", name: "Little Dragons", who: "Ages 4–6", tag: "kids" },
    { time: "5:30 – 6:30 pm", name: "Youth Kung Fu", who: "Ages 7–12", tag: "youth" },
    { time: "6:45 – 8:00 pm", name: "Teen & Adult Kung Fu", who: "Ages 13+", tag: "adult" }
  ],
  Thu: [
    { time: "9:00 – 10:00 am", name: "Morning Tai Chi", who: "All ages", tag: "taichi" },
    { time: "5:30 – 6:30 pm", name: "Youth Kung Fu", who: "Ages 7–12", tag: "youth" },
    { time: "6:45 – 8:00 pm", name: "Weapons Class", who: "Teen & adult, intermediate", tag: "adult" }
  ],
  Fri: [
    { time: "5:30 – 6:30 pm", name: "Family Kung Fu", who: "Kids 5+ with a parent", tag: "family" },
    { time: "6:45 – 8:00 pm", name: "Open Training", who: "Members, all ages", tag: "adult" }
  ],
  Sat: [
    { time: "9:00 – 9:45 am", name: "Little Dragons", who: "Ages 4–6", tag: "kids" },
    { time: "10:00 – 11:00 am", name: "Youth Kung Fu", who: "Ages 7–12", tag: "youth" },
    { time: "11:15 am – 12:30 pm", name: "Teen & Adult Kung Fu", who: "Ages 13+", tag: "adult" },
    { time: "1:00 – 3:00 pm", name: "Birthday Parties", who: "By booking", tag: "party" }
  ],
  Sun: []
};

const TAG_LABEL = { kids: "Ages 4–6", youth: "Ages 7–12", family: "Family", adult: "Teen/Adult", taichi: "Tai Chi", party: "Party" };
const FOUNDED = 1976;

/* ---------------- helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const photo = (img, name) => {
  img.onerror = () => ph(img, name);
  img.classList.remove("is-placeholder");
  img.src = `images/photos/${name}.jpg`;
};

/* years since founding + copyright year */
const now = new Date();
$$("[data-years]").forEach(el => el.textContent = now.getFullYear() - FOUNDED);
$("#year").textContent = now.getFullYear();

/* ---------------- header ---------------- */
const header = $(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const toggle = $(".nav-toggle"), nav = $("#nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", open);
  nav.classList.toggle("open", open);
});
$$("#nav a").forEach(a => a.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open");
}));

/* ---------------- tabs helper (arrow keys) ---------------- */
function arrowKeys(list, buttons) {
  list.addEventListener("keydown", e => {
    const i = buttons.indexOf(document.activeElement);
    if (i < 0) return;
    const dir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!dir) return;
    e.preventDefault();
    const next = buttons[(i + dir + buttons.length) % buttons.length];
    next.focus(); next.click();
  });
}

/* ---------------- programs ---------------- */
const progButtons = $$(".program-list button");
progButtons.forEach(btn => btn.addEventListener("click", () => {
  const p = PROGRAMS[btn.dataset.program];
  progButtons.forEach(b => b.setAttribute("aria-selected", b === btn));
  const img = $("#program-img");
  img.classList.add("swapping");
  setTimeout(() => {
    photo(img, p.photo);
    img.alt = p.name + " class";
    img.classList.remove("swapping");
  }, 180);
  $("#program-name").textContent = p.name;
  $("#program-age").textContent = p.age;
  $("#program-desc").textContent = p.desc;
  $("#program-points").innerHTML = p.points.map(t => `<li>${t}</li>`).join("");
}));
arrowKeys($(".program-list"), progButtons);

/* ---------------- five animals ---------------- */
const seals = $$(".seal");
seals.forEach(btn => btn.addEventListener("click", () => {
  const a = ANIMALS[btn.dataset.animal];
  seals.forEach(b => b.setAttribute("aria-selected", b === btn));
  const g = $("#animal-glyph");
  g.textContent = a.glyph;
  g.classList.remove("pop"); void g.offsetWidth; g.classList.add("pop");
  $("#animal-name").textContent = a.name;
  $("#animal-trait").textContent = a.trait;
  $("#animal-desc").textContent = a.desc;
}));
arrowKeys($(".seals"), seals);

/* ---------------- schedule ---------------- */
const days = Object.keys(SCHEDULE);
const todayKey = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][now.getDay()];
const tabsEl = $(".day-tabs");
tabsEl.innerHTML = days.map(d =>
  `<button role="tab" data-day="${d}" class="${d === todayKey ? "today" : ""}" aria-selected="false"
     ${d === todayKey ? 'aria-label="' + d + ' (today)"' : ""}>${d}</button>`).join("");
const dayButtons = $$("button", tabsEl);

function showDay(day) {
  dayButtons.forEach(b => b.setAttribute("aria-selected", b.dataset.day === day));
  const list = SCHEDULE[day];
  $("#class-list").innerHTML = list.length
    ? list.map(c => `<li>
        <span class="class-time">${c.time}</span>
        <span><span class="class-name">${c.name}</span><br><span class="class-who">${c.who}</span></span>
        <span class="tag t-${c.tag}">${TAG_LABEL[c.tag]}</span></li>`).join("")
    : `<li class="empty">No classes today. Rest up, stretch, and we'll see you tomorrow.</li>`;
}
dayButtons.forEach(b => b.addEventListener("click", () => showDay(b.dataset.day)));
arrowKeys(tabsEl, dayButtons);
showDay(SCHEDULE[todayKey]?.length ? todayKey : "Mon");

/* ---------------- gallery lightbox ---------------- */
const shots = $$(".shot");
const lb = $("#lightbox"), lbImg = $("img", lb), lbCap = $(".lb-caption", lb);
let current = 0;
function openShot(i) {
  current = (i + shots.length) % shots.length;
  const img = $("img", shots[current]);
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lbCap.textContent = img.alt;
  if (!lb.open) lb.showModal();
}
shots.forEach((s, i) => s.addEventListener("click", () => openShot(i)));
$(".lb-close").addEventListener("click", () => lb.close());
$(".lb-prev").addEventListener("click", () => openShot(current - 1));
$(".lb-next").addEventListener("click", () => openShot(current + 1));
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") openShot(current - 1);
  if (e.key === "ArrowRight") openShot(current + 1);
});

/* ---------------- quotes rotator ---------------- */
const quotes = $$(".quote");
const dots = $(".quote-dots");
dots.innerHTML = quotes.map((_, i) => `<button aria-label="Quote ${i + 1}" aria-pressed="${i === 0}"></button>`).join("");
const dotBtns = $$("button", dots);
let q = 0, qTimer;
function showQuote(i) {
  q = (i + quotes.length) % quotes.length;
  quotes.forEach((el, k) => el.classList.toggle("is-active", k === q));
  dotBtns.forEach((b, k) => b.setAttribute("aria-pressed", k === q));
}
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const startQuotes = () => { if (!reduce) qTimer = setInterval(() => showQuote(q + 1), 7000); };
dotBtns.forEach((b, i) => b.addEventListener("click", () => { clearInterval(qTimer); showQuote(i); startQuotes(); }));
startQuotes();

/* ---------------- contact form ----------------
   This is a static site, so the form opens the visitor's email app
   with everything filled in. Change TO_EMAIL to your address.        */
const TO_EMAIL = "lloydambrose@gmail.com";
$("#contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\nProgram: ${f.get("program")}\n\n${f.get("message")}`;
  window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent("Free class request: " + f.get("program"))}&body=${encodeURIComponent(body)}`;
  $("#form-status").textContent = "Opening your email app to send the request…";
});
