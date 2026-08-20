(() => {
  const locale = ["ja", "ko", "en"].includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "en";

  const content = {
    ja: {
      sample: "操作できるサンプル",
      group: "表示するサンプルを選択",
      history: [
        { label: "今週", title: "3回、続けられました。", description: "合計8.4km・52分の振り返り例です。", stats: [["3", "回"], ["8.4", "km"], ["52", "分"]], progress: 75, records: [["8月18日", "3.2 km", "21:36"], ["8月16日", "2.5 km", "18:42"], ["8月14日", "2.7 km", "11:42"]], visual: "week" },
        { label: "先週との比較", title: "先週より1回多く動けました。", description: "今週3回・先週2回の比較表示例です。", stats: [["3", "今週"], ["2", "先週"], ["+1", "差"]], visual: "compare" },
        { label: "目標設定", title: "あと1回で今週の目標。", description: "1〜7回から選んだ週間目標の表示例です。", stats: [["3 / 4", "回"], ["75", "%"], ["1", "あと"]], progress: 75, visual: "goal" }
      ],
      challenge: [
        { label: "最初の10K", title: "30日以内に合計10km。", description: "公開チャレンジの表示例です。自動参加や送信は行いません。", stats: [["10", "km"], ["30", "日"], ["公開", "設定"]], icon: "🎯", visual: "card" },
        { label: "7日連続", title: "7日連続で運動する目標。", description: "連続日数チャレンジの表示例です。", stats: [["7", "日"], ["普通", "難易度"], ["公開", "設定"]], icon: "🔥", visual: "streak" },
        { label: "目標を作成", title: "自分に合う目標を作る。", description: "距離・期間・公開範囲を選ぶ作成画面の例です。", stats: [["5", "km"], ["14", "日"], ["非公開", "設定"]], icon: "+", visual: "form" }
      ],
      biorhythm: [
        { label: "今日の周期", title: "今日の3つの周期。", description: "体力9%・感情39%・知性99%の表示例です。", meters: [["体力", 9], ["感情", 39], ["知性", 99]], visual: "overview" },
        { label: "運動メモ", title: "実際の体調を優先。", description: "運動メモも娯楽・参考用で、科学的・医学的な判断ではありません。", meters: [["体力", 9], ["感情", 39], ["知性", 99]], visual: "note" },
        { label: "生年月日", title: "周期は端末内で計算。", description: "生年月日を編集しても、このデモでは入力や保存を行いません。", meters: [["体力", 9], ["感情", 39], ["知性", 99]], visual: "birth" }
      ],
      friends: [
        { label: "マイコード", title: "16桁コードを確認。", description: "入力前の画面例です。実際の検索は行いません。", stats: [["16桁", "コード"], ["QR", "利用条件あり"], ["未送信", "状態"]], friend: ["•••• •••• •••• 4028", "コードを入力", "承認後につながります"] },
        { label: "検索", title: "送信前に相手を確認。", description: "ニックネームを確認してから申請する流れの例です。", stats: [["Motionly", "サンプル"], ["確認", "送信前"], ["未送信", "状態"]], friend: ["•••• •••• •••• 4028", "検索結果の例", "Motionlyランナー"] },
        { label: "申請", title: "申請後は承認待ちに。", description: "相手の承認を待つ状態の例です。このデモでは送信しません。", stats: [["申請", "サンプル"], ["承認待ち", "状態"], ["無通信", "デモ"]], friend: ["•••• •••• •••• 4028", "申請状態の例", "承認を待っています"] },
        { label: "承認", title: "承認されてから友だちに。", description: "このデモから申請や通信は行いません。", stats: [["申請", "サンプル"], ["承認", "必要"], ["接続", "完了例"]], friend: ["•••• •••• •••• 4028", "承認後の例", "友だちに追加されました"] }
      ],
      screen: { history: "運動記録", challenge: "チャレンジ", biorhythm: "バイオリズム", friends: "友だち", sample: "画面サンプル", signedIn: "サインイン後の表示例", reference: "科学的・医学的判断ではなく、娯楽・参考用", noNetwork: "通信しないデモ", weeklyGoal: "週間目標", comparison: "先週との比較", createGoal: "目標を作成", friendCode: "16桁コードで追加", birthDate: "生年月日を編集", workoutNote: "今日の運動メモ", remaining: "あと1回", days: ["月", "火", "水", "木", "金", "土", "日"] },
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
        { label: "이번 주", title: "이번 주 3번 움직였어요.", description: "총 8.4km·52분을 돌아보는 예시입니다.", stats: [["3", "회"], ["8.4", "km"], ["52", "분"]], progress: 75, records: [["8월 18일", "3.2 km", "21:36"], ["8월 16일", "2.5 km", "18:42"], ["8월 14일", "2.7 km", "11:42"]], visual: "week" },
        { label: "지난주 비교", title: "지난주보다 1번 더 움직였어요.", description: "이번 주 3회·지난주 2회를 비교하는 예시입니다.", stats: [["3", "이번 주"], ["2", "지난주"], ["+1", "차이"]], visual: "compare" },
        { label: "목표 설정", title: "한 번 더 하면 이번 주 목표예요.", description: "1~7회 중 선택한 주간 목표 표시 예시입니다.", stats: [["3 / 4", "회"], ["75", "%"], ["1", "남음"]], progress: 75, visual: "goal" }
      ],
      challenge: [
        { label: "첫 10K", title: "30일 동안 누적 10km.", description: "공개 챌린지 표시 예시이며 자동 참여나 전송은 없습니다.", stats: [["10", "km"], ["30", "일"], ["공개", "설정"]], icon: "🎯", visual: "card" },
        { label: "7일 연속", title: "7일 연속 운동 목표.", description: "연속 일수 챌린지 표시 예시입니다.", stats: [["7", "일"], ["보통", "난이도"], ["공개", "설정"]], icon: "🔥", visual: "streak" },
        { label: "목표 만들기", title: "나에게 맞는 목표를 만드세요.", description: "거리·기간·공개 범위를 고르는 작성 화면 예시입니다.", stats: [["5", "km"], ["14", "일"], ["비공개", "설정"]], icon: "+", visual: "form" }
      ],
      biorhythm: [
        { label: "오늘 주기", title: "오늘의 세 가지 주기.", description: "신체 9%·감정 39%·지성 99% 표시 예시입니다.", meters: [["신체", 9], ["감정", 39], ["지성", 99]], visual: "overview" },
        { label: "운동 메모", title: "실제 몸 상태를 우선하세요.", description: "운동 메모도 재미·참고용이며 과학적·의학적 판단이 아닙니다.", meters: [["신체", 9], ["감정", 39], ["지성", 99]], visual: "note" },
        { label: "생년월일", title: "주기는 기기 안에서 계산해요.", description: "생년월일을 수정해도 이 데모에서는 입력하거나 저장하지 않습니다.", meters: [["신체", 9], ["감정", 39], ["지성", 99]], visual: "birth" }
      ],
      friends: [
        { label: "내 코드", title: "16자리 코드를 확인하세요.", description: "입력 전 화면 예시이며 실제 검색은 없습니다.", stats: [["16자리", "코드"], ["QR", "이용 조건 있음"], ["미전송", "상태"]], friend: ["•••• •••• •••• 4028", "코드 입력", "승인 후 연결됩니다"] },
        { label: "검색", title: "보내기 전에 상대를 확인하세요.", description: "닉네임을 확인한 뒤 신청하는 흐름의 예시입니다.", stats: [["Motionly", "샘플"], ["확인", "전송 전"], ["미전송", "상태"]], friend: ["•••• •••• •••• 4028", "검색 결과 예시", "Motionly 러너"] },
        { label: "신청", title: "신청 뒤에는 승인을 기다려요.", description: "상대의 승인을 기다리는 상태 예시이며 실제 전송은 없습니다.", stats: [["신청", "샘플"], ["승인 대기", "상태"], ["통신 없음", "데모"]], friend: ["•••• •••• •••• 4028", "신청 상태 예시", "승인을 기다리고 있습니다"] },
        { label: "승인", title: "승인된 뒤 친구로 연결됩니다.", description: "이 데모에서는 신청이나 통신이 발생하지 않습니다.", stats: [["신청", "샘플"], ["승인", "필요"], ["연결", "완료 예시"]], friend: ["•••• •••• •••• 4028", "승인 후 예시", "친구로 추가되었습니다"] }
      ],
      screen: { history: "운동 기록", challenge: "챌린지", biorhythm: "바이오리듬", friends: "친구", sample: "화면 샘플", signedIn: "로그인 후 표시되는 예시", reference: "과학적·의학적 판단이 아닌 재미·참고용", noNetwork: "통신 없는 데모", weeklyGoal: "주간 목표", comparison: "지난주 비교", createGoal: "목표 만들기", friendCode: "16자리 코드로 추가", birthDate: "생년월일 수정", workoutNote: "오늘의 운동 메모", remaining: "1회 남음", days: ["월", "화", "수", "목", "금", "토", "일"] },
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
        { label: "This week", title: "You moved three times.", description: "Sample recap: 8.4 km and 52 minutes in total.", stats: [["3", "workouts"], ["8.4", "km"], ["52", "min"]], progress: 75, records: [["Aug 18", "3.2 km", "21:36"], ["Aug 16", "2.5 km", "18:42"], ["Aug 14", "2.7 km", "11:42"]], visual: "week" },
        { label: "Last week", title: "One more workout than last week.", description: "Sample comparison: three this week and two last week.", stats: [["3", "this week"], ["2", "last week"], ["+1", "difference"]], visual: "compare" },
        { label: "Goal", title: "One more workout to go.", description: "Sample weekly goal selected from 1 to 7 workouts.", stats: [["3 / 4", "workouts"], ["75", "%"], ["1", "left"]], progress: 75, visual: "goal" }
      ],
      challenge: [
        { label: "First 10K", title: "Log 10 km in 30 days.", description: "Sample public challenge. Nothing is joined or submitted here.", stats: [["10", "km"], ["30", "days"], ["public", "setting"]], icon: "🎯", visual: "card" },
        { label: "7-day streak", title: "Move for seven days in a row.", description: "Sample consecutive-day challenge.", stats: [["7", "days"], ["medium", "difficulty"], ["public", "setting"]], icon: "🔥", visual: "streak" },
        { label: "Create", title: "Make a goal that fits you.", description: "Sample setup for distance, duration, and visibility.", stats: [["5", "km"], ["14", "days"], ["private", "setting"]], icon: "+", visual: "form" }
      ],
      biorhythm: [
        { label: "Today", title: "Today’s three cycles.", description: "Sample values: physical 9%, emotional 39%, and intellectual 99%.", meters: [["Physical", 9], ["Emotional", 39], ["Intellectual", 99]], visual: "overview" },
        { label: "Workout note", title: "Prioritize how you actually feel.", description: "The workout note is entertainment and reference content, not medical advice.", meters: [["Physical", 9], ["Emotional", 39], ["Intellectual", 99]], visual: "note" },
        { label: "Birth date", title: "Cycles are calculated on device.", description: "This demo never enters or saves a birth date.", meters: [["Physical", 9], ["Emotional", 39], ["Intellectual", 99]], visual: "birth" }
      ],
      friends: [
        { label: "My code", title: "Check a 16-digit code.", description: "Pre-entry sample. No lookup is performed.", stats: [["16-digit", "code"], ["QR", "eligibility applies"], ["not sent", "status"]], friend: ["•••• •••• •••• 4028", "Enter a code", "Connect after approval"] },
        { label: "Search", title: "Check who you are adding.", description: "Sample nickname preview before a request is sent.", stats: [["Motionly", "sample"], ["preview", "before send"], ["not sent", "status"]], friend: ["•••• •••• •••• 4028", "Sample lookup result", "Motionly runner"] },
        { label: "Request", title: "Wait for the other person to approve.", description: "Sample pending state. This demo never sends a request.", stats: [["request", "sample"], ["pending", "status"], ["offline", "demo"]], friend: ["•••• •••• •••• 4028", "Sample request state", "Waiting for approval"] },
        { label: "Approval", title: "Connect only after approval.", description: "This demo never sends a request or contacts anyone.", stats: [["request", "sample"], ["approval", "required"], ["connected", "example"]], friend: ["•••• •••• •••• 4028", "After approval", "Added as a friend"] }
      ],
      screen: { history: "Workout history", challenge: "Challenges", biorhythm: "Biorhythm", friends: "Friends", sample: "Screen sample", signedIn: "Example shown after sign-in", reference: "Entertainment/reference only — not medical guidance", noNetwork: "Offline demo", weeklyGoal: "Weekly goal", comparison: "Last-week comparison", createGoal: "Create a goal", friendCode: "Add with a 16-digit code", birthDate: "Edit birth date", workoutNote: "Today’s workout note", remaining: "1 workout left", days: ["M", "T", "W", "T", "F", "S", "S"] },
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

  const appendVisualStats = (container, stats) => {
    stats.forEach(([value, label]) => {
      const item = make("span", "section-screen-stat");
      item.append(make("strong", "", value), make("small", "", label));
      container.append(item);
    });
  };

  const makeScreenHeading = (eyebrow, title) => {
    const heading = make("div", "section-screen-heading");
    heading.append(make("small", "", eyebrow), make("strong", "", title));
    return heading;
  };

  const makeScreenStats = (stats) => {
    const grid = make("div", "section-screen-stats");
    appendVisualStats(grid, stats);
    return grid;
  };

  const renderHistoryScreen = (state, strings) => {
    const view = make("div", `section-screen-view history-screen history-screen-${state.visual}`);
    view.append(makeScreenHeading(state.label, state.title));

    if (state.visual === "week") {
      const summary = make("div", "history-week-summary");
      summary.append(makeScreenStats(state.stats));
      const list = make("div", "history-record-list");
      state.records.forEach(([date, distance, duration], index) => {
        const row = make("div", "history-record-row");
        row.append(
          make("span", "history-record-icon", index === 0 ? "↗" : "⌁"),
          make("strong", "", date),
          make("small", "", `${distance} · ${duration}`)
        );
        list.append(row);
      });
      summary.append(list);
      view.append(summary);
    } else if (state.visual === "compare") {
      const compare = make("div", "history-compare-card");
      state.stats.slice(0, 2).forEach(([value, label], index) => {
        const row = make("div", "history-compare-row");
        const copy = make("span", "history-compare-copy");
        copy.append(make("small", "", label), make("strong", "", value));
        const track = make("span", "history-compare-track");
        const fill = make("span", "history-compare-fill");
        fill.style.setProperty("--compare-value", index === 0 ? "75%" : "50%");
        track.append(fill);
        row.append(copy, track);
        compare.append(row);
      });
      const difference = make("div", "history-difference");
      difference.append(make("b", "", state.stats[2][0]), make("span", "", state.stats[2][1]));
      compare.append(difference);
      view.append(make("p", "section-screen-caption", strings.comparison), compare);
    } else {
      const goal = make("div", "history-goal-card");
      const ring = make("div", "history-goal-ring");
      ring.style.setProperty("--goal-progress", "75%");
      ring.append(make("strong", "", "3/4"), make("small", "", "75%"));
      const goalCopy = make("div", "history-goal-copy");
      goalCopy.append(make("small", "", strings.weeklyGoal), make("strong", "", strings.remaining));
      goal.append(ring, goalCopy);
      const selector = make("div", "history-goal-selector");
      for (let value = 1; value <= 7; value += 1) {
        const option = make("span", value === 4 ? "is-selected" : "", String(value));
        selector.append(option);
      }
      view.append(goal, selector, make("p", "section-screen-caption", state.description));
    }
    return view;
  };

  const renderChallengeScreen = (state, strings) => {
    const view = make("div", `section-screen-view challenge-screen challenge-screen-${state.visual}`);
    view.append(makeScreenHeading(state.label, state.title));

    if (state.visual === "form") {
      const form = make("div", "challenge-form-card");
      state.stats.forEach(([value, label]) => {
        const field = make("div", "challenge-form-field");
        field.append(make("small", "", label), make("strong", "", value), make("span", "", "›"));
        form.append(field);
      });
      const save = make("div", "challenge-form-save", strings.createGoal);
      view.append(form, save, make("p", "section-screen-caption", state.description));
      return view;
    }

    const hero = make("div", "challenge-hero-card");
    hero.append(make("span", "challenge-visual-icon", state.icon));
    const heroCopy = make("div", "challenge-visual-copy");
    heroCopy.append(make("small", "", strings.sample), make("strong", "", state.label), make("p", "", state.title));
    hero.append(heroCopy);
    view.append(hero, makeScreenStats(state.stats));

    if (state.visual === "streak") {
      const days = make("div", "challenge-streak-days");
      strings.days.forEach((day) => days.append(make("span", "", day)));
      view.append(days);
    } else {
      const preview = make("div", "challenge-preview-row");
      preview.append(make("span", "", "100P"), make("span", "", strings.signedIn));
      view.append(preview);
    }
    view.append(make("p", "section-screen-caption", state.description));
    return view;
  };

  const renderBiorhythmBars = (meters) => {
    const bars = make("div", "biorhythm-screen-bars");
    meters.forEach(([label, value]) => {
      const row = make("div", "biorhythm-screen-bar");
      const heading = make("span", "");
      heading.append(make("b", "", label), make("small", "", `${value}%`));
      const track = make("span", "biorhythm-screen-track");
      const fill = make("span", "biorhythm-screen-fill");
      fill.style.setProperty("--biorhythm-value", `${value}%`);
      track.append(fill);
      row.append(heading, track);
      bars.append(row);
    });
    return bars;
  };

  const renderBiorhythmScreen = (state, strings) => {
    const view = make("div", `section-screen-view biorhythm-screen biorhythm-screen-${state.visual}`);
    view.append(makeScreenHeading(state.label, state.title));

    if (state.visual === "overview") {
      const score = make("div", "biorhythm-score-card");
      const gauge = make("div", "biorhythm-average-gauge");
      gauge.style.setProperty("--biorhythm-average", "49%");
      gauge.append(make("strong", "", "49%"), make("small", "", "AVG"));
      score.append(gauge, renderBiorhythmBars(state.meters));
      view.append(score);
    } else if (state.visual === "note") {
      const compact = makeScreenStats(state.meters.map(([label, value]) => [`${value}%`, label]));
      const note = make("div", "biorhythm-note-card");
      note.append(make("span", "", "↗"), make("strong", "", strings.workoutNote), make("p", "", state.description));
      view.append(compact, note);
    } else {
      const birth = make("div", "biorhythm-birth-card");
      birth.append(
        make("span", "biorhythm-birth-icon", "✦"),
        make("small", "", strings.birthDate),
        make("strong", "", "•••• / •• / ••"),
        make("p", "", state.description)
      );
      view.append(birth);
    }
    const disclaimer = make("div", "biorhythm-disclaimer");
    disclaimer.append(make("span", "", "ⓘ"), make("small", "", strings.reference));
    view.append(disclaimer);
    return view;
  };

  const renderFriendsScreen = (state, strings, index) => {
    const view = make("div", `section-screen-view friends-screen friends-screen-${index}`);
    view.append(makeScreenHeading(state.label, state.title));
    const steps = make("div", "friends-screen-steps");
    for (let step = 0; step < 4; step += 1) {
      const marker = make("span", step <= index ? "is-active" : "", step < index ? "✓" : String(step + 1));
      steps.append(marker);
    }
    view.append(steps);

    const card = make("div", "friends-screen-card");
    const icon = make("span", "friends-screen-icon", index === 0 ? "⌗" : index === 1 ? "M" : index === 2 ? "◷" : "✓");
    const copy = make("div", "friends-screen-copy");
    copy.append(make("small", "", state.friend[1]), make("strong", "", state.friend[2]), make("code", "", state.friend[0]));
    card.append(icon, copy);
    view.append(card);

    if (index === 0) {
      const finder = make("div", "friends-code-finder");
      finder.append(make("span", "", strings.friendCode), make("b", "", "⌁"));
      view.append(finder);
    } else {
      view.append(makeScreenStats(state.stats));
    }
    const offline = make("div", "friends-offline-note");
    offline.append(make("span", "", "●"), make("small", "", strings.noNetwork));
    view.append(offline);
    return view;
  };

  const createVisualStage = (key, media, strings) => {
    const fallback = media.querySelector("img, .friends-phone");
    fallback?.classList.add("section-demo-fallback");
    const device = make("div", "section-phone-demo");
    device.dataset.screenKind = key;
    device.setAttribute("aria-hidden", "true");
    const chrome = make("div", "section-phone-chrome");
    chrome.append(make("span", "section-phone-time", "9:41"), make("span", "section-phone-island"), make("span", "section-phone-signal", "▮▮▮"));
    const appBar = make("div", "section-phone-appbar");
    appBar.append(make("strong", "", strings[key]), make("small", "", strings.signedIn));
    const screen = make("div", "section-phone-screen");
    const home = make("span", "section-phone-home");
    device.append(chrome, appBar, screen, home);
    media.append(device);
    return { device, screen };
  };

  const renderVisualScreen = (stage, key, state, index, strings) => {
    const renderers = {
      history: () => renderHistoryScreen(state, strings),
      challenge: () => renderChallengeScreen(state, strings),
      biorhythm: () => renderBiorhythmScreen(state, strings),
      friends: () => renderFriendsScreen(state, strings, index)
    };
    const view = renderers[key]?.();
    if (!view) return;
    stage.device.dataset.visualIndex = String(index);
    stage.screen.replaceChildren(view);
  };

  document.querySelectorAll("[data-section-demo]").forEach((row) => {
    const key = row.dataset.sectionDemo;
    const states = content[locale][key];
    const media = row.querySelector(".showcase-media");
    const copyNode = row.querySelector(".showcase-copy");
    if (!states || !media || !copyNode) return;

    let visualStage;
    try {
      visualStage = createVisualStage(key, media, content[locale].screen);
    } catch {
      return;
    }
    const screenId = `section-screen-${locale}-${key}`;
    const resultId = `section-result-${locale}-${key}`;
    visualStage.screen.id = screenId;
    visualStage.screen.addEventListener("animationend", () => {
      visualStage.screen.classList.remove("is-screen-switching");
    });

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
    result.id = resultId;
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
    result.append(title, description, stats, meters, progress);
    shell.append(kicker, controls, result, liveStatus);
    copyNode.append(shell);

    const buttons = states.map((state, index) => {
      const button = make("button", "section-demo-button", state.label);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-controls", resultId);
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
      renderVisualScreen(visualStage, key, state, index, content[locale].screen);
      visualStage.screen.classList.remove("is-screen-switching");
      window.cancelAnimationFrame(visualStage.screenTransitionFrame || 0);
      visualStage.screenTransitionFrame = window.requestAnimationFrame(() => {
        visualStage.screen.classList.add("is-screen-switching");
        visualStage.screenTransitionFrame = 0;
      });
    };

    try {
      render(0, false);
      row.classList.add("is-enhanced", "has-live-screen");
      shell.hidden = false;
    } catch {
      window.cancelAnimationFrame(visualStage.screenTransitionFrame || 0);
      visualStage.device.remove();
      shell.remove();
    }
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
