from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

client = MongoClient(
    'mongodb+srv://test:sparta@cluster0.rf8ug.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/homework", methods=["POST"])
def homework_post():
    nickname = request.form['nickname_give']
    comment = request.form['comment_give']
    doc = {
        'nickname': nickname,
        'comment': comment
    }
    db.visitors.insert_one(doc)
    return jsonify({'msg': '방명록 저장 완료'})


@app.route("/homework", methods=["GET"])
def homework_get():
    visitors = list(db.visitors.find({}, {'_id': False}))
    return jsonify({'visitors': visitors})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)