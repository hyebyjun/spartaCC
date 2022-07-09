from pymongo import MongoClient
from bs4 import BeautifulSoup
import requests
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


client = MongoClient('localhost', 27017)
db = client.dbsparta


# HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/diary', methods=['GET'])
def show_diary():
    sample_receive = request.args.get('sample_give')
    print(sample_receive)
    return jsonify({'msg': 'GET 연결 완료!'})


@app.route('/diary', methods=['POST'])
def save_diary():
    sample_receive = request.form['sample_give']
    print(sample_receive)
    return jsonify({'msg': 'POST 요청 완료!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
