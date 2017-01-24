/**
 * Created by yantianyu on 2017/1/24.
 */

var fs = require('fs');

module.exports = {
    setStatus: function (obj) {
        fs.writeFileSync('data.json', JSON.stringify(obj), {encoding: 'utf-8'});
    },
    getStatus: function () {
        var result = fs.readFileSync('data.json', {encoding: 'utf-8'});
        return JSON.parse(result);
    }
};