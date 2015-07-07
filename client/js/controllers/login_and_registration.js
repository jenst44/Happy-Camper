app.controller('LoginController', function(LoginFactory, $location, $rootScope) {
	// this becomes that so that we have access to it in the functions
	var that = this;
	that.messages = [];
	console.log('Here');
	that.registeruser = function() {
		that.messages = [];
		that.register_info;
		if(!that.register_info){
			that.messages.push("No fields may be left blank");
		}
		else if(!that.register_info.email || !that.register_info.user_name || !that.register_info.password || !that.register_info.confirm_password) {
			that.messages.push("No fields may be left blank");
		}
		else if(that.register_info) {
			if(that.register_info.password.length <= 6) {
				that.messages.push('Password must be at least 6 characters long');
			}
			else if(that.register_info.password !== that.register_info.confirm_password) {
				that.messages.push("Passwords don't match");
			}
			else if(that.register_info.user_name.length <= 4) {
				that.messages.push('User Name must be at least 4 characters long');
			}
			else {
				that.register_info.created_at = Date.now();
				that.register_info.updated_at = Date.now();
				LoginFactory.addUser(that.register_info, function(data) {
					console.log(data.message);
					that.messages.push(data.message);
					that.register_info = {};
				});
			}
		}
	};
	that.loginuser = function() {
		that.loginmessage = [];
		that.login_info;
		if(!that.login_info){
			that.loginmessage.push("No fields may be left blank");
		}
		else if (!that.login_info.password || !that.login_info.user_name) {
			that.loginmessage.push("No fields may be left blank");
		}
		else {
			LoginFactory.checkLogin(that.login_info, function(data) {
				that.loginmessage.push(data.message);
				that.login_info = {};
				if(data.message == "Login Successful"){
					$rootScope.user = data;
				}
			});
		}
	};
});