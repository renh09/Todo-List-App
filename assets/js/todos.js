//check off specific todos by clicking
//
$('ul').on('click','li',function(){
  // STEP 1  use css generally
  // $(this).css('color','gray');
  // $(this).css('text-decoration','line-through');

  // STEP 2  use Object style to do it easily

  // STEP 3  chang css value here , a little messy

  //if li is gary

  // if($(this).css('color') === "rgb(128, 128, 128)"){
  //   //turn it black
  //   $(this).css({
  //     color:'black',
  //     textDecoration:'none'
  //   });
  // }
  // //else
  // else{
  //   //turn it gray
  //   $(this).css({
  //     color:'gray',
  //     textDecoration:'line-through'
  //   });
  //  }

  // STEP 4  when we use jquery toggleClass() method,we just need to new a css class called 'completed' and set it color and text-decoration
     $(this).toggleClass('completed');//just 1 line code

});

//STEP 5 click on X to delete Todo things
$('ul').on('click','span',function(event){
  // STEP 7 remove <span> X
  // $(this).remove();

  // STEP 8 remove the entire <li> ,use jquery parent() method
  //$(this).parent().remove();

  // STEP 9 use fadeout performance
   $(this).parent().fadeOut(500,function(){
    $(this).remove();//here 'this' refers to <li>, not <span>
  });

  // STEP 6 cancel event bubble---click span and cancel li-ul-div-body click event
  event.stopPropagation();
});

//STEP 10 add new todos by ENTER
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    //to ensure the input get empty when hit ENTER
    $(this).val('');
    //create a new <li> and add it to <ul> ---- by append()
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$('.fa-plus').click(function(){
  $('input').fadeToggle();
})
