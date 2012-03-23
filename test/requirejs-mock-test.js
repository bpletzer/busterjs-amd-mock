buster.testCase("requirejs-mock", {
	setUp: function(){
		this.func = function(){
			return true;
		};
	},
	"require, a function gets called once": function(){
		var spy = sinon.spy();
		require(spy);
		assert.calledOnce(spy);
	},
	
	"define, only a function as argument": function(){
		var spy = sinon.spy();
		define(spy);
		assert.calledOnce(spy);
	},
	
	"define a named module": function(){
		var spy = sinon.spy();
		define('module', spy);
		assert.calledOnce(spy);
	},
	
	"require defined modules": function(){
		define('module', this.func);
		define('module2', this.func);
		require(['module', 'module2'], function(ret, sec){
			assert.equals(ret, true);
			assert.equals(sec, true);
		});
	},
	
	"require a function and pass its return value": function(){
		assert.equals(require(this.func), true);
	},
	
	"define a module with dependencies": function(){
		define('module', this.func);
		define('module2', this.func);
		
		define(['module', 'module2'], function(ret, sec){
			assert.equals(ret, true);
			assert.equals(sec, true);
		});
	}
});