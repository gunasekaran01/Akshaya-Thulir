from database import collection
from models import goku

def send_data(par: goku):
    print(par)

    data = {
        "name": par.name,
        "age":par.age
    }

    collection.insert_one(data)

    return {
        "message": "welcome to working",
        "recived_name": par.name
    }
def get_data(par: str):
    users = []
    cursor = collection.find({"name": par})

    for user in cursor:
        user["_id"] = str(user["_id"])
        users.append(user)

    return users