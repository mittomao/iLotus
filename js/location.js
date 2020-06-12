const tabs = document.querySelectorAll(".tabs_row li");

tabs.forEach(tab=>{
    tab.addEventListener("click",function () { 
        active(tabs);
        tab.classList.add("active");
     })
});
function active(tabs) { 
    for(let i= 0 ; i < tabs.length;i++)
        {
            tabs[i].classList.remove("active");
        }
 }