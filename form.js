var doc = document.getElementById("numberUsers");
var doc2 = document.getElementById("numberYears");

const urls= new URL(window.location.href);

doc.value=urls.searchParams.get('q').toString();
doc2.value= urls.searchParams.get('r').toString();

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

/*[...document.querySelectorAll("[class='3']")].forEach(function (btn) {
    btn.addEventListener('click', function () {
        $.get('buyingform.html', null, function (text) {
            text.getElementById("numberUsers");
            text.value = '2';
            console.log("hei");
        });


    });
});*/