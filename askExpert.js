$(document).ready(function(){
    $('#submitForm').submit(function () {
    	if(document.getElementById("submitForm").checkValidity()){
	        $("#QuestionForm").fadeOut();
	        $("#ThankYouNote").fadeIn();
	    }
		return false;
	});
});
