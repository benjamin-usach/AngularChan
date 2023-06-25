from flask import Flask
from requests import get
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return get('https://a.4cdn.org/boards.json').content

