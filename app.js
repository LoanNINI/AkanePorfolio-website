const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.Hidden');
hiddenElements.forEach((el) => observer.observe(el));


function NextDownPage(){
    window.scrollTo(0,850)
}

function Information_Roblox(){
    var element = document.querySelector("#SKILLNFO");
    element.classList.replace("Skill-Info", "Skill-Info_Roblox");
}
