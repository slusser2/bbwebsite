$('.enter').click(function(event){
  $('#agebox').addClass('active') // show
  $('#Age').change(function(event){
    console.log('hi Anna!')
    $('#agebox').removeClass('active') // hide
    $('#mockbox').addClass('active') // show
  })
})
