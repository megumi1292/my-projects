const input = document.getElementById("todoInput");
const addButton = document.getElementById("addTodoButton");
const todoDisplay = document.getElementById("todoTableBody");

const emojis = ["🐰", "🍓", "🌼", "🧁", "🌸", "🐱", "🐻", "🍒"];

addButton.addEventListener("click", function () {
  const todoText = input.value.trim();
  if (todoText) {
    const row = document.createElement("tr");

    // チェックボックス
    const checkCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkCell.appendChild(checkbox);

    // ランダム絵文字
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    // テキスト
    const textCell = document.createElement("td");
    textCell.textContent = `${emoji} ${todoText}`;

    // メモ欄
    const memoCell = document.createElement("td");
    const memoInput = document.createElement("textarea");
    memoInput.placeholder = "メモを書く...";
    memoInput.rows = 1;
    memoInput.style.width = "100%";
    memoInput.style.border = "1px solid #ccc";
    memoInput.style.borderRadius = "5px";
    memoInput.style.resize = "vertical";
    memoInput.style.padding = "4px";
    memoCell.appendChild(memoInput);

    // ゴミ箱ボタン
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.style.border = "none";
    deleteButton.style.background = "transparent";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.fontSize = "18px";

    // 削除処理
    deleteButton.addEventListener("click", function () {
      todoDisplay.removeChild(row);
    });

    // チェック時にスタンプ
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        textCell.classList.add("completed");
      } else {
        textCell.classList.remove("completed");
      }
    });

    // 要素をまとめて追加
    const deleteCell = document.createElement("td");
    deleteCell.appendChild(deleteButton);

    row.appendChild(checkCell);
    row.appendChild(textCell);
    row.appendChild(memoCell);
    row.appendChild(deleteCell);

    todoDisplay.appendChild(row);

    input.value = "";
    input.focus();
  }
});
