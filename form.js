var doc = document.getElementById("numberUsers");
var doc2 = document.getElementById("numberYears");

const urls= new URL(window.location.href);

doc.value=urls.searchParams.get('q').toString();
doc2.value= urls.searchParams.get('r').toString();
