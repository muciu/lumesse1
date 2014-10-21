var SimpleModule = (function(){
	var counter = 0;
	function _increment() {
		counter++;
		return _getCounter();
	}
	function _getCounter() {
		return counter;
	}
	
	return {
		increment: _increment,
		getCounter: _getCounter
	};
}());