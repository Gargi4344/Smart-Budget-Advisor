from flask import Blueprint, jsonify, request
import openai

finance_blueprint = Blueprint("finance_blueprint", __name__)

# Placeholder for OpenAI integration
@finance_blueprint.route("/insights", methods=["POST"])
def generate_insights():
    user_data = request.json
    prompt = f"Based on this spending pattern: {user_data}, suggest 3 personalized budgeting tips."
    
    # Dummy response simulating OpenAI output
    return jsonify({
        "insights": [
            "Try allocating 20% of your income to a long-term savings plan.",
            "Reduce dining expenses by setting a weekly budget goal.",
            "Automate your bill payments to avoid late fees."
        ]
    })
