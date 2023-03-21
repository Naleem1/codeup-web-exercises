// $('button').on('click', function(){
//    $('dd').toggleClass('invisible');
// });

$(document).on('click', 'dt', function(){
    $(this).toggleClass('highlight');
    $(this).next().fadeToggle();
});

$(document).on('click','#switch', function (){
    $('.last').toggleClass('highlight')
})

$('h3').on('click',function(){
    let $nextUl = $(this).next()
    $nextUl.find('li').css('font-weight', 'bold')
})

$('li').on('click', function(){
    let $parentUl = $(this).parent();
    $parentUl.find('li').first().css('background-color','blue')
})