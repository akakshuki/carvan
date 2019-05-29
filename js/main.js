$(document).ready(function(){

	$('.one-time').slick({
		speed: 1000,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
	});


	//HOANGDEPTRAI
	range();
	brand();
	product();
	function range(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {rangecar:1},
			success: function(data){
				$('#get_range').html(data);
			}
		});
	}

	function brand(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {brand:1},
			success: function(data){
				$('#get_brand').html(data);
			}
		});
	}

	function product(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {getProduct:1},
			success: function(data){
				$('#get_product').html(data);
			}
		});
	}

	// page();
	// function page(){
	// 	$.ajax({
	// 		url: 'action.php',
	// 		method: 'POST',
	// 		data: {page:1},
	// 		success: function(data){
	// 			$('#get_product').html(data);
	// 		}
	// 	})
	// }

	$('body').delegate('.page','click',function(e){
		e.preventDefault();
		var pno=$(this).attr('page');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {getProduct:1, setPage:1, pageNumber:pno},
			success: function(data){
				$('#get_product').html(data);
				$('body').animate({scrollTop:0},500);
			}
		});
	});

	$("body").delegate(".rangecar","click",function(event){
		event.preventDefault();
		var IDR=$(this).attr('IDR');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {get_selected_range:1, id:IDR},
			success: function(data){
				$('#get_product').html(data);
			}
		});
	});
	
	$("body").delegate(".brand","click",function(event){
		event.preventDefault();
		var IDB=$(this).attr('IDB');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {get_selected_brand:1, id:IDB},
			success: function(data){
				$('#get_product').html(data);
			}
		});
	});

	$('body').delegate('.pagebrand','click',function(e){
		e.preventDefault();
		var bno=$(this).attr('pagebrand');
		var IDB=$(this).attr('IDB');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {get_selected_brand:1, setPage_brand:1, pageNumber_brand:bno,id:IDB},
			success: function(data){
				$('#get_product').html(data);
			}
		});
	});
	$('body').delegate('.pagerange','click',function(e){
		e.preventDefault();
		var rno=$(this).attr('pagerange');
		var IDR=$(this).attr('IDR');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {get_selected_range:1, setPage_range:1, pageNumber_range:rno,id:IDR},
			success: function(data){
				$('#get_product').html(data);
			}
		});
	});

	$("body").delegate(".detail","click",function(event){
		event.preventDefault();
		var IDC=$(this).attr('IDC');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {detail_car:1, id:IDC},
			success: function(data){
				$('#get_product').html(data);
			}
		});
	});

	typecars();
	topcars();
	menubrand();
	menurange();
	function typecars(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {type_body:1},
			success: function(data){
				$('#get_type').html(data);
			}
		});
	}
	function topcars(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {top_cars:1},
			success: function(data){
				$('#get_top').html(data);
			}
		});
	}
	function menubrand(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {menu_brand:1},
			success: function(data){
				$('#get_menu_brand').html(data);
			}
		});
	}
	function menurange(){
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {menu_range:1},
			success: function(data){
				$('#get_menu_range').html(data);
			}
		});
	}
	

	$('body').delegate('.imageproduct','click',function(event){
		event.preventDefault();
		var IDC=$(this).attr('IDC');
		$.ajax({
			url: 'action.php',
			method: 'POST',
			data: {quick_detail:1,id:IDC},
			success: function(data){
				$('#pro_content').html(data);
				$('#quickcar').modal('show');
			}
		});
	});

	$('body').delegate('.buy','click',function(event){
		event.preventDefault();
		var IDC = $(this).attr('IDC');
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {BuyProd:1,IDCar:IDC},
			success: function(data){
				$('#dynamic_buy').html(data);
				$('#prod_buy').modal('show');
			}
		});
	});
	
	$('body').delegate('.submitcar','click',function(event){
        event.preventDefault();
        var IDC = $(this).attr('IDC');
        var name = $('#NameCus').val();
        var phone = $('#PhoneCus').val();
        var address = $('#AddressCus').val();
        var email = $('#EmailCus').val();
        var daycaft = $('#DayCaft').val();
        if ( name == '' && phone == ''){
			$("#displaysubmit").html("Please enter your name and phonenumber");
		}
        $.ajax({
            url: "action.php",
			method: "POST",
            data: {submituser:1,NameCus:name,PhoneCus:phone,AddressCus:address,EmailCus:email,IDC:IDC,DayCaft:daycaft},
            cache:false,
			success: function(data){
				
				$('#submitmsg').html(data);
				$('#submitmsg').fadeIn(3000).fadeOut(3000).fadeIn(3000).fadeOut(3000);
				
			}
        });
    
	});
	
	$('body').delegate('#get_cart','click',function(e){
		e.preventDefault();
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {cart:1},
			success: function(data){
				$('#get_product').html(data);
			
				
			}
		});
	});
	$('body').delegate('.checkcart','click',function(){
		var Check = $('#check').val();
		if( Check == ''){
			$('#checkmsg').html('Please Enter Form');
		}
		$.ajax({
			url: "action.php",
			method: "POST",
			data: {cart:1,check_cart:1,CheckCart:Check},
			
			success: function(data){
				$('#get_product').html(data);
			}
		});
	});
	
});