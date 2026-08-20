(() => {
  const locale = ["ja", "ko", "en"].includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "en";

  const content = {
    ja: {
      sample: "実画面の拡大例を切り替える",
      group: "表示するアプリ画面を選択",
      screenNote: "日本語版アプリの実画面を状態別に拡大した例です。画面内の記録やアカウント情報はサンプルです。",
      loading: "画面を読み込んでいます。",
      loadError: "画面を読み込めませんでした。前の画面を表示しています。",
      history: [
        { label: "最近の記録", title: "最近の運動記録を確認。", description: "日付・距離・時間・歩数が並ぶ、実際の運動記録一覧です。", image: "/assets/demos/history-recent-ja.jpg", alt: "実際のMotionly日本語アプリに表示された最近の運動記録画面" },
        { label: "以前の記録", title: "以前の記録まで振り返る。", description: "保存された過去のランニング記録をスクロールして確認する画面です。", image: "/assets/demos/history-archive-ja.jpg", alt: "実際のMotionly日本語アプリに表示された以前の運動記録画面" },
        { label: "一覧全体", title: "続けた日々を一覧で見る。", description: "新しい記録から以前の記録までをまとめて見返す画面です。", image: "/assets/demos/history-all-ja.jpg", alt: "実際のMotionly日本語アプリに表示された運動記録一覧全体" }
      ],
      challenge: [
        { label: "最初の10K", title: "30日以内に合計10km。", description: "実際の公開チャレンジ一覧に表示された「最初の10K」の例です。", image: "/assets/demos/challenge-first-10k-ja.jpg", alt: "実際のMotionly日本語アプリに表示された最初の10Kチャレンジ" },
        { label: "7日連続", title: "7日連続で運動する目標。", description: "実際の公開チャレンジ一覧に表示された「7日連続」の例です。", image: "/assets/demos/challenge-seven-day-ja.jpg", alt: "実際のMotionly日本語アプリに表示された7日連続チャレンジ" },
        { label: "一覧", title: "次の目標を一覧から探す。", description: "2つの公開チャレンジを同じ画面で確認できる表示例です。", image: "/assets/demos/challenge-overview-ja.jpg", alt: "実際のMotionly日本語アプリに表示された公開チャレンジ一覧" }
      ],
      biorhythm: [
        { label: "今日の周期", title: "今日の3つの周期を確認。", description: "体力・感情・知性と平均を一つの画面で表示します。娯楽・参考用です。", image: "/assets/demos/biorhythm-today-ja.jpg", alt: "実際のMotionly日本語アプリに表示された今日のバイオリズム画面" },
        { label: "運動メモ", title: "今日の運動メモを見る。", description: "実際の体調を優先するための参考メモです。科学的・医学的な判断ではありません。", image: "/assets/demos/biorhythm-note-ja.jpg", alt: "実際のMotionly日本語アプリに表示されたバイオリズム運動メモ" },
        { label: "生年月日", title: "生年月日の編集場所を確認。", description: "生年月日をもとに端末内で周期を計算する画面です。Web上では入力・保存しません。", image: "/assets/demos/biorhythm-birthdate-ja.jpg", alt: "実際のMotionly日本語アプリに表示された生年月日編集部分" }
      ],
      friends: [
        { label: "マイコード", title: "マイフレンドコードを確認。", description: "コードの大部分をマスクした実画面例です。Web上で検索や送信は行いません。", image: "/assets/demos/friends-code-ja.jpg", alt: "友だちコードの大部分をマスクした実際のMotionly日本語アプリ画面" },
        { label: "受信した申請", title: "受信した申請を確認。", description: "申請を承認または拒否する一覧部分の実画面例です。表示名はサンプルです。", image: "/assets/demos/friends-incoming-ja.jpg", alt: "実際のMotionly日本語アプリに表示された受信済み友だち申請画面" },
        { label: "送信した申請", title: "送信した申請を確認。", description: "送信後に承認を待つ申請一覧部分の実画面例です。表示名はサンプルです。", image: "/assets/demos/friends-outgoing-ja.jpg", alt: "実際のMotionly日本語アプリに表示された送信済み友だち申請画面" },
        { label: "友だちリスト", title: "承認後の友だちを確認。", description: "承認後に友だちリストへ表示される画面例です。表示名はサンプルです。", image: "/assets/demos/friends-list-ja.jpg", alt: "実際のMotionly日本語アプリに表示された友だちリスト画面" }
      ],
      featureSummary: "詳しく見る",
      featureDetails: [
        "開始前に徒歩・ランニング向けのルートをプレビューできます。",
        "共有画像では開始・終了地点の各200mを非表示にできます。",
        "端末内の運動記録はログイン中のアカウントごとに分けて扱います。"
      ]
    },
    ko: {
      sample: "실제 앱 화면 확대 전환",
      group: "표시할 실제 앱 화면 선택",
      screenNote: "일본어판 앱의 실제 화면을 상태별로 확대한 예시이며, 화면 안 기록과 계정 정보는 샘플입니다.",
      loading: "화면을 불러오는 중입니다.",
      loadError: "화면을 불러오지 못해 이전 화면을 유지합니다.",
      history: [
        { label: "최근 기록", title: "최근 운동 기록을 확인하세요.", description: "날짜·거리·시간·걸음 수가 표시되는 실제 운동 기록 목록입니다.", image: "/assets/demos/history-recent-ja.jpg", alt: "실제 Motionly 일본어 앱의 최근 운동 기록 화면" },
        { label: "이전 기록", title: "이전 기록까지 돌아보세요.", description: "저장된 과거 러닝 기록을 스크롤해 확인하는 실제 화면입니다.", image: "/assets/demos/history-archive-ja.jpg", alt: "실제 Motionly 일본어 앱의 이전 운동 기록 화면" },
        { label: "전체 목록", title: "이어온 기록을 한 목록에서 확인하세요.", description: "최근 기록부터 이전 기록까지 함께 돌아보는 실제 목록 화면입니다.", image: "/assets/demos/history-all-ja.jpg", alt: "실제 Motionly 일본어 앱의 전체 운동 기록 목록" }
      ],
      challenge: [
        { label: "첫 10K", title: "30일 안에 누적 10km.", description: "실제 공개 챌린지 목록에 표시된 첫 10K 예시입니다.", image: "/assets/demos/challenge-first-10k-ja.jpg", alt: "실제 Motionly 일본어 앱의 첫 10K 챌린지 화면" },
        { label: "7일 연속", title: "7일 연속 운동 목표.", description: "실제 공개 챌린지 목록에 표시된 7일 연속 예시입니다.", image: "/assets/demos/challenge-seven-day-ja.jpg", alt: "실제 Motionly 일본어 앱의 7일 연속 챌린지 화면" },
        { label: "전체 목록", title: "다음 목표를 목록에서 찾아보세요.", description: "두 공개 챌린지를 한 화면에서 확인하는 실제 목록 예시입니다.", image: "/assets/demos/challenge-overview-ja.jpg", alt: "실제 Motionly 일본어 앱의 공개 챌린지 전체 목록" }
      ],
      biorhythm: [
        { label: "오늘 주기", title: "오늘의 세 가지 주기를 확인하세요.", description: "신체·감정·지성과 평균을 한 화면에 표시합니다. 재미·참고용입니다.", image: "/assets/demos/biorhythm-today-ja.jpg", alt: "실제 Motionly 일본어 앱의 오늘 바이오리듬 화면" },
        { label: "운동 메모", title: "오늘의 운동 메모를 확인하세요.", description: "실제 몸 상태를 우선하기 위한 참고 메모이며 과학적·의학적 판단이 아닙니다.", image: "/assets/demos/biorhythm-note-ja.jpg", alt: "실제 Motionly 일본어 앱의 바이오리듬 운동 메모 화면" },
        { label: "생년월일", title: "생년월일 수정 위치를 확인하세요.", description: "생년월일을 바탕으로 기기 안에서 주기를 계산합니다. 웹에서는 입력·저장하지 않습니다.", image: "/assets/demos/biorhythm-birthdate-ja.jpg", alt: "실제 Motionly 일본어 앱의 생년월일 수정 부분" }
      ],
      friends: [
        { label: "내 코드", title: "내 친구 코드를 확인하세요.", description: "코드 대부분을 가린 실제 화면 예시이며 웹에서는 검색이나 전송을 하지 않습니다.", image: "/assets/demos/friends-code-ja.jpg", alt: "친구 코드 대부분을 가린 실제 Motionly 일본어 앱 화면" },
        { label: "받은 신청", title: "받은 친구 신청을 확인하세요.", description: "신청을 수락하거나 거절하는 목록의 실제 화면 예시이며 이름은 샘플입니다.", image: "/assets/demos/friends-incoming-ja.jpg", alt: "실제 Motionly 일본어 앱의 받은 친구 신청 화면" },
        { label: "보낸 신청", title: "보낸 친구 신청을 확인하세요.", description: "보낸 뒤 승인을 기다리는 목록의 실제 화면 예시이며 이름은 샘플입니다.", image: "/assets/demos/friends-outgoing-ja.jpg", alt: "실제 Motionly 일본어 앱의 보낸 친구 신청 화면" },
        { label: "친구 목록", title: "승인된 친구를 확인하세요.", description: "승인 뒤 친구 목록에 표시되는 실제 화면 예시이며 이름은 샘플입니다.", image: "/assets/demos/friends-list-ja.jpg", alt: "실제 Motionly 일본어 앱의 친구 목록 화면" }
      ],
      featureSummary: "설명 보기",
      featureDetails: [
        "시작 전에 걷기·달리기에 적합한 경로를 미리 볼 수 있습니다.",
        "공유 이미지에서 시작·종료 지점 양쪽 200m를 숨길 수 있습니다.",
        "기기 안 운동 기록은 로그인한 계정별로 구분해 다룹니다."
      ]
    },
    en: {
      sample: "Switch cropped actual app views",
      group: "Choose an actual app screen",
      screenNote: "Cropped views from actual Japanese app screens. Records and account details shown in them are sample data.",
      loading: "Loading the screen.",
      loadError: "The screen could not be loaded, so the previous screen remains visible.",
      history: [
        { label: "Recent", title: "Review recent workouts.", description: "An actual workout-history list showing date, distance, time, and steps.", image: "/assets/demos/history-recent-ja.jpg", alt: "Actual Motionly app screen in Japanese showing recent workout history" },
        { label: "Earlier", title: "Look back at earlier workouts.", description: "An actual screen showing older saved running records in the list.", image: "/assets/demos/history-archive-ja.jpg", alt: "Actual Motionly app screen in Japanese showing earlier workout history" },
        { label: "Full list", title: "See the days you kept moving.", description: "An actual list view covering both recent and earlier saved records.", image: "/assets/demos/history-all-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the full workout-history list" }
      ],
      challenge: [
        { label: "First 10K", title: "Log a total of 10 km in 30 days.", description: "The First 10K card as it appears in the actual public challenge list.", image: "/assets/demos/challenge-first-10k-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the First 10K challenge" },
        { label: "7-day streak", title: "Move for seven days in a row.", description: "The 7-Day Streak card as it appears in the actual public challenge list.", image: "/assets/demos/challenge-seven-day-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the 7-Day Streak challenge" },
        { label: "Overview", title: "Find the next goal in the list.", description: "An actual list view showing both public challenge examples together.", image: "/assets/demos/challenge-overview-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the public challenge overview" }
      ],
      biorhythm: [
        { label: "Today", title: "Review today’s three cycles.", description: "Physical, emotional, intellectual, and average values appear together. For entertainment and reference only.", image: "/assets/demos/biorhythm-today-ja.jpg", alt: "Actual Motionly app screen in Japanese showing today's biorhythm" },
        { label: "Activity note", title: "Read today’s activity note.", description: "A reference note that never replaces how you actually feel or medical guidance.", image: "/assets/demos/biorhythm-note-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the biorhythm activity note" },
        { label: "Birthdate", title: "Find where to edit a birthdate.", description: "Cycles are calculated on device from a birthdate. This website never enters or saves it.", image: "/assets/demos/biorhythm-birthdate-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the birthdate edit area" }
      ],
      friends: [
        { label: "My code", title: "Review your friend code.", description: "Most of the code is masked in this actual screen sample. This website never searches or sends anything.", image: "/assets/demos/friends-code-ja.jpg", alt: "Actual Motionly app screen in Japanese with most of the friend code masked" },
        { label: "Incoming", title: "Review incoming requests.", description: "An actual accept-or-decline list sample. Display names are sample data.", image: "/assets/demos/friends-incoming-ja.jpg", alt: "Actual Motionly app screen in Japanese showing incoming friend requests" },
        { label: "Outgoing", title: "Review outgoing requests.", description: "An actual pending-request list sample. Display names are sample data.", image: "/assets/demos/friends-outgoing-ja.jpg", alt: "Actual Motionly app screen in Japanese showing outgoing friend requests" },
        { label: "Friends", title: "Review approved friends.", description: "An actual friend-list sample shown after approval. Display names are sample data.", image: "/assets/demos/friends-list-ja.jpg", alt: "Actual Motionly app screen in Japanese showing the friends list" }
      ],
      featureSummary: "Read more",
      featureDetails: [
        "Preview a walking- or running-friendly route before you start.",
        "Hide 200 m at both the start and finish of a shared route image.",
        "On-device workout records are handled separately for each signed-in account."
      ]
    }
  };

  const strings = content[locale];

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const imageCache = new Map();
  const loadImage = (source) => {
    if (imageCache.has(source)) return imageCache.get(source);
    const request = new Promise((resolve, reject) => {
      const candidate = new Image();
      let settled = false;
      const finish = (callback) => {
        if (settled) return;
        settled = true;
        callback(candidate);
      };
      candidate.decoding = "async";
      candidate.onload = () => finish(resolve);
      candidate.onerror = () => finish(reject);
      candidate.src = source;
      if (candidate.complete) {
        queueMicrotask(() => candidate.naturalWidth > 0 ? finish(resolve) : finish(reject));
      }
    });
    imageCache.set(source, request);
    request.catch(() => imageCache.delete(source));
    return request;
  };

  document.querySelectorAll("[data-section-demo]").forEach((row) => {
    const key = row.dataset.sectionDemo;
    const states = strings[key];
    const media = row.querySelector(".showcase-media");
    const image = media?.querySelector("img");
    const copyNode = row.querySelector(".showcase-copy");
    if (!states || !media || !image || !copyNode) return;

    const imageId = `section-image-${locale}-${key}`;
    const resultId = `section-result-${locale}-${key}`;
    image.id = imageId;
    image.classList.add("section-demo-image");

    const badge = make("span", "section-demo-image-badge", strings.screenNote);
    badge.setAttribute("aria-hidden", "true");
    media.append(badge);

    const shell = make("div", "section-demo-shell");
    shell.dataset.demoKind = key;
    shell.hidden = true;
    const kicker = make("p", "section-demo-kicker", strings.sample);
    const controls = make("div", "section-demo-controls");
    controls.setAttribute("role", "group");
    const rowHeading = copyNode.querySelector("h3");
    if (rowHeading) {
      rowHeading.id ||= `section-demo-${locale}-${key}`;
      controls.setAttribute("aria-labelledby", rowHeading.id);
    } else {
      controls.setAttribute("aria-label", strings.group);
    }

    const result = make("div", "section-demo-result");
    result.id = resultId;
    const title = make("strong", "section-demo-title");
    const description = make("p", "section-demo-description");
    const note = make("p", "section-demo-note", strings.screenNote);
    result.append(title, description, note);
    const liveStatus = make("p", "sr-only");
    liveStatus.setAttribute("role", "status");
    liveStatus.setAttribute("aria-live", "polite");
    liveStatus.setAttribute("aria-atomic", "true");
    shell.append(kicker, controls, result, liveStatus);
    copyNode.append(shell);

    let requestVersion = 0;
    let activeIndex = 0;
    let transitionFrame = 0;
    let buttons = [];

    const renderCopy = (state, index, announce) => {
      row.dataset.demoIndex = String(index);
      title.textContent = state.title;
      description.textContent = state.description;
      buttons.forEach((button, buttonIndex) => {
        button.setAttribute("aria-pressed", String(buttonIndex === index));
      });
      if (announce) liveStatus.textContent = `${state.title} ${state.description}`;
    };

    const select = async (index, announce = true) => {
      const state = states[index];
      const version = ++requestVersion;
      media.removeAttribute("aria-busy");
      row.classList.remove("is-demo-loading");
      if (index === activeIndex) {
        renderCopy(state, index, announce);
        return;
      }
      media.setAttribute("aria-busy", "true");
      row.classList.add("is-demo-loading");
      if (announce) liveStatus.textContent = strings.loading;
      try {
        const loaded = await loadImage(state.image);
        if (version !== requestVersion) return;
        image.classList.add("is-switching");
        image.src = state.image;
        image.alt = state.alt;
        activeIndex = index;
        renderCopy(state, index, announce);
        window.cancelAnimationFrame(transitionFrame);
        transitionFrame = window.requestAnimationFrame(() => {
          image.classList.remove("is-switching");
          transitionFrame = 0;
        });
      } catch {
        if (version === requestVersion) liveStatus.textContent = strings.loadError;
      } finally {
        if (version === requestVersion) {
          media.removeAttribute("aria-busy");
          row.classList.remove("is-demo-loading");
        }
      }
    };

    buttons = states.map((state, index) => {
      const button = make("button", "section-demo-button", state.label);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-controls", `${imageId} ${resultId}`);
      button.addEventListener("click", () => select(index, true));
      controls.append(button);
      return button;
    });

    renderCopy(states[0], 0, false);
    row.classList.add("is-enhanced");
    shell.hidden = false;

    const preloadRemainingScreens = () => {
      states.slice(1).forEach((state) => loadImage(state.image).catch(() => {}));
    };
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        preloadRemainingScreens();
      }, { rootMargin: "600px 0px" });
      observer.observe(row);
    } else {
      window.setTimeout(preloadRemainingScreens, 0);
    }

    window.addEventListener("pagehide", () => {
      requestVersion += 1;
      window.cancelAnimationFrame(transitionFrame);
    }, { once: true });
  });

  document.querySelectorAll("[data-feature-demo]").forEach((grid) => {
    grid.querySelectorAll(".feature-card").forEach((card, index) => {
      const detail = strings.featureDetails[index];
      if (!detail) return;
      const details = make("details", "feature-demo-details");
      const summary = make("summary", "", strings.featureSummary);
      const heading = card.querySelector("h3");
      if (heading) summary.setAttribute("aria-label", `${heading.textContent} — ${strings.featureSummary}`);
      details.append(summary, make("p", "", detail));
      card.append(details);
    });
  });
})();
