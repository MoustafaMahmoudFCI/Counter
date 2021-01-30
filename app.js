let count = 0;

const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        let styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            counter.style.color = 'green';
        }
        if (count < 0) {
            counter.style.color = 'tomato';
        }
        if (count === 0) {
            counter.style.color = '#222';
        }
        counter.textContent = count;
    });
});