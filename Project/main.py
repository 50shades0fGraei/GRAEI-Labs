# main.py
from analyze_code import analyze_code
from generate_text import generate_text

def main():
    project_path = input("Enter the path to your project: ")
    code_summary = analyze_code(project_path)
    explanation_text = generate_text(code_summary)
    print(explanation_text)

if __name__ == '__main__':
    main()
