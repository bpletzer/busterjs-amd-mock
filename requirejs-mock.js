(function(){
	var modules = {};
	
	window.require = function(){
		var args = [].slice.call(arguments),
			argument,
			arg,
			parameters = [];
		
		while (args.length > 0) {
			argument = args.shift();
			
			if (argument instanceof Array){
				for (arg in argument){
					parameters.push(modules[argument[arg]]);
				}
			}
			
			if ("function" === typeof(argument)) {
				return argument.apply(argument, parameters);
			}
		}
	};
	
	window.define = function(){
		var args = [].slice.call(arguments),
			argument,
			name,
			parameters = [];
		
		while (args.length > 0) {
			argument = args.shift();
			
			if ("string" === typeof(argument)){
				name = argument;
			}
			
			if (argument instanceof Array){
				modules[name] = require(argument, args.shift());
			}			
			
			if ("function" === typeof(argument)) {
				modules[name] = require(argument);
			}
		}
	};
})();