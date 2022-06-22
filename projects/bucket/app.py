from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from sympy import false

app = Flask(__name__)
client = MongoClient(
    'mongodb+srv://test:sparta@cluster0.rf8ug.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/bucket", methods=["POST"])
def bucket_post():
    bucket_receive = request.form['bucket_give']

    bucket_list = list(db.buckets.find({}, {'_id': False}))
    count = len(bucket_list) + 1
    doc = {
        'num': count,
        'bucket': bucket_receive,
        'done': False
    }
    db.buckets.insert_one(doc)
    return jsonify({'msg': 'POST(기록) 연결 완료!'})


@app.route("/bucket/done", methods=["POST"])
def bucket_done():
    sample_receive = request.form['sample_give']
    print(sample_receive)
    return jsonify({'msg': 'POST(완료) 연결 완료!'})


@app.route("/bucket", methods=["GET"])
def bucket_get():
    bucket_list = list(db.buckets.find({}, {'_id': False}))
    return jsonify({'buckets': bucket_list})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
