$(document).ready(function () {
    $("#button").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
        $("#item").val("");
    });

    $(document).on("click", ".item", function () {
        $(this).css({
            "text-decoration": "line-through",
            color: "gray"
        });
        playDelete();
    });

    $(document).on("dblclick", ".item", function () {
        $(this).remove();
        playDelete();
    });

	});

function playDelete() {
    $('#delete-sound')[0].volume = 0.5;
    $('#delete-sound')[0].load();
    $('#delete-sound')[0].play();

	}

