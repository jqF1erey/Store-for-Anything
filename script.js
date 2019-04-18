var itemName=[];
var itemPrice=[];

$(".add-item").click(function(){
    var image=$(".item-image").val();
    var name=$(".item-name").val();
    var price= parseInt($(".item-price").val());
    itemName.push(name);
    itemPrice.push(price);
    $(".cart").text("Cart: "+ itemName.length +"");
    $(".product-image").append("<img=" + image + ">");
    $(".product-name").append("<p>" + name + "</p>");
    $(".product-price").append("<p>" + price + "</p>");
    var totol= 0;
    itemPrice.forEach(function(prices){
        totol=totol + parseInt(prices);
    });
    $(".total").text("Total: $"+ totol +"");
});

$(".purchase").click(function(){
    var totil= 0;
    itemPrice.forEach(function(prices){
        totil=totil + parseInt(prices);
    });
    alert("Thank you for Purchasing "+ itemName[1] +" and your other item(s). the total is $"+ totil +".");
});




