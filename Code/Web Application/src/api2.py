import flask
app = flask.Flask(__name__, template_folder='templates')


@app.route('/')
def main():
    return(flask.render_template('apple.html'))


app.run()
