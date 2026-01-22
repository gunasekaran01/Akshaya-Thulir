from pymongo import MongoClient


MONGo_URL = "mongodb://localhost:27017"

client = MongoClient(MONGo_URL)

db = client["testdb"]
collection = db["items"]