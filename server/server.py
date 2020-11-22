import platform
import endpoint

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route(endpoint.OS_NAME, methods=['GET'])
def get_system():
    return dict(osName=platform.system())

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080)