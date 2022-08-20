

$(document).ready(function () {
	if($('#ttm-quote-form').length){
		$('#ttm-quote-form').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				sub: {
					required: true
				},
				message: {
					required: true
				}
				
			},
			messages: {
				captcha: "Correct captcha is required. Click the captcha to generate a new one"
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$('.form-response').text("").append(response);
					$("input[type=text], textarea").val("");
					$("select").prop('selectedIndex',0);
					$('input[type="checkbox"]').attr('checked', false);
				});
				return false;
				
			}
		});
	}
	
	if($('#ttm-quote-forms').length){
		$('#ttm-quote-forms').validate({ // initialize the plugin
			rules: {
				name: {
					required: true
				},
				
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				company: {
					required: true
				},
				website: {
					required: true
				},
				budget: {
					required: true
				},
				
				
				message: {
					required: true
				},
				'services[]': {
				  required: true,
				 
				}
				
			},
			messages: {
				captcha: "Correct captcha is required. Click the captcha to generate a new one"
			},
			submitHandler: function (form) { 
				// sending value with ajax request
				$.post($(form).attr('action'), $(form).serialize(), function (response) {
					$('.form-response').text("").append(response);
					$("input[type=text], textarea").val("");
					$("select").prop('selectedIndex',0);
					$('input[type="checkbox"]').attr('checked', false);
				});
				return false;
				
			}
		});
	}
	
    setNavigation();
    
    
    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);
    
        $(".nav a").each(function () {
            var href = $(this).attr('href');
            if (path.substring(0, href.length) === href) {
                $(this).closest('li').addClass('active');
            }
        });
    }
	
	});


