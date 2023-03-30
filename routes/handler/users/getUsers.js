const { User } = require('../../../models')

module.exports = async (req, res) => {
    const userIds = req.query.user_ids || []
    const sqlOptions = {
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    }

    if (userIds.length) {
        sqlOptions.where = {
            id: userIds
        }
    }

    const users = await User.findAll(sqlOptions);

    if (!users) {
        return res.status(404).json({
            status: 'error',
            message: 'User data empty !!!'
        })
    }

    return res.status(400).json({
        status: 'success',
        data: users
    })
}