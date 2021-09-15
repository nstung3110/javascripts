$(document).ready(function () {
    
    var keyword="";
    var endpoint = ("https://gnews.io/api/v4/search?q=example&token=1892cbfa26120c1bffa5a96988cb3fda");
    //fetch dữ liệu về json
    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            appendData(data);
        })
        //catch lỗi
        .catch(function (err) {
            console.log('error: ' + err);
        });
    $("#searchBtn").click(function(){
        keyword = "&max=10&q="+$("#keyword").val();
        endpoint2= endpoint+keyword;
        keyword = "&max=10&q=";
        fetch(endpoint2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $("#boxContent").empty();
            console.log(endpoint2);
            console.log(data);
            appendData(data);
        })
        //catch lỗi
        .catch(function (err) {
            console.log('error: ' + err);
        });
    });
    
});

function appendData(data) {
    //hiện thị data
    for (var i = 0; i < data.articles.length; i++) {
        var $item = data.articles[i];
        var $card = $("<div class='card'>");
        var $row = $("<div class='row'>");
        var $divImg = $("<div class='col-lg-3 col-md-3 col-sm-12 col-xs-12' id='divImg'>");
        $divImg.html("<a taget='_blank' href='" + $item.url + "'>"+"<img class='img-card img-responsive' src='" + $item.image + "'>"+"</a>");
        var $divContent = $("<div class='col-lg-9 col-md-9 col-sm-12 col-xs-12' id='divContent'>");
        var $title = $("<div class='title'>");
        $title.html("<a taget='_blank' href='" + $item.url + "'>" + $item.title + "</a>");
        var $date = $("<p class='date'>");
        $date.html("<small class='text-muted'>" + $item.publishedAt + "</small>");
        $description = $("<p class='description'>");
        $description.html("<p>" + $item.description + "</p>");
        $divContent.append($title);
        $divContent.append($date);
        $divContent.append($description);
        $row.append($divImg);
        $row.append($divContent);
        $card.append($row);
        //append theo ID 
        $("#boxContent").append($card);
        $("#boxContent").delay(2000).fadeIn();;
    }
};

/*$(window).on('load', function(event) {
    $('body').removeClass('preloading');
       // $('.load').delay(1000).fadeOut('fast');
    $('.loader').delay(1000).fadeOut('fast');
 });
*/