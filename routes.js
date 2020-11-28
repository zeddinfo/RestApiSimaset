'use strict';

const { json } = require('body-parser');

module.exports = (app) => {
    let jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/asset')
        .get(jsonku.asset);

    app.route('/asset/:id')
        .get(jsonku.detailAsset);
}