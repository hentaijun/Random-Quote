function getColor(){
	return '#'+('00000'+Math.random()*0x1000000<<0).toString(16).slice(-6)
}
function getQuote(){
	$.ajax({
		headers:{
			"X-Mashape-Key": "4tGm8Fh3DtmshzoLSAJb9PHOo3bop1LTXmcjsnhqeiUrmHmLtK",
      		Accept: "application/json",
     		"Content-Type": "application/x-www-form-urlencoded"
    			},
    	url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=NEKO',
    	success:function(response){
    		var r = JSON.parse(response);
    		var color = getColor();
    		$(".quote-text").animate({
    			opacity:0
    		},500,function(){
    			$(this).animate({opacity:1},500);
    			$('#text').text(r.quote);
    		});

    		$(".quote-author").animate({
    			opacity:0
    		},500,function(){
    			$(this).animate({opacity:1},500);
    			$('#author').text(r.author);
    		});

    		$("html body").animate({
    			backgroundColor:color,
    			color:color
    		},1000);
    		$(".buttton").animate({
    			backgroundColor:color
    		},1000);
    	}
	});
}
$(document).ready(function(){
	getQuote();
	$('#new-quote').on('click',getQuote);
});