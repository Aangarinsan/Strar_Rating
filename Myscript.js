const stars = document.querySelectorAll(".star");
const starContainer = document.querySelector("#star_container");
const el = document.querySelector(".rating");

const reset = () => stars.forEach((star) => {
    star.classList.remove("filled");
    star.classList.remove("filled-red");

})

stars.forEach((star)=>{
    star.addEventListener('mouseenter',(e)=>{
        reset();
        const value = star.getAttribute("data-value");
        for(let i=1;i<=Number(value);i++){
            const el = starContainer.querySelector(`:nth-child(${i})`);
            value<3?
            el.classList.add("filled-red"):el.classList.add("filled");
        }
    })
})

stars.forEach((star)=>{
    star.addEventListener('mouseleave',(e)=>{
        reset();
        const value = localStorage.getItem('value');
        for(let i=1;i<=Number(value);i++){
            const el = starContainer.querySelector(`:nth-child(${i})`);
            value<3?
            el.classList.add("filled-red"):el.classList.add("filled");
        }
    })
})

window.addEventListener("load",(e)=>{
    const value = localStorage.getItem('value');
        for(let i=1;i<=Number(value);i++){
            const el = starContainer.querySelector(`:nth-child(${i})`);
            value<3?
            el.classList.add("filled-red"):el.classList.add("filled");
        }
    el.innerText = localStorage.getItem('rating');
})

stars.forEach((star)=>{
    star.addEventListener('click',(e)=>{
        reset();
        const value = star.getAttribute("data-value");
        if(value<3){
            localStorage.setItem('rating','😔');
        }
        else if(value>3){
            localStorage.setItem('rating','😁');
        }
        else if(value==3){
            localStorage.setItem('rating','😐');
        }

        el.innerText = localStorage.getItem('rating');

        localStorage.setItem('value',Number(value));
        for(let i=1;i<=Number(value);i++){
            const el = starContainer.querySelector(`:nth-child(${i})`);
            value<3?
            el.classList.add("filled-red"):el.classList.add("filled");
        }

    })
})

const resetbtn = document.getElementById("reset_img");

resetbtn.addEventListener('click',(e)=>{
    localStorage.clear();
    el.innerText="";
    reset();
})

const submit = document.getElementById("submit_button");

submit.addEventListener('click',(e)=>{
    const value = localStorage.getItem('value');
    if(value!=null)
    alert(`You have submitted rating: ${value} 🙌`);
    else
    alert('Please select stars and then submit 🙏')
})