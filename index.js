const crypto = require('crypto');
const assert = require('assert');

// TODO: encrypt 和 decrypt 可以合并
module.exports = {
    encrypt: (params) => {
        // TODO: 参数检查
        let {type, key, iv, str} = params;

        let autoPadding = params.autoPadding || true;
        let charset = params.charset || 'uft8';
        let format = params.format || 'base64';


        let cipher = crypto.createCipheriv(type, Buffer.from(key), Buffer.from(iv));
        cipher.setAutoPadding(autoPadding);

        let ciph = cipher.update(str, charset, format);
        ciph += cipher.final(format);

        return ciph;
    },
    decrypt: (params) => {
        // TODO: 参数检查
        let {type, key, iv, str} = params;

        let autoPadding = params.autoPadding || true;
        let charset = params.charset || 'base64';
        let format = params.format || 'utf8';

        let decipher = crypto.createDecipheriv(type, Buffer.from(key), Buffer.from(iv));
        decipher.setAutoPadding(autoPadding);

        let deciph = decipher.update(str, charset, format);
        deciph += decipher.final(format);

        return deciph;
    }
};