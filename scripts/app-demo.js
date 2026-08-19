(() => {
  const demos = document.querySelectorAll("[data-motionly-demo]");

  if (!demos.length) {
    return;
  }

  const copy = {
    ja: [
      {
        kicker: "TODAY",
        title: "走る前に、今日を確認。",
        description: "利用できる場合は、天気と風を見て今日の運動を決められます。",
        action: "行き先を選ぶ",
        announcement: "天気の画面デモです。気温24度、風速0.9メートル毎秒の表示例です。"
      },
      {
        kicker: "ROUTE PREVIEW",
        title: "行き先までのルートを確認。",
        description: "徒歩向けのサンプルルートを確認してから、記録を始めます。",
        action: "GPS記録を試す",
        announcement: "日比谷公園まで1.8キロメートルのルートプレビュー例です。"
      },
      {
        kicker: "RECORDING",
        title: "GPSで、今日の一歩を記録。",
        description: "距離・時間・歩数が進む様子を、短時間で体験できます。",
        action: "記録を終了",
        announcement: "GPS運動記録の画面デモです。距離、時間、歩数の例が変化します。"
      },
      {
        kicker: "THIS WEEK",
        title: "続けた日々を、ひと目で。",
        description: "今週の回数・合計距離・合計時間を振り返れます。",
        action: "次の目標を見る",
        announcement: "今週の記録例です。3回、8.4キロメートル、52分です。"
      },
      {
        kicker: "NEXT GOAL",
        title: "次の目標は、無理のないところから。",
        description: "公開チャレンジが、運動を続けるきっかけになります。",
        action: "最初から見る",
        announcement: "30日以内に合計10キロメートルを目指す公開チャレンジの例です。"
      }
    ],
    ko: [
      {
        kicker: "TODAY",
        title: "달리기 전에 오늘의 날씨를 확인하세요.",
        description: "이용 가능한 경우 날씨와 바람을 보고 오늘의 운동을 정할 수 있습니다.",
        action: "목적지 선택",
        announcement: "날씨 화면 데모입니다. 기온 24도, 풍속 초속 0.9미터의 표시 예시입니다."
      },
      {
        kicker: "ROUTE PREVIEW",
        title: "목적지까지의 경로를 확인하세요.",
        description: "걷기와 달리기에 맞춘 예시 경로를 본 뒤 기록을 시작합니다.",
        action: "GPS 기록 체험",
        announcement: "히비야 공원까지 1.8킬로미터의 경로 미리보기 예시입니다."
      },
      {
        kicker: "RECORDING",
        title: "GPS로 오늘의 움직임을 기록하세요.",
        description: "거리·시간·걸음 수가 변하는 과정을 짧게 보여주는 데모입니다.",
        action: "기록 마치기",
        announcement: "GPS 운동 기록 화면 데모입니다. 거리, 시간, 걸음 수 예시가 변합니다."
      },
      {
        kicker: "THIS WEEK",
        title: "이어온 날들을 한눈에.",
        description: "이번 주 운동 횟수·총 거리·총 시간을 돌아볼 수 있습니다.",
        action: "다음 목표 보기",
        announcement: "이번 주 기록 예시입니다. 3회, 8.4킬로미터, 52분입니다."
      },
      {
        kicker: "NEXT GOAL",
        title: "다음 목표는 무리 없는 수준부터.",
        description: "공개 챌린지를 꾸준히 운동하는 계기로 활용할 수 있습니다.",
        action: "처음부터 보기",
        announcement: "30일 동안 누적 10킬로미터를 목표로 하는 공개 챌린지 예시입니다."
      }
    ],
    en: [
      {
        kicker: "TODAY",
        title: "Check the weather before you go.",
        description: "Where available, check weather and wind before deciding how far to go.",
        action: "Choose a destination",
        announcement: "Weather screen demo showing 24 degrees Celsius and wind at 0.9 meters per second."
      },
      {
        kicker: "ROUTE PREVIEW",
        title: "Preview the route ahead.",
        description: "See a sample walking-friendly route before you start tracking.",
        action: "Try GPS tracking",
        announcement: "Sample 1.8 kilometer route preview to Hibiya Park."
      },
      {
        kicker: "RECORDING",
        title: "Track today’s movement with GPS.",
        description: "A shortened demo of distance, time, and step tracking.",
        action: "Finish tracking",
        announcement: "Sample distance, time, and step count update during the demo."
      },
      {
        kicker: "THIS WEEK",
        title: "Look back on the days you kept moving.",
        description: "Review this week’s workout count, total distance, and total time.",
        action: "See the next goal",
        announcement: "Sample weekly recap: 3 workouts, 8.4 kilometers, and 52 minutes."
      },
      {
        kicker: "NEXT GOAL",
        title: "Make the next goal achievable.",
        description: "Use a public challenge as one more reason to keep moving.",
        action: "Start again",
        announcement: "Sample public challenge to log 10 kilometers within 30 days."
      }
    ]
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const badgeLabels = {
    ja: "操作できるデモ",
    ko: "직접 체험 데모",
    en: "Interactive demo"
  };

  demos.forEach((demo) => {
    const locale = copy[demo.dataset.demoLocale] ? demo.dataset.demoLocale : "en";
    const states = copy[locale];
    const kicker = demo.querySelector("[data-demo-kicker]");
    const title = demo.querySelector("[data-demo-title]");
    const description = demo.querySelector("[data-demo-description]");
    const next = demo.querySelector("[data-demo-next]");
    const reset = demo.querySelector("[data-demo-reset]");
    const badge = demo.querySelector("[data-demo-badge]");
    const status = demo.querySelector("[data-demo-status]");
    const distance = demo.querySelector("[data-demo-distance]");
    const time = demo.querySelector("[data-demo-time]");
    const steps = demo.querySelector("[data-demo-steps]");
    const stepButtons = Array.from(demo.querySelectorAll("[data-demo-step]"));
    let state = 0;
    let animationFrame = 0;
    let animationProgress = 0;
    let animationStartedAt = 0;

    const setCounterValues = (progress) => {
      const seconds = Math.round(138 * progress);
      const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
      const remainingSeconds = String(seconds % 60).padStart(2, "0");
      distance.textContent = (0.34 * progress).toFixed(2);
      time.textContent = `${minutes}:${remainingSeconds}`;
      steps.textContent = String(Math.round(412 * progress));
    };

    const stopCounterAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const runCounterAnimation = () => {
      stopCounterAnimation();

      if (reducedMotion) {
        animationProgress = 1;
        setCounterValues(1);
        return;
      }

      animationStartedAt = performance.now() - animationProgress * 4000;

      const tick = (now) => {
        animationProgress = Math.min((now - animationStartedAt) / 4000, 1);
        setCounterValues(animationProgress);

        if (animationProgress < 1 && state === 2 && !document.hidden) {
          animationFrame = window.requestAnimationFrame(tick);
        } else {
          animationFrame = 0;
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    const render = (nextState, announce = true) => {
      state = Math.max(0, Math.min(states.length - 1, nextState));
      demo.dataset.state = String(state);
      kicker.textContent = states[state].kicker;
      title.textContent = states[state].title;
      description.textContent = states[state].description;
      next.firstChild.nodeValue = `${states[state].action} `;

      stepButtons.forEach((button, index) => {
        if (index === state) {
          button.setAttribute("aria-current", "step");
        } else {
          button.removeAttribute("aria-current");
        }
      });

      stopCounterAnimation();

      if (state === 0) {
        animationProgress = 0;
        setCounterValues(0);
      } else if (state === 2) {
        animationProgress = 0;
        setCounterValues(0);
        runCounterAnimation();
      }

      if (announce) {
        status.textContent = states[state].announcement;
      }
    };

    next.addEventListener("click", () => {
      render(state === states.length - 1 ? 0 : state + 1);
    });

    reset.addEventListener("click", () => {
      render(0);
    });

    stepButtons.forEach((button) => {
      button.addEventListener("click", () => {
        render(Number(button.dataset.demoStep));
      });
    });

    if (finePointer && !reducedMotion) {
      demo.addEventListener("pointermove", (event) => {
        const bounds = demo.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        demo.style.setProperty("--demo-rotate-x", `${(-y * 3).toFixed(2)}deg`);
        demo.style.setProperty("--demo-rotate-y", `${(x * 3).toFixed(2)}deg`);
        demo.style.setProperty("--demo-shift-x", `${(x * 3).toFixed(2)}px`);
        demo.style.setProperty("--demo-shift-y", `${(y * 3).toFixed(2)}px`);
        demo.classList.add("is-pointer-active");
      });

      demo.addEventListener("pointerleave", () => {
        demo.style.removeProperty("--demo-rotate-x");
        demo.style.removeProperty("--demo-rotate-y");
        demo.style.removeProperty("--demo-shift-x");
        demo.style.removeProperty("--demo-shift-y");
        demo.classList.remove("is-pointer-active");
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopCounterAnimation();
      } else if (state === 2 && animationProgress < 1) {
        runCounterAnimation();
      }
    });

    window.addEventListener("pagehide", stopCounterAnimation, { once: true });
    badge.textContent = badgeLabels[locale];
    demo.classList.add("is-ready");
    render(0, false);
  });
})();
