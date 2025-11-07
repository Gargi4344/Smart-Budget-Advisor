from flask import Flask
from flask_cors import CORS
from routes.finance_routes import finance_blueprint

app = Flask(__name__)
CORS(app)

app.register_blueprint(finance_blueprint, url_prefix="/api/finance")

@app.route("/")
def home():
    return {"message": "Smart Budget Advisor API is running - Ongoing Development"}

if __name__ == "__main__":
    app.run(debug=True)
