var btntranslate=document.querySelector('#btn-translate')
var textboxinput=document.querySelector('#input-text')
var output =document.querySelector('#output')

var serverurl= "https://api.funtranslations.com/translate/mandalorian.json"
function generateURL(textboxinput){
    return serverurl+"?"+"text="+textboxinput
}

function clickhandler()
{
    var input1=textboxinput.value;
    fetch(generateURL(input1))
        .then(response =>response.json())
        .then(json =>{
            var translatedtxt=json.contents.translated;
            output.innerText=translatedtxt; 
    })
    .catch(errorHandler)
};


function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server! try again after some time")

}

btntranslate.addEventListener("click",clickhandler)
