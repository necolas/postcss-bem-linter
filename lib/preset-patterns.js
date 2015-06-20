'use strict';

/**
 * Module exports
 */

module.exports = {
  suit: {
    componentName: /[A-Z][a-zA-Z]+/,
    componentSelectors: suitSelector,
    utilitySelectors: /^\.u(?:-[a-z][a-zA-Z0-9]+)+$/
  },
  bem: {
    componentName: /[a-z0-9]+(?:-[a-z0-9]+)*/i,
    componentSelectors: bemSelector
  }
};

/**
 * @param {String} componentName
 * @param {Object} [opts]
 * @param {String} [opts.namespace]
 * @returns {RegExp}
 */
function suitSelector(componentName, opts) {
  var ns = (opts && opts.namespace) ? opts.namespace + '-' : '';
  var OPTIONAL_PART = '(?:-[a-zA-Z0-9]+)?';
  var OPTIONAL_MODIFIER = '(?:--[a-zA-Z0-9]+)?';
  var OPTIONAL_ATTRIBUTE = '(?:\\[\\S+\\])?';
  var OPTIONAL_STATE = '(?:\\.is-[a-zA-Z0-9]+)?';
  var OPTIONAL = OPTIONAL_PART +
    OPTIONAL_MODIFIER +
    OPTIONAL_ATTRIBUTE +
    OPTIONAL_STATE;
  return new RegExp('^\\.' + ns + componentName + '\\b' + OPTIONAL + '$');
}

/**
 * @param {String} block
 * @returns {RegExp}
 */
function bemSelector(block) {
  var WORD = '[a-z0-9]+(?:-[a-z0-9]+)*';
  var element = '(?:__' + WORD + ')?';
  var modifier = '(?:_' + WORD + '){0,2}';
  return new RegExp('^\\.' + block + element + modifier + '$', 'i');
}
