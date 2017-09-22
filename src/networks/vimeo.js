'use strict';

const Promise = require('bluebird');

module.exports = class VimeoService {
  constructor(avatarService) {
    this._avatarService = avatarService;
  }

  _createErrorMessage(error, defaultMsg) {
    return error && error.message ? error.message : defaultMsg;
  }

  getAvatar(username) {
    return this._avatarService.findImage(`https://www.vimeo.com/${username}`, 'vimeo')
      .then(imageUrl => this._avatarService.getImage(imageUrl, 'vimeo'))
      .then(response => response)
      .catch(error => Promise.reject(error));
  }
};
