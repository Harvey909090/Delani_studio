$(document).ready(() => {
  //what we do toggle
  $(".show-icon").on("click", () => {
    $(".hide-content").show();
    $(".show-icon").hide();
  });

  $(".hide-content").on("click", () => {
    $(".show-icon").show();
    $(".hide-content").hide();
  });

  $(".show-icon1").on("click", () => {
    $(".hide-content1").show();
    $(".show-icon1").hide();
  });

  $(".hide-content1").on("click", () => {
    $(".show-icon1").show();
    $(".hide-content1").hide();
  });

  $(".show-icon2").on("click", () => {
    $(".hide-content2").show();
    $(".show-icon2").hide();
  });

  $(".hide-content2").on("click", () => {
    $(".show-icon2").show();
    $(".hide-content2").hide();
  });

  //portfolio hover
  $(".card").hover(function () {
    $(this).children(".project-name").fadeToggle(1000, "linear");
  });


 //feedback
  $(".contact-form").on('submit',($event)=>{
    $event.preventDefault();
    let name = $("#mce-FNAME").val();
    alert(`${name} we have received your message. Thank you for reaching out to us.`)
  });


  //disable submit button
  $('input[type="submit"]').attr('disabled', true);
    
    $('input[type="text"],input[type="email"],textarea').on('keyup',function() {
        let textareaValue = $("#mce-MESSAGE").val();
        let nameValue = $("#mce-FNAME").val();
        let emailValue = $("#mce-EMAIL").val();

        
        if(textareaValue != '' && nameValue != '' && emailValue != '') {
            $('input[type="submit"]').attr('disabled', false);
        } else {
            $('input[type="submit"]').attr('disabled', true);
        }
    });
});

const footer = document.getElementById("footer");
const datek = new Date();
const year = datek.getFullYear();
footer.innerHTML = `DELANI STUDIO ${year}`;


