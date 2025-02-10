# analyze_code.py
import os

def analyze_code(project_path):
    summary = "Project contains the following files:\n"
    for root, dirs, files in os.walk(project_path):
        for file in files:
            if file.endswith('.py'):
                summary += f"- {file}\n"
    return summary
