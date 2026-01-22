from fastapi import APIRouter
from models import goku
from controller import send_data
from controller import get_data

router = APIRouter()

@router.post("/send")
def send(par: goku):
    print(par)
    return send_data(par)
 
@router.get("/getdata")
def get(par1: str):
    return get_data(par1)