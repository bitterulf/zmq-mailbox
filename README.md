# ZMQ mailbox - subscribing to incoming mails

## What?

This module starts a mailserver and pumps the mails into a ZMQ queue.

## Why?

Once we subscribe to a mail address we trigger a action by email.

## How?

Install via npm:

```bash
$ npm install zmq-mailbox -g
```

## Start

To setup the queue on port 3000:

```bash
$ sudo zmq-mailbox 3000
```

Now you can subscribe with ZMQ on port 3000:

```js
const zmq = require('zmq');
const sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:'+process.argv[2]);
sock.subscribe('user@localhost');

sock.on('message', function(topic, message) {
    console.log('received a message related to:', topic.toString(), 'containing message:', message.toString);
});
```

## License

MIT
