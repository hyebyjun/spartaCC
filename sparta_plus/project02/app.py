from flask import Flask, render_template, request, jsonify, redirect, url_for
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

client = MongoClient(
    'mongodb+srv://test:sparta@cluster0.rf8ug.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def main():
    # DB에서 저장된 단어 찾아서 HTML에 나타내기
    return render_template("index.html")


@app.route('/detail/<keyword>')
def detail(keyword):
    # API에서 단어 뜻 찾아서 결과 보내기
    return render_template("detail.html", word=keyword)


@app.route('/api/save_word', methods=['POST'])
def save_word():
    # 단어 저장하기
    return jsonify({'result': 'success', 'msg': '단어 저장'})


@app.route('/api/delete_word', methods=['POST'])
def delete_word():
    # 단어 삭제하기
    return jsonify({'result': 'success', 'msg': '단어 삭제'})



