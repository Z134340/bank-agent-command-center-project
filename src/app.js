const agents = [
      {
        id: "pr",
        initials: "PR",
        name: "採購風險 Agent",
        status: "啟動",
        desc: "比對供應商集中度、異常採購、未依程序核准與合約缺口。",
        score: 76,
        title: "採購風險成熟度",
        copy: "已具備基礎管控，但仍需強化高風險例外、供應商集中度與補核流程。",
        lead: "請啟動本季採購風險自查，聚焦異常採購、供應商集中與未核准合約。",
        replies: [
          "已建立查核工作階段。我會讀取採購申請、核准紀錄、供應商主檔與合約狀態，先以唯讀方式比對風險規則。",
          "初步結果：本季共檢出 3 件高風險採購、7 件中風險例外。主要集中於單一供應商比例偏高、事後補核與合約到期後仍有請款紀錄。"
        ],
        alerts: [
          ["高風險：合約到期後請款", "2 件請款發生於合約到期後，建議立即停付並補齊審查。", "danger"],
          ["中風險：單一供應商集中", "特定類別採購集中度偏高，建議納入下一次議價與替代供應商評估。", "warning"]
        ]
      },
      {
        id: "dl",
        initials: "DL",
        name: "資料外洩 Agent",
        status: "監控",
        desc: "掃描外寄、下載、雲端分享與 DLP 告警，找出高風險流向。",
        score: 82,
        title: "資料外洩偵測成熟度",
        copy: "告警分類完整，需補強跨通路關聯與例外核准追蹤。",
        lead: "請檢查本週敏感資料外寄與雲端分享，優先處理未核准對外流向。",
        replies: [
          "我會比對 DLP 告警、外寄附件、下載紀錄與雲端分享權限，先標出未經核准或收件網域異常的事件。",
          "初步結果：偵測到 2 筆高敏感資料外寄至未登錄合作網域，另有 5 筆雲端連結未設定到期日。"
        ],
        alerts: [
          ["高風險：未登錄網域外寄", "含客戶識別資料的附件寄往未登錄合作網域，需立即確認業務目的。", "danger"],
          ["中風險：雲端連結未到期", "部分外部分享連結未設定有效期限，建議批次套用到期與水印。", "warning"]
        ]
      },
      {
        id: "hr",
        initials: "HR",
        name: "人員管理 Agent",
        status: "稽核",
        desc: "檢查職務異動、離職交接、兼職衝突與訓練紀錄缺漏。",
        score: 69,
        title: "人員管理控制成熟度",
        copy: "離職流程可追蹤，但職務異動與權限收回仍有時間落差。",
        lead: "請查核近期職務異動、離職交接與必要訓練完成狀態。",
        replies: [
          "我會核對 HR 異動、訓練平台、權限申請與交接簽核紀錄，找出時序不一致或缺漏項。",
          "初步結果：4 位同仁職務異動後權限未同步調整，2 筆離職交接附件缺少主管覆核。"
        ],
        alerts: [
          ["高風險：職務異動後權限延遲", "異動後仍保留原職務敏感權限超過 7 日，需立即收斂。", "danger"],
          ["中風險：訓練紀錄缺口", "新任主管必要訓練未全數完成，建議設定到期提醒。", "warning"]
        ]
      },
      {
        id: "ac",
        initials: "AC",
        name: "權限風險 Agent",
        status: "優先",
        desc: "辨識高權限、共用帳號、逾期權限與授權變異。",
        score: 64,
        title: "權限治理成熟度",
        copy: "高權限清冊完整，但共用帳號與臨時授權退場控制不足。",
        lead: "請優先查核高權限帳號、共用帳號與逾期臨時授權。",
        replies: [
          "我會比對 IAM、AD 群組、例外申請與到期日，建立高權限與共用帳號風險清單。",
          "初步結果：發現 5 筆臨時授權逾期、1 個共用帳號仍可存取敏感系統。"
        ],
        alerts: [
          ["高風險：臨時授權逾期", "逾期權限仍可操作核心系統，需立即停用並補簽退場紀錄。", "danger"],
          ["中風險：共用帳號未收斂", "共用帳號缺少個人責任歸屬，建議改為具名授權。", "warning"]
        ]
      },
      {
        id: "gv",
        initials: "GV",
        name: "治理合規 Agent",
        status: "治理",
        desc: "追蹤制度遵循、例外核准、改善期限與主管覆核證據。",
        score: 88,
        title: "治理合規成熟度",
        copy: "制度與追蹤機制完整，建議強化跨單位改善責任歸屬。",
        lead: "請彙整本季治理合規查核狀態與逾期改善追蹤。",
        replies: [
          "我會串接制度條文、例外核准、改善單與主管覆核證據，整理高管可讀的追蹤摘要。",
          "初步結果：本季 12 項查核中有 10 項準時完成，2 項改善逾期且責任單位需重新確認。"
        ],
        alerts: [
          ["高風險：改善責任未明", "跨單位改善項目缺少單一負責人，影響追蹤與稽核回覆。", "danger"],
          ["中風險：例外核准證據分散", "例外核准與附件分散於多系統，建議統一索引。", "warning"]
        ]
      }
    ];

    const tabs = ["本季自查", "採購風險", "供應商管理", "高管呈報版"];
    const stepLabels = [
      ["讀取範圍", "採購案件、合約、供應商主檔"],
      ["取得佐證", "核准紀錄、請款資料、異動軌跡"],
      ["比對控制", "集中度、例外核准、到期合約"],
      ["產出摘要", "風險熱點與改善責任追蹤"]
    ];

    let currentAgent = agents[0];
    let activeTab = tabs[0];
    let selectedAlert = 0;
    let stepProgress = 2;
    let readonly = true;

    const agentsEl = document.getElementById("agents");
    const tabsEl = document.getElementById("tabs");
    const dialogueEl = document.getElementById("dialogue");
    const stepsEl = document.getElementById("steps");
    const alertsEl = document.getElementById("alerts");
    const scoreEl = document.getElementById("score");
    const maturityTitle = document.getElementById("maturity-title");
    const maturityCopy = document.getElementById("maturity-copy");
    const environmentBtn = document.getElementById("environment");

    function renderAgents() {
      agentsEl.innerHTML = "";
      agents.forEach(agent => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = `agent-card ${agent.id === currentAgent.id ? "active" : ""}`;
        card.setAttribute("aria-pressed", agent.id === currentAgent.id ? "true" : "false");
        card.innerHTML = `
          <span class="avatar">${agent.initials}</span>
          <span>
            <span class="agent-name">${agent.name}</span>
            <span class="agent-desc">${agent.desc}</span>
          </span>
          <span class="badge">${agent.status}</span>
        `;
        card.addEventListener("click", () => {
          currentAgent = agent;
          selectedAlert = 0;
          stepProgress = 2;
          render();
        });
        agentsEl.appendChild(card);
      });
    }

    function renderTabs() {
      tabsEl.innerHTML = "";
      tabs.forEach(tab => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `tab ${tab === activeTab ? "active" : ""}`;
        btn.textContent = tab;
        btn.addEventListener("click", () => {
          activeTab = tab;
          addAgentMessage(`已切換為「${tab}」。我會以此視角重排查核證據與主管摘要。`);
          renderTabs();
        });
        tabsEl.appendChild(btn);
      });
    }

    function renderDialogue() {
      dialogueEl.innerHTML = `
        <div class="bubble lead">
          <span class="speaker">主管</span>
          ${currentAgent.lead}
        </div>
        ${currentAgent.replies.map(text => `
          <div class="bubble agent">
            <span class="speaker">${currentAgent.name}</span>
            ${text}
          </div>
        `).join("")}
      `;
      dialogueEl.scrollTop = dialogueEl.scrollHeight;
    }

    function renderOutput() {
      scoreEl.textContent = currentAgent.score;
      scoreEl.style.setProperty("--score", currentAgent.score);
      maturityTitle.textContent = currentAgent.title;
      maturityCopy.textContent = currentAgent.copy;
      stepsEl.innerHTML = "";
      stepLabels.forEach(([title, copy], index) => {
        const state = index < stepProgress ? "done" : index === stepProgress ? "running" : "";
        const button = document.createElement("button");
        button.type = "button";
        button.className = `step ${state}`;
        button.innerHTML = `
          <span class="step-icon">${index < stepProgress ? "✓" : index === stepProgress ? "•" : ""}</span>
          <span><strong>${title}</strong><span>${copy}</span></span>
          <span class="state">${index < stepProgress ? "完成" : index === stepProgress ? "執行中" : "待命"}</span>
        `;
        button.addEventListener("click", () => {
          stepProgress = Math.min(index + 1, stepLabels.length - 1);
          addAgentMessage(`已聚焦「${title}」階段，正在展開相關證據與控制比對。`);
          renderOutput();
        });
        stepsEl.appendChild(button);
      });
      alertsEl.innerHTML = "";
      currentAgent.alerts.forEach(([title, copy, level], index) => {
        const alert = document.createElement("button");
        alert.type = "button";
        alert.className = `alert ${level === "warning" ? "warning" : ""} ${index === selectedAlert ? "selected" : ""}`;
        alert.innerHTML = `<strong>${title}</strong><span>${copy}</span>`;
        alert.addEventListener("click", () => {
          selectedAlert = index;
          addAgentMessage(`已選取「${title}」。我會補上風險原因、影響範圍與建議處置。`);
          renderOutput();
        });
        alertsEl.appendChild(alert);
      });
    }

    function addAgentMessage(text) {
      currentAgent.replies = [...currentAgent.replies, text].slice(-5);
      renderDialogue();
    }

    document.getElementById("composer").addEventListener("submit", event => {
      event.preventDefault();
      const input = document.getElementById("prompt");
      const value = input.value.trim();
      if (!value) return;
      const userBubble = document.createElement("div");
      userBubble.className = "bubble user";
      userBubble.textContent = value;
      dialogueEl.appendChild(userBubble);
      stepProgress = Math.min(stepProgress + 1, stepLabels.length - 1);
      currentAgent.replies = [
        ...currentAgent.replies,
        `收到。我會以「${activeTab}」格式輸出三點摘要：主要風險、立即處置、後續追蹤責任。`
      ].slice(-5);
      input.value = "";
      window.setTimeout(() => {
        renderDialogue();
        renderOutput();
      }, 220);
    });

    environmentBtn.addEventListener("click", () => {
      readonly = !readonly;
      environmentBtn.classList.toggle("off", !readonly);
      environmentBtn.setAttribute("aria-pressed", readonly ? "true" : "false");
      environmentBtn.querySelector("span:last-child").textContent = readonly ? "展示環境｜唯讀查核" : "模擬環境｜可寫入草稿";
      addAgentMessage(readonly ? "已切回唯讀查核模式，僅讀取證據並產出建議。" : "已切換為可寫入草稿模式，改善建議會先進入待審草稿。");
    });

    function render() {
      renderAgents();
      renderTabs();
      renderDialogue();
      renderOutput();
    }

    function setupResponsiveWorkspace() {
      const shell = document.querySelector(".shell");
      const main = document.querySelector("main");
      if (!shell || !main || document.querySelector(".mobile-workspace-nav")) return;

      document.body.dataset.mobileView = "chat";

      const mobileNav = document.createElement("nav");
      mobileNav.className = "mobile-workspace-nav";
      mobileNav.setAttribute("aria-label", "手機工作區切換");

      [
        ["agents", "Agent"],
        ["chat", "對話"],
        ["output", "產出"]
      ].forEach(([view, label]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `mobile-workspace-tab ${view === "chat" ? "active" : ""}`;
        button.dataset.view = view;
        button.textContent = label;
        button.addEventListener("click", () => {
          document.body.dataset.mobileView = view;
          mobileNav.querySelectorAll(".mobile-workspace-tab").forEach(tab => {
            tab.classList.toggle("active", tab.dataset.view === view);
          });
        });
        mobileNav.appendChild(button);
      });

      shell.insertBefore(mobileNav, main);
    }

    setupResponsiveWorkspace();
    render();
