(() => {
  const demos = document.querySelectorAll("[data-motionly-demo]");

  if (!demos.length) {
    return;
  }

  const copy = {
    ja: [
      {
        kicker: "天気",
        title: "運動前の天気を確認",
        description: "購読中または14日間の体験利用中は、気温・風速・風向を確認できます。",
        action: "行き先を選ぶ",
        announcement: "天気の表示例です。気温24度、風速0.9メートル毎秒です。"
      },
      {
        kicker: "ルート",
        title: "行き先までのルートを表示",
        description: "日比谷公園までの徒歩・ランニング向けサンプルルートです。",
        action: "記録画面を見る",
        announcement: "日比谷公園まで1.8キロメートルのルートプレビュー例です。"
      },
      {
        kicker: "GPS記録",
        title: "距離・時間・歩数を表示",
        description: "デモでは、距離・時間・歩数のサンプル値が短時間で変わります。",
        action: "記録を終了",
        announcement: "GPS運動記録の表示例です。距離、時間、歩数のサンプル値が変化します。"
      },
      {
        kicker: "今週の記録",
        title: "今週の運動記録を確認",
        description: "ログイン後に、今週の回数・合計距離・合計時間を確認できます。",
        action: "チャレンジを見る",
        announcement: "今週の記録例です。3回、8.4キロメートル、52分です。"
      },
      {
        kicker: "チャレンジ",
        title: "公開チャレンジを確認",
        description: "目標距離と期間を確認して、参加するチャレンジを選べます。",
        action: "最初から見る",
        announcement: "30日以内に合計10キロメートルを目指す公開チャレンジの例です。"
      }
    ],
    ko: [
      {
        kicker: "날씨",
        title: "운동 전 날씨 확인",
        description: "구독 중이거나 14일 체험 이용 중에는 기온·풍속·풍향을 확인할 수 있습니다.",
        action: "목적지 선택",
        announcement: "날씨 표시 예시입니다. 기온 24도, 풍속 초속 0.9미터입니다."
      },
      {
        kicker: "경로",
        title: "목적지까지의 경로 표시",
        description: "히비야 공원까지의 걷기·달리기용 예시 경로입니다.",
        action: "기록 화면 보기",
        announcement: "히비야 공원까지 1.8킬로미터의 경로 미리보기 예시입니다."
      },
      {
        kicker: "GPS 기록",
        title: "거리·시간·걸음 수 표시",
        description: "기능 미리보기에서는 거리·시간·걸음 수의 예시 값이 짧은 시간 동안 변합니다.",
        action: "기록 화면 종료",
        announcement: "GPS 운동 기록 표시 예시입니다. 거리, 시간, 걸음 수의 예시 값이 변합니다."
      },
      {
        kicker: "이번 주 기록",
        title: "이번 주 운동 기록 확인",
        description: "로그인 후 이번 주 운동 횟수·총 거리·총 시간을 확인할 수 있습니다.",
        action: "챌린지 보기",
        announcement: "이번 주 기록 예시입니다. 3회, 8.4킬로미터, 52분입니다."
      },
      {
        kicker: "챌린지",
        title: "공개 챌린지 확인",
        description: "목표 거리와 기간을 확인하고 참여할 챌린지를 선택할 수 있습니다.",
        action: "처음부터 보기",
        announcement: "30일 동안 누적 10킬로미터를 목표로 하는 공개 챌린지 예시입니다."
      }
    ],
    en: [
      {
        kicker: "WEATHER",
        title: "Check weather before a workout",
        description: "Temperature and wind are available with a subscription or active 14-day trial.",
        action: "Choose a destination",
        announcement: "Sample weather display showing 24 degrees Celsius and wind at 0.9 meters per second."
      },
      {
        kicker: "ROUTE",
        title: "Preview the route to your destination",
        description: "This is a sample route for walking or running to Hibiya Park.",
        action: "View tracking screen",
        announcement: "Sample 1.8 kilometer route preview to Hibiya Park."
      },
      {
        kicker: "GPS TRACKING",
        title: "View distance, time, and steps",
        description: "The feature preview updates sample distance, time, and step values over a few seconds.",
        action: "Close tracking screen",
        announcement: "Sample distance, time, and step values update during the feature preview."
      },
      {
        kicker: "THIS WEEK",
        title: "View this week’s workouts",
        description: "After signing in, view this week’s workout count, total distance, and total time.",
        action: "View a challenge",
        announcement: "Sample weekly recap: 3 workouts, 8.4 kilometers, and 52 minutes."
      },
      {
        kicker: "CHALLENGE",
        title: "View a public challenge",
        description: "Check the target distance and duration before choosing a challenge.",
        action: "Start again",
        announcement: "Sample public challenge to log 10 kilometers within 30 days."
      }
    ]
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const badgeLabels = {
    ja: "機能プレビュー",
    ko: "기능 미리보기",
    en: "Feature preview"
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
    let lastCounterPaint = 0;

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
        if (now - lastCounterPaint >= 66 || animationProgress === 1) {
          setCounterValues(animationProgress);
          lastCounterPaint = now;
        }

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
      let tiltFrame = 0;
      let tiltBounds = null;
      let tiltPoint = null;

      const resetTilt = () => {
        if (tiltFrame) {
          window.cancelAnimationFrame(tiltFrame);
          tiltFrame = 0;
        }
        tiltPoint = null;
        demo.style.removeProperty("--demo-rotate-x");
        demo.style.removeProperty("--demo-rotate-y");
        demo.style.removeProperty("--demo-shift-x");
        demo.style.removeProperty("--demo-shift-y");
        demo.classList.remove("is-pointer-active");
      };

      demo.addEventListener("pointerenter", () => {
        tiltBounds = demo.getBoundingClientRect();
      });

      demo.addEventListener("pointermove", (event) => {
        if (event.target.closest("button, a, input, select, textarea, summary")) {
          resetTilt();
          return;
        }

        tiltPoint = { x: event.clientX, y: event.clientY };
        if (tiltFrame) return;
        tiltFrame = window.requestAnimationFrame(() => {
          tiltFrame = 0;
          if (!tiltPoint) return;
          const bounds = tiltBounds || demo.getBoundingClientRect();
          const x = (tiltPoint.x - bounds.left) / bounds.width - 0.5;
          const y = (tiltPoint.y - bounds.top) / bounds.height - 0.5;
          demo.style.setProperty("--demo-rotate-x", `${(-y * 3).toFixed(2)}deg`);
          demo.style.setProperty("--demo-rotate-y", `${(x * 3).toFixed(2)}deg`);
          demo.style.setProperty("--demo-shift-x", `${(x * 3).toFixed(2)}px`);
          demo.style.setProperty("--demo-shift-y", `${(y * 3).toFixed(2)}px`);
          demo.classList.add("is-pointer-active");
        });
      });

      demo.addEventListener("pointerleave", resetTilt);
      window.addEventListener("resize", () => {
        tiltBounds = null;
      }, { passive: true });
      window.addEventListener("pagehide", resetTilt, { once: true });
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
