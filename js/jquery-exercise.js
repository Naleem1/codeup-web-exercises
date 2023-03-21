// window.onload(alert("Window Loaded"))

// let element = $('#1');
// let element1 = $('#2');
// alert(element.html());
// $('.codeup').css('border','1px solid red');
// $('h1, p, li').css('background-color', 'grey');
// let element3 = $('h1')
// alert(element3.html())

$('h1').click(function(){
    $(this).css('background-color', 'red')
})

$('p').dblclick(function() {
    $(this).css('font-size', '18px')
})

$('li').hover(function(){
    $(this).css('color', 'red')
},
    function(){
        $(this).css('color', 'black')
    }

)