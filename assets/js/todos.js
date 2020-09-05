

document.addEventListener('DOMContentLoaded', getList);

$("ul").on("click", "li", function(){
	$(this).toggleClass("checkout");
});

$("button").on("click",function(event){
	event.preventDefault();
	var enterText=$("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append("<li><span class="+enterText+"><i class='fa fa-trash'></i></span>" + enterText + "</li>");
		saveNewTodos(enterText);
});


function del(e){

}

$("ul").on("click", "span", function(e){
	const item=$(this).parent()[0].lastChild.data;
	
	$(this).parent().fadeOut(400, function(){
	$(this).remove();
	});
	deleteItem(item);
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var enterText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span class="+enterText+"><i class='fa fa-trash'></i></span>" + enterText + "</li>");
		saveNewTodos(enterText);
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
	console.log(items);
	items.forEach(function(item){
		$("ul").append("<li><span class="+item+"><i class='fa fa-trash'></i></span>" + item + "</li>");
		
	})

}

function deleteItem(item){
	let items;
		if(localStorage.getItem('items') === null){
			items = [];
		}
		else{
			items = JSON.parse(localStorage.getItem('items'));
		}	
		console.log(items.indexOf(item));
		items.splice(items.indexOf(item), 1);

		localStorage.setItem('items', JSON.stringify(items));

}
