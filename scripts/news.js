const supportedLanguages = new Set(["ja", "ko", "en"]);
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
const browserLanguage = navigator.language.toLowerCase().startsWith("ko")
  ? "ko"
  : navigator.language.toLowerCase().startsWith("en")
    ? "en"
    : "ja";
const language = supportedLanguages.has(requestedLanguage) ? requestedLanguage : browserLanguage;

const labels = {
  ja: { heading: "Motionlyからのお知らせ", intro: "サイト、機能、プライバシーに関する更新をお知らせします。", error: "お知らせを読み込めませんでした。" },
  ko: { heading: "Motionly 소식", intro: "사이트, 기능, 개인정보 관련 업데이트를 알려드립니다.", error: "소식을 불러오지 못했습니다." },
  en: { heading: "Motionly updates", intro: "News about the site, features, and privacy.", error: "Updates could not be loaded." }
};

const privacyPages = {
  ja: "/privacy.html",
  ko: "/privacy-ko.html",
  en: "/privacy-en.html"
};

document.documentElement.lang = language;
document.querySelector("[data-news-heading]").textContent = labels[language].heading;
document.querySelector("[data-news-intro]").textContent = labels[language].intro;
document.querySelectorAll("[data-news-lang]").forEach((link) => {
  if (link.dataset.newsLang === language) link.setAttribute("aria-current", "page");
});
document.querySelectorAll("[data-privacy-link]").forEach((link) => {
  link.href = privacyPages[language];
});

const renderUpdates = (items) => {
  const list = document.querySelector("#news-list");
  list.replaceChildren();

  items
    .slice()
    .sort((left, right) => right.date.localeCompare(left.date))
    .forEach((item) => {
      const article = document.createElement("article");
      article.className = "update-card reveal is-visible";

      const date = document.createElement("p");
      date.className = "meta-line";
      date.textContent = item.date;

      const title = document.createElement("h2");
      title.textContent = item.title[language] ?? item.title.ja;

      const body = document.createElement("p");
      body.textContent = item.body[language] ?? item.body.ja;

      article.append(date, title, body);
      list.append(article);
    });
};

fetch("/news.json", { headers: { Accept: "application/json" } })
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((items) => renderUpdates(Array.isArray(items) ? items : []))
  .catch(() => {
    const list = document.querySelector("#news-list");
    const card = document.createElement("article");
    card.className = "update-card";
    const message = document.createElement("p");
    message.textContent = labels[language].error;
    card.append(message);
    list.replaceChildren(card);
  });
