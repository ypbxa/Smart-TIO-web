$(".io-toggler").each(function () {
    console.log("I've been called start");

    var io = $(this).data("io"),
        $opts = $(this).find(".io-options"),
        $clon = $opts.clone(),
        $span = $clon.find("span"),
        width = $opts.width() / 2;

    $(this).append($clon);

    function swap(x) {
        console.log("I've been called swap");

        $clon.stop().animate({ left: x }, 150);
        $span.stop().animate({ left: -x }, 150);
        $(this).data("io", x === 0 ? 0 : 1);
        if ($(this).data("io") == "0") {
            document.getElementById("text").style.display = "block";
            document.getElementById("text2").style.display = "none";
        } else {
            document.getElementById("text").style.display = "none";
            document.getElementById("text2").style.display = "block";
        }

    }

    $clon.draggable({
        axis: "x",
        containment: "parent",
        drag: function (evt, ui) {
            $span.css({ left: -ui.position.left });
        },
        stop: function (evt, ui) {
            swap(ui.position.left < width / 2 ? 0 : width);
        }
    });

    $opts.on("click", function () {
        swap($clon.position().left > 0 ? 0 : width);
    });
    // Read and set initial predefined data-io
    if (!!io) $opts.trigger("click");
    // on submit read $(".io-toggler").data("io") value
});


