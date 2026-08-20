(() => {
  const locale = ["ja", "ko", "en"].includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "en";

  const content = {
    ja: {
      sample: "操作できるサンプル",
      group: "表示するサンプルを選択",
      history: [
        { label: "今週", title: "3回、続けられました。", description: "合計8.4km・52分の振り返り例です。", stats: [["3", "回"], ["8.4", "km"], ["52", "分"]], progress: 75 },
        { label: "先週", title: "2回、動きました。", description: "先週の合計6.1km・41分の例です。", stats: [["2", "回"], ["6.1", "km"], ["41", "分"]], progress: 50 },
        { label: "目標", title: "あと1回で今週の目標。", description: "1〜7回から選んだ週間目標の表示例です。", stats: [["3 / 4", "回"], ["75", "%"], ["1", "あと"]], progress: 75 }
      ],
      challenge: [
        { label: "最初の10K", title: "30日以内に合計10km。", description: "公開チャレンジの表示例です。自動参加や送信は行いません。", stats: [["10", "km"], ["30", "日"], ["公開", "設定"]] },
        { label: "7日連続", title: "7日連続で運動する目標。", description: "連続日数チャレンジの表示例です。", stats: [["7", "日"], ["普通", "難易度"], ["公開", "設定"]] },
        { label: "目標を作成", title: "自分に合う目標を作る。", description: "距離・期間・公開範囲を選ぶ作成画面の例です。", stats: [["5", "km"], ["14", "日"], ["非公開", "設定"]] }
      ],
      biorhythm: [
        { label: "体力", title: "体力の参考値 9%", description: "今日の周期を端末内で計算した表示例です。", meters: [["体力", 9], ["感情", 39], ["知性", 99]] },
        { label: "感情", title: "感情の参考値 39%", description: "娯楽・参考用のサンプルです。", meters: [["体力", 9], ["感情", 39], ["知性", 99]] },
        { label: "知性", title: "知性の参考値 99%", description: "科学的・医学的な判断ではありません。", meters: [["体力", 9], ["感情", 39], ["知性", 99]] }
      ],
      friends: [
        { label: "コード", title: "16桁コードを確認。", description: "入力前の画面例です。実際の検索は行いません。", stats: [["16桁", "コード"], ["QR", "利用条件あり"], ["未送信", "状態"]], friend: ["•••• •••• •••• 4028", "コードを入力", "承認後につながります"] },
        { label: "確認", title: "送信前に相手を確認。", description: "ニックネームを確認してから申請する流れの例です。", stats: [["Motionly", "サンプル"], ["確認", "送信前"], ["未送信", "状態"]], friend: ["1084 5729 1630 4028", "検索結果の例", "Motionlyランナー"] },
        { label: "申請", title: "申請後は承認待ちに。", description: "相手の承認を待つ状態の例です。このデモでは送信しません。", stats: [["申請", "サンプル"], ["承認待ち", "状態"], ["無通信", "デモ"]], friend: ["1084 5729 1630 4028", "申請状態の例", "承認を待っています"] },
        { label: "承認", title: "承認されてから友だちに。", description: "このデモから申請や通信は行いません。", stats: [["申請", "サンプル"], ["承認", "必要"], ["接続", "完了例"]], friend: ["1084 5729 1630 4028", "承認後の例", "友だちに追加されました"] }
      ],
      featureSummary: "詳しく見る",
      progressLabel: "週間目標の達成率",
      featureDetails: [
        "開始前に徒歩・ランニング向けのルートをプレビューできます。",
        "共有画像では開始・終了地点の各200mを非表示にできます。",
        "端末内の運動記録はログイン中のアカウントごとに分けて扱います。"
      ]
    },
    ko: {
      sample: "직접 체험 샘플",
      group: "표시할 샘플 선택",
      history: [
        { label: "이번 주", title: "이번 주 3번 움직였어요.", description: "총 8.4km·52분을 돌아보는 예시입니다.", stats: [["3", "회"], ["8.4", "km"], ["52", "분"]], progress: 75 },
        { label: "지난주", title: "지난주 2번 움직였어요.", description: "지난주 총 6.1km·41분의 예시입니다.", stats: [["2", "회"], ["6.1", "km"], ["41", "분"]], progress: 50 },
        { label: "목표", title: "한 번 더 하면 이번 주 목표예요.", description: "1~7회 중 선택한 주간 목표 표시 예시입니다.", stats: [["3 / 4", "회"], ["75", "%"], ["1", "남음"]], progress: 75 }
      ],
      challenge: [
        { label: "첫 10K", title: "30일 동안 누적 10km.", description: "공개 챌린지 표시 예시이며 자동 참여나 전송은 없습니다.", stats: [["10", "km"], ["30", "일"], ["공개", "설정"]] },
        { label: "7일 연속", title: "7일 연속 운동 목표.", description: "연속 일수 챌린지 표시 예시입니다.", stats: [["7", "일"], ["보통", "난이도"], ["공개", "설정"]] },
        { label: "목표 만들기", title: "나에게 맞는 목표를 만드세요.", description: "거리·기간·공개 범위를 고르는 작성 화면 예시입니다.", stats: [["5", "km"], ["14", "일"], ["비공개", "설정"]] }
      ],
      biorhythm: [
        { label: "신체", title: "신체 참고값 9%", description: "오늘의 주기를 기기 안에서 계산한 화면 예시입니다.", meters: [["신체", 9], ["감정", 39], ["지성", 99]] },
        { label: "감정", title: "감정 참고값 39%", description: "재미·참고용 샘플입니다.", meters: [["신체", 9], ["감정", 39], ["지성", 99]] },
        { label: "지성", title: "지성 참고값 99%", description: "과학적·의학적 판단이 아닙니다.", meters: [["신체", 9], ["감정", 39], ["지성", 99]] }
      ],
      friends: [
        { label: "코드", title: "16자리 코드를 확인하세요.", description: "입력 전 화면 예시이며 실제 검색은 없습니다.", stats: [["16자리", "코드"], ["QR", "이용 조건 있음"], ["미전송", "상태"]], friend: ["•••• •••• •••• 4028", "코드 입력", "승인 후 연결됩니다"] },
        { label: "확인", title: "보내기 전에 상대를 확인하세요.", description: "닉네임을 확인한 뒤 신청하는 흐름의 예시입니다.", stats: [["Motionly", "샘플"], ["확인", "전송 전"], ["미전송", "상태"]], friend: ["1084 5729 1630 4028", "검색 결과 예시", "Motionly 러너"] },
        { label: "신청", title: "신청 뒤에는 승인을 기다려요.", description: "상대의 승인을 기다리는 상태 예시이며 실제 전송은 없습니다.", stats: [["신청", "샘플"], ["승인 대기", "상태"], ["통신 없음", "데모"]], friend: ["1084 5729 1630 4028", "신청 상태 예시", "승인을 기다리고 있습니다"] },
        { label: "승인", title: "승인된 뒤 친구로 연결됩니다.", description: "이 데모에서는 신청이나 통신이 발생하지 않습니다.", stats: [["신청", "샘플"], ["승인", "필요"], ["연결", "완료 예시"]], friend: ["1084 5729 1630 4028", "승인 후 예시", "친구로 추가되었습니다"] }
      ],
      featureSummary: "설명 보기",
      progressLabel: "주간 목표 달성률",
      featureDetails: [
        "시작 전에 걷기·달리기에 적합한 경로를 미리 볼 수 있습니다.",
        "공유 이미지에서 시작·종료 지점 양쪽 200m를 숨길 수 있습니다.",
        "기기 안 운동 기록은 로그인한 계정별로 구분해 다룹니다."
      ]
    },
    en: {
      sample: "Interactive sample",
      group: "Choose a sample view",
      history: [
        { label: "This week", title: "You moved three times.", description: "Sample recap: 8.4 km and 52 minutes in total.", stats: [["3", "workouts"], ["8.4", "km"], ["52", "min"]], progress: 75 },
        { label: "Last week", title: "You moved twice last week.", description: "Sample recap: 6.1 km and 41 minutes.", stats: [["2", "workouts"], ["6.1", "km"], ["41", "min"]], progress: 50 },
        { label: "Goal", title: "One more workout to go.", description: "Sample weekly goal selected from 1 to 7 workouts.", stats: [["3 / 4", "workouts"], ["75", "%"], ["1", "left"]], progress: 75 }
      ],
      challenge: [
        { label: "First 10K", title: "Log 10 km in 30 days.", description: "Sample public challenge. Nothing is joined or submitted here.", stats: [["10", "km"], ["30", "days"], ["public", "setting"]] },
        { label: "7-day streak", title: "Move for seven days in a row.", description: "Sample consecutive-day challenge.", stats: [["7", "days"], ["medium", "difficulty"], ["public", "setting"]] },
        { label: "Create", title: "Make a goal that fits you.", description: "Sample setup for distance, duration, and visibility.", stats: [["5", "km"], ["14", "days"], ["private", "setting"]] }
      ],
      biorhythm: [
        { label: "Physical", title: "Physical reference value: 9%", description: "Sample of today’s cycles calculated on the device.", meters: [["Physical", 9], ["Emotional", 39], ["Intellectual", 99]] },
        { label: "Emotional", title: "Emotional reference value: 39%", description: "Entertainment and reference-only sample.", meters: [["Physical", 9], ["Emotional", 39], ["Intellectual", 99]] },
        { label: "Intellectual", title: "Intellectual reference value: 99%", description: "Not a scientific or medical assessment.", meters: [["Physical", 9], ["Emotional", 39], ["Intellectual", 99]] }
      ],
      friends: [
        { label: "Code", title: "Check a 16-digit code.", description: "Pre-entry sample. No lookup is performed.", stats: [["16-digit", "code"], ["QR", "eligibility applies"], ["not sent", "status"]], friend: ["•••• •••• •••• 4028", "Enter a code", "Connect after approval"] },
        { label: "Preview", title: "Check who you are adding.", description: "Sample nickname preview before a request is sent.", stats: [["Motionly", "sample"], ["preview", "before send"], ["not sent", "status"]], friend: ["1084 5729 1630 4028", "Sample lookup result", "Motionly runner"] },
        { label: "Request", title: "Wait for the other person to approve.", description: "Sample pending state. This demo never sends a request.", stats: [["request", "sample"], ["pending", "status"], ["offline", "demo"]], friend: ["1084 5729 1630 4028", "Sample request state", "Waiting for approval"] },
        { label: "Approval", title: "Connect only after approval.", description: "This demo never sends a request or contacts anyone.", stats: [["request", "sample"], ["approval", "required"], ["connected", "example"]], friend: ["1084 5729 1630 4028", "After approval", "Added as a friend"] }
      ],
      featureSummary: "Read more",
      progressLabel: "Weekly goal progress",
      featureDetails: [
        "Preview a walking- or running-friendly route before you start.",
        "Hide 200 m at both the start and finish of a shared route image.",
        "On-device workout records are handled separately for each signed-in account."
      ]
    }
  };

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const renderStats = (container, stats) => {
    container.replaceChildren();
    stats.forEach(([value, label]) => {
      const item = make("span", "section-demo-stat");
      item.append(make("strong", "", value), make("small", "", label));
      container.append(item);
    });
  };

  document.querySelectorAll("[data-section-demo]").forEach((row) => {
    const key = row.dataset.sectionDemo;
    const states = content[locale][key];
    const media = row.querySelector(".showcase-media");
    const copyNode = row.querySelector(".showcase-copy");
    if (!states || !media || !copyNode) return;

    const shell = make("div", "section-demo-shell");
    shell.dataset.demoKind = key;
    shell.hidden = true;
    const kicker = make("p", "section-demo-kicker", content[locale].sample);
    const controls = make("div", "section-demo-controls");
    controls.setAttribute("role", "group");
    const rowHeading = copyNode.querySelector("h3");
    if (rowHeading) {
      rowHeading.id ||= `section-demo-${locale}-${key}`;
      controls.setAttribute("aria-labelledby", rowHeading.id);
    } else {
      controls.setAttribute("aria-label", content[locale].group);
    }
    const result = make("div", "section-demo-result");
    const liveStatus = make("p", "sr-only");
    liveStatus.setAttribute("role", "status");
    liveStatus.setAttribute("aria-live", "polite");
    liveStatus.setAttribute("aria-atomic", "true");
    const title = make("strong", "section-demo-title");
    const description = make("p", "section-demo-description");
    const stats = make("div", "section-demo-stats");
    const meters = make("div", "section-demo-meters");
    const progress = make("progress", "section-demo-progress");
    progress.max = 100;
    progress.setAttribute("aria-label", content[locale].progressLabel);
    const visualStatus = make("span", "section-visual-status");
    visualStatus.setAttribute("aria-hidden", "true");
    media.append(visualStatus);
    result.append(title, description, stats, meters, progress);
    shell.append(kicker, controls, result, liveStatus);
    copyNode.append(shell);

    const buttons = states.map((state, index) => {
      const button = make("button", "section-demo-button", state.label);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => render(index, true));
      controls.append(button);
      return button;
    });

    const render = (index, announce = false) => {
      const state = states[index];
      row.dataset.demoIndex = String(index);
      buttons.forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === index)));
      title.textContent = state.title;
      description.textContent = state.description;
      if (announce) liveStatus.textContent = `${state.title} ${state.description}`;
      visualStatus.textContent = state.label;
      stats.hidden = !state.stats;
      meters.hidden = !state.meters;
      progress.hidden = state.progress === undefined;
      if (state.stats) renderStats(stats, state.stats);
      if (state.progress !== undefined) progress.value = state.progress;
      meters.replaceChildren();
      if (state.meters) {
        state.meters.forEach(([label, value]) => {
          const meter = make("div", "section-demo-meter");
          const heading = make("span", "section-demo-meter-label");
          heading.append(make("b", "", label), make("small", "", `${value}%`));
          const track = make("span", "section-demo-meter-track");
          const fill = make("span", "section-demo-meter-fill");
          fill.style.setProperty("--meter-value", `${value}%`);
          track.setAttribute("role", "meter");
          track.setAttribute("aria-label", label);
          track.setAttribute("aria-valuemin", "0");
          track.setAttribute("aria-valuemax", "100");
          track.setAttribute("aria-valuenow", String(value));
          track.append(fill);
          meter.append(heading, track);
          meters.append(meter);
        });
      }
      if (state.friend) {
        const [code, label, name] = state.friend;
        media.querySelector("[data-friend-code]").textContent = code;
        media.querySelector("[data-friend-label]").textContent = label;
        media.querySelector("[data-friend-name]").textContent = name;
      }
      media.classList.remove("is-demo-switching");
      window.requestAnimationFrame(() => media.classList.add("is-demo-switching"));
    };

    row.classList.add("is-enhanced");
    shell.hidden = false;
    render(0, false);
  });

  document.querySelectorAll("[data-feature-demo]").forEach((grid) => {
    grid.querySelectorAll(".feature-card").forEach((card, index) => {
      const detail = content[locale].featureDetails[index];
      if (!detail) return;
      const details = make("details", "feature-demo-details");
      const summary = make("summary", "", content[locale].featureSummary);
      const heading = card.querySelector("h3");
      if (heading) summary.setAttribute("aria-label", `${heading.textContent} — ${content[locale].featureSummary}`);
      details.append(summary, make("p", "", detail));
      card.append(details);
    });
  });
})();
