const form = document.querySelector('form');
const result = document.getElementById('result');

/* store right answers in object ( key -> value pairs) */

const answer = {
    q1: "object",
    q2: "let and const",
    q3: "true false",
    q4: "undefined",
    q5: "false"
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = new FormData(form);    /* Pass the form inside the FormData *//* FormData ek object hai jo form ke saare input field ke data ko ek saath utha leta hai */
    /* FormData(form); ye form ko scan karke sirf selected(when check boxes)/filled(when text) fielsd ki name-> value pairs ek list jjaise series me store kar leta hai */

    let finalScore = 0;

    for(let [name, value] of data.entries()) {     /* us series ko ek e pair karke deta hai */
       console.log(name,value); 
       if(answer[name]==value)
        finalScore++;
    }

    const show = document.getElementById("out");
    show.textContent = `Your Score is ${finalScore} out of 5`;
    show.style.height = '40px';
    show.style.display = 'flex';
    show.style.justifyContent = 'center';
    show.style.alignItems = 'center';
    show.style.backgroundColor = "Green";
    show.style.color = 'White';
  


    form.reset();

})