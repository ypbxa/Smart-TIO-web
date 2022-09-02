const prices = {
    "(number options)users(3,5),years(1,2),module(core,core+modules)":"price",
    "311":"4550",
    "31m":"7550",
    "31mm":"9550",
    "321":"6650",
    "32m":"9650",
    "32mm":"11650",
    "511":"6750",
    "51m":"9750",
    "51mm":"11750",
    "521":"9950",
    "52m":"12950",
    "52mm":"14950",
};
const modules={
    "1":"Hypothetical extraction calculation. \n Impact demand calculation \n Export graphs and reports",
    "m":"In addition of economic results add the social, eco or both modules for more sustainable results.",
    "mm":"Provide locally relevant decisions for each of the regions.\n Reduce the spacial inequalities.",
    };
    const modules2={
        "1":"Core",
        "m":"Core + 1 Module",
        "mm":"Core + 2 Modules",
        };
const years={
    "1":"One year",
    "2":"Two years",
};

//?u=5&y=1&mod=1
function parse(first){
var doc = document.getElementById("numberUsers");
var doc2 = document.getElementById("numberYears");
var doc3 = document.getElementById("numberCore");
if (first==true){

const urls= new URL(window.location.href);

doc.value=urls.searchParams.get('u').toString();
doc2.value= urls.searchParams.get('y').toString();
doc3.value= urls.searchParams.get('mod').toString();
}else{
doc.value="3";
doc2.value="1";
doc3.value="1";
}
}

function change(){
    $('#numberUsers').change(function(){
        //$('#show_selected').val(this.value);
        window.onload=load_anotherpage(false);
      });
      $('#numberYears').change(function(){
        //$('#show_selected').val(this.value);
        window.onload=load_anotherpage(false);
      });
      $('#numberCore').change(function(){
        //$('#show_selected').val(this.value);
        window.onload=load_anotherpage(false);
      });

}

function load_anotherpage(first) {
    const urls= new URL(window.location.href);
    var pos = window.location.href.indexOf("?");

    if (first==true){
        if (pos==-1){
            if (document.getElementById("numberUsers")==null){
                console.log("a");
            }else{
                parse(false);
    
            }
        document.getElementById("dynamic").innerHTML =
            '<embed type="text/html" src="formdivided.html?p='+prices["311"]+'&y='+years["1"]+'&mod='+modules["1"]+'" width="100%" height="800" >';
        }else{ 
        const urls= new URL(window.location.href);
        const value=urls.searchParams.get('u').toString();
        const value2= value.concat(urls.searchParams.get('y').toString());
        const value3= value2.concat(urls.searchParams.get('mod').toString());
        const modval =  urls.searchParams.get('mod').toString();
        const yearval = urls.searchParams.get('y').toString();
    document.getElementById("dynamic").innerHTML =
      '<embed type="text/html" src="formdivided.html?p='+prices[value3]+'&y='+yearval+'&mod='+modval+'" width="100%" height="800" >';
    }}else{
        const value = document.getElementById("numberUsers").value.toString();
        const value2 = value.concat(document.getElementById("numberYears").value.toString());
        const value3 = value2.concat(document.getElementById("numberCore").value.toString());
        const modval =  document.getElementById("numberCore").value.toString();
        const yearval = document.getElementById("numberYears").value.toString();
        document.getElementById("dynamic").innerHTML =
        '<embed type="text/html" src="formdivided.html?p='+prices[value3]+'&y='+yearval+'&mod='+modval+'" width="100%" height="800" >';

    }
    
}