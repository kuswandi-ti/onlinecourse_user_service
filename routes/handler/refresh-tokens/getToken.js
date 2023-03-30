const { RefreshToken } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
    const refreshToken = req.query.refresh_token || []

    const schema = {
        refresh_token: 'string'
    }

    const validate = v.validate(req.query, schema)
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const token = await RefreshToken.findOne({
        where: { token: refreshToken },
        attributes: ['id', 'token', 'user_id']
    })
    if (!token) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid token !!!'
        })
    }

    return res.status(200).json({
        status: 'success',
        data: token
    })
}