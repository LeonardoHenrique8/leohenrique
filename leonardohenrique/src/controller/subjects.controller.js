const service = require('../service/subjects.service')

const create = (req, res) => {
    if (req.body.name && req.body.workload && req.body.teacherName) {
        service.create(req.body)
        res.status(200).send('Subject created successfully!')
    } else {
        res.status(400).send('Falha ao criar!')
    }
}

const allSubjects = (req, res) => {
    res.send(service.allSubjects())
}

const subjectsById = async(req, res, subjectId) => {
    try {
        var data = database.findIndex(subjects => subjects.id == subjectId)
        res.status(200).send(database[data])
    } catch (e) {
        res.status(400).send('Subjects not cadastred for this ID!')
    }
}

const update = (req, res) => {
    if (req.body.name && req.body.workload && req.body.teacherName) {
        const resposta = service.update(req.params.id, req.body)
        if (!resposta) {
            res.status(200).send('Subject updated successfully!')
        } else {
            res.status(400).send('Este ID não é valido!')
        }
    } else {
        res.status(400).send('Erro ao atualizar dados --- Campos inválidos!')
    }
}
  
const remove = (req, res) => {
    const resposta = service.remove(req.params.id)

    if (!resposta) {
        res.status(200).send('Subject removed successfully!')
    } else {
        res.status(400).send('Este ID não existe!')
    }

}

module.exports = {
    create,
    allSubjects,
    update,
    remove,
    subjectsById
  }