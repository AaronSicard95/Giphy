console.log("Let's get this party started!");
const sText = $("#searchText").get(0);
const images = $("#imageHolder").get(0);
const infoText = $("#infoT").get(0);
async function getResults(searchVal){
    let searchReturn = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    return searchReturn.data;

}
function addImage(url){
    let newImg = document.createElement('img');
    newImg.src = url;
    images.append(newImg);
}
$("form").get(0).addEventListener('submit',async function(evt){
    evt.preventDefault();
    let what= await getResults(sText.value);
    if (what.data.length==0){
        infoText.innerHTML = "Not Valid Entry (you're probably too edgy)";
    }else{
        infoText.innerHTML = "";
        let rand = (Math.floor(Math.random()*what.data.length));
        addImage(what.data[rand].images.original.url);
    }
})
$("#removeBtn").get(0).addEventListener('click',function(){
    images.innerHTML="";
})