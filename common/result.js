class Result {
  constructor(code = 200, message = 'success', result = {}) {
    this.code = code;
    this.message = message;
    this.result = result;
  }

  notFound(message = 'failed') {
    this.code = 404;
    this.message = message;
    this.result = null;
    return this;
  }

  forbid(message = 'No authority!') {
    this.code = 403;
    this.message = message;
    this.result = null;
    return this;
  }
}

module.exports = Result;