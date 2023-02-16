from flask import Flask,render_template,redirect,session,request,jsonify
import pymongo
from pymongo import MongoClient
from dotenv import load_dotenv
from bson.objectid import ObjectId

load_dotenv()
import os
from flask_cors import CORS


URL_LINK = os.getenv("DB_URL")
app = Flask(__name__)
app.secret_key = "maked by yassine boujrada"

cluster = MongoClient(URL_LINK)
db = cluster["stock"]

CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/prod_data')
def dash():
    l=[]
    result = db["product"].find({}).sort("date",pymongo.DESCENDING)
    for docs in list(result):
        docs["_id"] = str(docs["_id"])
        l.append(docs)
    return jsonify(list(l))

@app.route('/order_data')
def order():
    l=[]
    result = db["orders"].find({})
    for docs in list(result):
        docs["_id"] = str(docs["_id"])
        l.append(docs)
    return jsonify(list(l))

@app.route('/costumer_data')
def costumer():
    l=[]
    result = db["costumers"].find({})
    for docs in list(result):
        docs["_id"] = str(docs["_id"])
        l.append(docs)
    return jsonify(list(l))

@app.route('/add_prod',methods=["POST"])
def add_prod():
    data = request.get_json()
    print(data) 
    db["product"].insert_one(data)
    return jsonify({"status":"ok"})

@app.route('/delete_prod/<id>',methods=["DELETE"])
def delete_prod(id):
    data = request.get_json()
    db["product"].delete_one({"_id":ObjectId(id)})
    return jsonify({"status":"ok"})

@app.route('/update_prod/<id>',methods=["PUT"])
def update_prod(id):
    data = request.get_json()
    db["product"].update_one({"_id":ObjectId(id)},{"$set":data})
    return jsonify({"status":"ok"})

if __name__=="__main__":
    app.run(port="3001",debug=True)