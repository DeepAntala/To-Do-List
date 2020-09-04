

document.addEventListener('DOMContentLoaded', getList);

$("ul").on("click", "li", function(){
	$(this).toggleClass("checkout");
});

$("button").on("click",function(event){
	event.preventDefault();
	var enterText=$("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + enterText + "</li>");	
		saveNewTodos(enterText);
});

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(400, function(){
	$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var enterText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + enterText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
	$("button").fadeToggle();
})

function saveNewTodos(item){
	let items;
		if(localStorage.getItem('items') === null){
			items = [];
		}
		else{
			items = JSON.parse(localStorage.getItem('items'));
		}
		items.push(item);
		localStorage.setItem('items', JSON.stringify(items));

		
}

function getList(){
	let items;
		if(localStorage.getItem('items') === null){
			items = [];
		}
		else{
			items = JSON.parse(localStorage.getItem('items'));
		}
	items.forEach(function(item){
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + item + "</li>");
	})

}

function deleteItem(){
	let items;
		if(localStorage.getItem('items') === null){
			items = [];
		}
		else{
			items = JSON.parse(localStorage.getItem('items'));
		}
		$(this).pop();
		localStorage.setItem('items', JSON.stringify(items));

}
