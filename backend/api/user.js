const bcrypt = require('bcrypt-nodejs') //para criptografar a senha do usuario

module.exports = app => {
    const obterHash = (
        password,
        callback) => {

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(
                password, 
                salt, 
                null, (err, hash) => callback(hash))
        })
    }

    const save= (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
            .insert({
                name: req.body.name.toLowerCase(), 
                email: req.body.email.toLowerCase(), 
                password})
            .then(_=> res.status(204).send())         // pra dizer q deu sucesso, mais nao tem nenhum conteudo pra ser retornado dessa requisição
            .catch(err => res.status(400).json(err))
        })
    }
    return {save}
}