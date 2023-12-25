// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop> 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// <!-- Google Sheet -->

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxo2tbXOsp5nUh4Elwj_3LKFOpMJhzbAISLMYD-F38NVlzJ7w_qkFxfSLUUvlnLEgp8/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(() =>{
          msg.innerHTML = ''
        }, 5000)
        form.reset();
      } )
      .catch(error => console.error('Error!', error.message))
  })
