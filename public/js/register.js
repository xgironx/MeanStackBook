$(document).ready(function(){
    $('input[name=userChoice]').change(function(){
        if($('input[name=userChoice]:checked').val() == '1'){
            $('#company-person').text("Don't think more about new inovating products/services, here you can see awesome ideas, just register take a idea and start programming!");
        }
        else if($('input[name=userChoice]:checked').val() == '2'){
            $('#company-person').text("Make part of the programmers life, help him building new products with your ideas, win prizes with it, share your awesome ideas and make the life of people easyer");
        }
    });

});