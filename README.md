# 自行查核 Agent 指揮中心

這是一個本機靜態前端專案，整理自原本的單檔 HTML 原型。

## 線上網站

GitHub Pages：<https://z134340.github.io/bank-agent-command-center-project/>

## 開啟方式

直接用瀏覽器開啟：

```
index.html
```

不需要安裝套件，也不需要啟動伺服器。

## 專案結構

- `index.html`: 頁面骨架
- `src/styles.css`: 版面與視覺樣式
- `src/app.js`: Agent、分頁、送出、環境切換與風險卡片互動
- `assets/figma-scenes/`: 可匯入 Figma 的互動場景 PNG
- `FIGMA_HANDOFF.md`: Figma Prototype hotspot 連線建議

## 已保留的互動

- 左側 Agent 卡片切換
- 中央分頁切換
- 右上環境模式切換
- 底部送出主管追問
- 右側流程階段聚焦
- 右側風險卡片聚焦

## 響應式版面

- 桌面大螢幕：維持左側 Agent、中央對話、右側產出的三欄工作台。
- 平板與小桌面：壓縮左右欄，右側產出區移到下一列，避免中央對話過窄。
- 手機：新增頂部工作區切換，可在 Agent、對話、產出三個區域間切換。
