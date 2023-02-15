from flask import Flask,render_template,redirect,session,request

app = Flask(__name__)
app.secret_key = "maked by yassine boujrada"

@app.route('/data')
def dash():
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":"jdii", 
        "programming":"python"
        }

if __name__=="__main__":
    app.run(port="3001",debug=True)