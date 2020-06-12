
const subs = document.querySelectorAll(".sub_menu");
// const close = document.querySelector(".close-menu");

subs.forEach((sub, i) => {
    sub.addEventListener("click", function () {
        // e.preventDefault();
        sub.children[1].classList.add("active");
        // close.style.display = "block";
    });
    // close.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     const child = subs[i].children[1];
    //     const classname = child.className;
    //     const arrClass = classname.split(" ");
    //     const isActive = arrClass.some(item => item === "active")
    //     if (isActive) {
    //         subs[i].children[1].classList.remove("active");
    //     }
    //     close.style.display = "none";
    // });
});