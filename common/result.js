class Result {
  constructor(code = 200, message = 'success', result = {}) {
    this.code = code;
    this.message = message;
    this.result = result;
  }
  setCode (code = 200) {
    if (typeof code !== 'number') {
      return this;
    }
    this.code = code;
    return this;
  }
  setMessage (msg) {
    if (typeof meg !== 'string') {
      return this;
    }
    this.message = msg;
    return this;
  }
  setResult (res = null) {
    this.result = res;
    return this;
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