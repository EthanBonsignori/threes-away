from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)


def handle_send_socketevent(data, options):
    broadcast = options.broadcast
    SocketIO.send(self=SocketIO, data=data, broadcast=broadcast)

@socketio.on('connection')
def handle_connection(user):
    print(user + 'has connected...')


@socketio.on('message')
def handle_message(message):
    print('{message}')
    handle_send_socketevent(message, { "broadcast": True })


if __name__ == '__main__':
    socketio.run(app)
