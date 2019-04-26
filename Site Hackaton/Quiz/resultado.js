$(document).ready(function(){
  $("#btn").on('click', function(){
  		var confirmados = 0;
		var p1 = document.getElementsByName("p1");
		var p2 = document.getElementsByName("p2");
		var p3 = document.getElementsByName("p3");
		var p4 = document.getElementsByName("p4");
		var p5 = document.getElementsByName("p5");
		var p6 = document.getElementsByName("p6");
		var p7 = document.getElementsByName("p7");
		var nome = document.getElementById("jogador")
		if (p1[0].checked) {
			confirmados++;
		}
		if (p2[0].checked) {
			confirmados++;
		}
		if (p3[0].checked) {
			confirmados++;
		}
		if (p4[0].checked) {
			confirmados++;
		}
		if (p5[0].checked) {
			confirmados++;
		}
		if (p6[0].checked) {
			confirmados++;
		}
		if (p7[0].checked) {
			confirmados++;
		}
		if (confirmados > 3) {
			$("#ideal").css("display", "block"); 
			
		}
		else{
			$("#nideal").css("display", "block");
		}
  });
  $(".close").on('click', function() {
  	$("#ideal").css("display", "none");
  	$("#nideal").css("display", "none");
  })
});