$('.enter').click(function(event){
  $('.enter').hide()
  $('#agebox').addClass('active') // show
  $('#Age').change(function(event){
    $('#agebox').removeClass('active') // hide

    var insults = {
      '1-17': 'Do your parents know where you are, ya whipper snapper?!',
      '18-22': 'Ooh! Barely legal!',
      '23-29': 'Let’s get wriggety wrecked, son!',
      '30-39': 'Don\'t you have kids to pick up from soccer?',
      '40-99': 'Grab your bifocals, and let\'s get funky!'
    }

    $('#mockbox')
      .html(insults[ $('#Age').val() ]) // get the insult form the object, based on the Age key
      .addClass('active') // show
  })
})
