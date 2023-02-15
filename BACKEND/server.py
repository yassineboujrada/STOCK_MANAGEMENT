from flask import Flask,render_template,redirect,session,request,jsonify
import pymongo
from pymongo import MongoClient
from dotenv import load_dotenv
from bson.objectid import ObjectId

load_dotenv()
import os

URL_LINK = os.getenv("DB_URL")
app = Flask(__name__)
app.secret_key = "maked by yassine boujrada"

cluster = MongoClient(URL_LINK)
db = cluster["stock"]

@app.route('/prod_data')
def dash():
    l=[]
    result = db["product"].find({})
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

if __name__=="__main__":
    app.run(port="3001",debug=True)