let btns = document.querySelectorAll(".cell");
let r = document.querySelector(".reset");
let toggleBtn = document.getElementById("toggleTheme");
let heading = document.querySelector("h1");
let isDark = false;

toggleBtn.addEventListener("click", () => {
    if (isDark) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        heading.style.color = "black";
        toggleBtn.innerText = "Dark Mode";
        isDark = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        heading.style.color = "white";
        toggleBtn.innerText = "Light Mode";
        isDark = true;
    }
});


let X = true;

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "") {
            btn.innerText = X ? "X" : "O";
            X = !X;
            checkWin();
        }
    });
});

function checkWin() {
    win.forEach((comb) => {
        let [a, b, c] = comb;
        if (btns[a].innerText !== "" && btns[a].innerText === btns[b].innerText && btns[b].innerText === btns[c].innerText) {
            alert(btns[a].innerText + " wins!");
            disable();
        }
    });
}

function disable() {
    btns.forEach(btn => btn.disabled = true);
}

r.addEventListener("click", () => {
    btns.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
    X = true;
});
