from flask import Flask, request, jsonify
from code_parser import parse_code
from simulation_engine import SimulationEngine

app = Flask(__name__)

@app.route('/simulate', methods=['POST'])
def simulate():
    code = request.json['code']
    user_input = request.json['message']
    
    parsed_code = parse_code(code)
    simulation_engine = SimulationEngine(parsed_code)
    
    response = simulation_engine.simulate_interaction(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
