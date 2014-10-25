
var IGELS = {};
var timer;

IGELS.convert = function() {
	clearTimeout(timer);
	timer = setTimeout(IGELS.convertInstantly, 600);
	return true;
};

IGELS.convertInstantly = function() {
	var source = $("#input").val();
	var htmlText = IGELS.convertToHtml(source);
	$("#content").html(htmlText);
	$("#input").autosize();
	return true;
};

IGELS.convertToHtml = function(content) {
	var options = Opal.hash2([], {});
	var html = Opal.Asciidoctor.$convert(content, options);
	return html;
};