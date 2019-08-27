const utils = {}
utils.getParamPath = function() {
    return new URLSearchParams(window.location.search).get('path')
  }
utils.genParamPath = function(name) {
    return `?path=${name}`
  }
utils.isValidPath = function(name) {
    return Object.values(paths).includes(name)
  }