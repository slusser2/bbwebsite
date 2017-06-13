$('.enter').click(function(event){
  $('#agebox').addClass('active') // show
  $('#Age').change(function(event){
    $('#agebox').removeClass('active') // hide
    $('#mockbox').addClass('active') // show
$('#mockbox').on('click', function(){
     window.location = "page2.html";    
});
  })
});

$('.now').click(function(event){
    $('.denied').addClass('active')
});


/*
1-17= Do your parents know where you are, ya whipper snapper?! 

18-22= Ooh! Barely legal! 

23-29= Let’s get wriggety wrecked, son! 

30-39= Don’t you have kids to pick up from soccer? 

40-99= Grab your bifocals, and let’s get funky! 
*/
