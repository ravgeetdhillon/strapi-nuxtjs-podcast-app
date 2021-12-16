'use strict';

/**
 * podcast service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::podcast.podcast');
