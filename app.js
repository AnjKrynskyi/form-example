$(".form__item input").on("focus",function(){
    $(this).addClass("focus");
});

$(".form__item input").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
});

