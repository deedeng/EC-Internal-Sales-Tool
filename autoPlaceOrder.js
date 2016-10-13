var productList = ['L416010000','E5A3030000','MWL5010002','ZJNT01L000'];

var productQuantity = ['1','1','1','1'];

for (var i=0; i<productList.length; i++) {

function placeOrder(){
$(".search_input").val(productList[i]); 


$('#btnSearch').click(); 

console.log('looking for' + ' '+ productList[i]);

var addToCart = $('#product_wrapper');

addToCart.bind('DOMNodeInserted', function(e) {

$('.orderCount').val(productQuantity[i]);
$('.x-button-buy').click();

});

console.log('Buy '+ productList[i] + "Number: " + productQuantity[i]);

}

}