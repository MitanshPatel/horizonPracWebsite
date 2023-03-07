bs()

function bs(){
    $(".btn").click(function(){
        $("hr").addClass("newclr");
        toggle();
    })
}

function toggle(){
    $(".btn").click(function(){
        $("hr").removeClass("newclr");
        bs();
    })
    
}