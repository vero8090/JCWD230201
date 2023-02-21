const { validateToken } = require('./../lib/jwt')

module.exports = {
    tokenverify: (req, res, next) => {
        let { token } = req.body

        if (!token) {
            return res.status(401).send({
                error: true,
                message: 'Token not found',
                isData: false,
                data: null
            })
        }

        try {
            const validateTokenResult = validateToken(token)
            req.dataToken = validateTokenResult

            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({
                isError: true,
                message: 'Invalid Token',
                data: null
            })
        }
    }
}