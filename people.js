var people =(function(){
	
	var people = ['irfan','gg'];
	
	//cache dom
	var $el = $("#peopleModule");
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $el.find('#people-template').html();
	
	//bind events
	$button.on('click',addPerson);
	$ul.delegate('i.del','click',deletePerson);
	
	render();
	
	function render(){
		$ul.html(Mustache.render(template,{people:people}));
		events.emit("peopleChanged", people);
	}
	
	function addPerson(value){
		var name = typeof value === "string" ? value : $input.val();
		people.push(name);
		render();
		$input.val('');
	}
	
	function deletePerson(event){
		var i;
		if(typeof event === "number"){
			i = event;
		}else{
			var $remove = $(event.target).closest('li');
			var i = $ul.find('li').index($remove);
			people.splice(i,1);
		}
		render();
	}
	
})();