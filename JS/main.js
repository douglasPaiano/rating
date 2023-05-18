const submit = document.getElementById('submit__button');
const rating = document.getElementById('star__')
const select = document.getElementById('rating__select-id')

var btnValue;

addEventListener('click',function(event){ 
    document.querySelectorAll('#btn');
    btnValue = event.target.value;
    console.log(btnValue)        
})

submit.addEventListener('click', function(){    
    select.style.display = "none";
    rating.innerHTML = 
    `   <div class="star card" id="star__state">
            <img class="thanks" src="./images/illustration-thank-you.svg" alt="Illustration">
            <h2 class="star__rating">You selected ${btnValue} out of 5</h2>
            <h1 class="star__thanks">Thank you!</h1>
            <p class="star__paragraph">We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
        </div> 
    `    
    

})
   

