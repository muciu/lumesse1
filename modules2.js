var SimpleModule = (function(){
	var counter = 0;
	return {
		increment: function() {
			counter++;
			return this.getCounter();
		},
		getCounter: function() {
			return counter;
		}
	};
}());