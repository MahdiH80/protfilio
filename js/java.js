$(document).ready(function () {
    //loader
    //setTimeout couse if your internet is fast 
    setTimeout(() => {
    $('#loader-main').remove();
    }, 500);


    // Riminder for flashlight
    setTimeout(() => {
        $("#lighttext").addClass("text-bg-warning");
    }, 1000);
    setTimeout(() => {
        $("#lighttext").removeClass("text-bg-warning");
    }, 2000);


    //mouse position
    const cursormain = document.querySelector('.cursor-main');
    const light = document.querySelector('.flashlight');
    $(window).mousemove((e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        cursormain.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        light.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    })


    // mouse icon
    $("a , .btn , .lamp").mouseenter(() => {
        $(".round").css("border", "5px solid");
    })
    $("a , .btn , .lamp").mouseleave(() => {
        $(".round").css("border", "2px solid");
    })


    // filter
    $('.filter').on('click', function (e) {
        filter($(e.target).text());
    });

    function filter(o) {
        $('.col-md-4').each(function (i) {
            $(this).toggle($(this).find(".card-title").text().includes(o));
        });
    }
    // filter all
    $('#filter-all').on('click', () => {
        $('.col-md-4').each(function (i) {
            $(this).removeAttr('style');
        });
    });

    // change Mode and flashlight
    $("#switch").change(() => {
        if ($('#switch').is(':checked')) {
            $(":root").css({ "--bg": "rgb(248, 249, 250)", "--text": "rgb(33, 37, 41)", "--primary": "rgb(215, 12, 12)" });
            $("#light-div").hide();
            $("#img").attr('src', 'Assets/imgs/svgs/1Smiley_face_Flatline-b.png')
        }
        else {
            $(":root").css({ "--bg": "rgb(33, 37, 41)", "--text": "rgb(248, 249, 250)", "--primary": "rgb(41, 16, 157)" });
            $("#img").attr('src', 'Assets/imgs/svgs/1Smiley_face_Flatline.png')
            $("#lighttext").show();
            if ($(window).width() > 960) {
                $("#light-div").show();
            }
        }
    });

    $("#light").change(() => {
        if ($('#light').is(':checked')) {
            $(":root").css({ "--text": "rgb(33, 37, 41)" });
            $(".flashlight").show();
        }
        else {
            $(":root").css({ "--text": "rgb(248, 249, 250)" });
            $(".flashlight").hide();
        }
    })


    // sidebar
    $(".hoverable").on("mouseenter", function () {
        $(this).addClass("hover-list");
    });
    $(".hoverable").on("mouseleave", function () {
        setTimeout(() => {
            $(this).removeClass("hover-list");
        }, 200);
    });


    // other
    $('.main').scroll(() => {
        // keys
        if ($(".main").scrollTop() <= 250) {
            $(".hoverable").removeClass("active")
            $(".info").addClass("active");
        }
        else if ($(".main").scrollTop() <= 500) {
            $(".hoverable").removeClass("active")
            $(".ability").addClass("active");
        }
        else if ($(".main").scrollTop() <= 1200) {
            $(".hoverable").removeClass("active")
            $(".gallery").addClass("active");
        } else {
            $(".hoverable").removeClass("active")
            $(".contact").addClass("active");
        }
        // gear
        $("#gear").css({ "transform": `rotate(${$(".main").scrollTop() / 5}deg)` })
        $("#gear1").css({ "transform": `rotate(-${$(".main").scrollTop() / 5 - 20}deg)` })
    });

    $(window).scroll(() => {
        $("#gear").css({ "transform": `rotate(${$(window).scrollTop() / 5}deg)` })
    });




})
