var stats = (function(){
	
	var people = 0;
	
	var $statsCount = $("#count");
	
	events.on("peopleChanged", setPeople);
	
	render();
	
	function render(){
		$statsCount.html(people);
	}
	
	function setPeople(newPeople){
		people = newPeople.length;
		render();
	}
	
	
})();