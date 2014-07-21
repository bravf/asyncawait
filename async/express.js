﻿var oldBuilder = require('./cps');

var newBuilder = oldBuilder.mod({
    name: 'express',
    type: null,
    overrideProtocol: function (cps, options) {
        return ({
            return: function (ctx, result) {
                if (result === 'next')
                    return cps.return(ctx, null);
                if (result === 'route')
                    return cps.throw(ctx, 'route');
                if (!!result)
                    return cps.throw(ctx, new Error('unexpected return value: ' + result));
            }
        });
    }
});
module.exports = newBuilder;
//# sourceMappingURL=express.js.map
