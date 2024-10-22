from flask import Blueprint, jsonify, request
from services import skin_assessment_service, daily_routine_service, product_service

api_bp = Blueprint('api', __name__)

@api_bp.route('/skin-assessment', methods=['POST'])
def skin_assessment():
    data = request.json
    result = skin_assessment_service.process_assessment(data)
    return jsonify(result)

@api_bp.route('/daily-routine', methods=['GET'])
def daily_routine():
    routine = daily_routine_service.get_daily_routine()
    return jsonify(routine)

@api_bp.route('/products', methods=['GET'])
def products():
    products = product_service.get_products()
    return jsonify(products)