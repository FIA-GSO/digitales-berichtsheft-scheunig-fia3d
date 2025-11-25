import logging
import os
from json import loads, dumps
from flask import Flask, request, render_template, url_for
LOG_LEVEL = logging.DEBUG
logging.basicConfig(level=LOG_LEVEL)

logging.debug(os.getcwd())

app = Flask(__name__)
app.config["DEBUG"] = LOG_LEVEL == logging.DEBUG

@app.route('/')
def index() -> str:
  return render_template('index.html')

@app.route('/azubi')
def azubi() -> str:
  return render_template('azubi/index.html')

@app.route('/azubi/new-entry.html', methods=['GET', 'POST'])
def azubi_new_entry() -> str:
  if request.method == 'POST':
    ...
  else:
    return render_template('azubi/new-entry.html')

@app.route('/ausbilder')
def ausbilder() -> str:
  return render_template('ausbilder/index.html')

@app.route('/lehrer')
def lehrer() -> str:
  return render_template('lehrer/index.html')




def main():
  app.run(port=5000, debug=LOG_LEVEL == logging.DEBUG)


if __name__ == '__main__':
  main()
