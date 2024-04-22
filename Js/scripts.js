
document.addEventListener('DOMContentLoaded',function() {
   
    $(".contact-button__setup").click(function() {
        $(".form").slideToggle();
    });

    let infoForm = document.querySelector(".form__inputs");
    infoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formUser = infoForm.querySelector(".form-name").value;
    formEmail = infoForm.querySelector(".form-email").value;
    formTel = infoForm.querySelector(".form-tel").value;
    console.log(formUser,formEmail, formTel);
   });

   hiddenButton = document.querySelectorAll(".hidden-button");
   hiddenHeader = document.querySelector(".hidden")
   hiddenButton.forEach(elem => {
        elem.addEventListener("click", () => {
            console.log("hola");
            hiddenHeader.classList.toggle("show");
        });
    });

    mainModal = document.querySelector(".container-modal")
    titlesA = document.querySelectorAll('.cards__title-content');
    modal = document.querySelector(".modal");
    hideModal = document.querySelector(".hide-modal");
    header = document.querySelector(".header");
    cardsImg = document.querySelectorAll(".cards__img");
    aboutImg =  document.querySelectorAll(".about__img");
  
    setTimeout(()=> {
        mainModal.style.backgroundColor = "rgba(0,0,0,.9)";
        modal.style.display = "block";
        header.style.opacity = ".1";
        aboutImg.forEach( (elem) =>{
            elem.style.opacity = ".1";
        });
        cardsImg.forEach( (elem) =>{
            elem.style.opacity = ".1";
        });
        titlesA.forEach( (elem) =>{
            elem.style.opacity = ".1";
        });

        
    }, 1000); 

    hideModal.addEventListener("click", ()=> {
        modal.style.display = "none";
        mainModal.style.backgroundColor = "rgb(226, 226, 226)";
        header.style.opacity = "1";
        aboutImg.forEach( (elem) =>{
            elem.style.opacity = "1";
        });
        cardsImg.forEach( (elem) =>{
            elem.style.opacity = "1";
        });
        titlesA.forEach( (elem) =>{
            elem.style.opacity = "1";
        });
       
    });
    
});