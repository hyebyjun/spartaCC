from pymongo import MongoClient

client = MongoClient(
    'mongodb+srv://test:sparta@cluster0.rf8ug.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

doc = {
    'name': 'bob',
    'age': 27
}
db.users.insert_one(doc)
