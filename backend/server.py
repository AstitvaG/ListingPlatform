
import re
from flask import Flask, request
import json
app = Flask(__name__)

app.config["APPLICATION_ROOT"] = "/api"
  
@app.route('/api/login', methods=["POST"])
def login():
    with open("./users.json", 'r') as users_file:
        users = json.load(users_file)
        req = request.get_json(force=True)
        if(req['email'] in users and req['password'] == users[req['email']]['password']):
            return {
                "success" : True,
                "authInfo" : {
                    "name" : users[req['email']]['name'],
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
    with open("./users.json", 'r') as users_file:
        users = json.load(users_file)
    req = request.get_json(force=True)
    if(req['email'] != "" and req['password'] != "" and req["name"] != "" and req['email'] not in users):
        users[req['email']] = {
            "name" : req["name"],
            "admin" : req["admin"],
            "password" : req["password"]
        }
        with open("./users.json", 'w') as users_file:
            json.dump(users, users_file)
        return {
            "success" : True,
            "authInfo" : {
                "name" : users[req['email']]['name'],
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