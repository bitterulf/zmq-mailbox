const mailin = require('mailin');
const zmq = require('zmq');
const sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:'+process.argv[2]);

mailin.start({
    port: 25,
    disableWebhook: true
});

mailin.on('message', function (connection, data, content) {
    sock.send([data.headers.to, data]);
});
