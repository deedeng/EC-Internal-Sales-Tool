var productList = ['L416010000','E5A3030000','MWL5010002','ZJNT01L000','1GMR050490','E9T5010000','57KY010000','5F5W01L000','YAG8010000','YPH7610000','RKNW01L000'];

var productQuantity = ['1','1','1','1','1','1','1','1','1','1','1'];

var i=0;

function placeOrder() {
        $(".search_input").val(productList[i]);


        $('#btnSearch').click();

        console.log('looking for' + ' ' + productList[i]);

        var addToCart = $('#product_wrapper');

        addToCart.bind('DOMNodeInserted', function (e) {

            $('.orderCount').val(productQuantity[i]);
            $('.x-button-buy').click();

        });

        console.log('Buy ' + productList[i] + "Number: " + productQuantity[i]);
    
        if (++i == productList.length) {
            return;
        }
            setTimeout(placeOrder, 1000);
    }

placeOrder();



