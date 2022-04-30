
import re
from flask import Flask, request
import json
app = Flask(__name__)

app.config["APPLICATION_ROOT"] = "/api"

users_file = open("./users.json", 'r')
users = json.load(users_file)
  
@app.route('/api/login', methods=["POST"])
def login():
    req = request.get_json(force=True)
    if(req['email'] in users and req['password'] == users[req['email']]['password']):
        return {
            "success" : True,
            "authInfo" : {
                "username" : users[req['email']]['name'],
                "email" : req['email'],
                "admin" : users[req['email']]['admin']
            }
        }
    else:
        return {
            "success" : False
        }

@app.route('/api/register', methods=["POST"])
def register():
    req = request.get_json(force=True)
    if(req['email'] != "" and req['password'] != "" and req["name"] != "" and req['email'] not in users):
        users[req['email']] = {
            "username" : req["username"],
            "admin" : req["admin"],
            "password" : req["password"]
        }
        json.dump(users, users_file)
        return {
            "success" : True,
            "authInfo" : {
                "username" : users[req['email']]['name'],
                "email" : req['email'],
                "admin" : users[req['email']]['admin']
            }
        }
    else:
        return {
            "success" : False
        }

@app.route('/api/tt')
def hi():
    return "HI"


# main driver function
if __name__ == '__main__':
    app.run(port=3500, debug=True)