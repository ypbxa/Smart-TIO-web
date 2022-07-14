/*$("3").each(function () {
    var temp = "a";
    var mySelect = document.getElementById('3');
    alert("a");

    for (var i, j = 0; i = mySelect.options[j]; j++) {
        if (i.value == temp) {
            mySelect.selectedIndex = j;
            break;
        }
    }
    function id(btn) {
        alert(btn.id);
    }
}*/

[...document.querySelectorAll("[class='3']")].forEach(function (btn) {
    btn.addEventListener('click', function () {
        $.get('buyingform.html', null, function (text) {
            text.getElementById("numberUsers");
            text.value = '2';
            console.log("hei");
        });


    });
});