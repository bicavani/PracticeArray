let array = Array();
let i = 0;
function addItem() {
    array[i] = document.getElementById('inputItem').value;
    alert('Item: '+ array[i]+ ' Added at index '+ i);
    i++;
    document.getElementById('inputItem').value = "";
}
function displayItem() {
    let e= "<hr>";
    for (let j= 0; j< array.length; j++){
        e= e+ "Item "+ j+ " = "+ array[j]+ "<br>";
    }
    document.getElementById('showArray').innerHTML = e;

}