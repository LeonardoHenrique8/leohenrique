const database = []

const create = subjects => {
  database.push(subjects)
}

const allSubjects = () => database

const update = (subjectId, subjects) => {
    const indexSubject = database.findIndex(mySubject => mySubject.id == subjectId)

    if (indexSubject != -1) {
      database[indexSubject] = subjects
    }
}
  
const remove = subjectId => {
    const indexSubject = database.findIndex(subjects => subjects.id == subjectId)
  
    if (indexSubject != -1) {
      database.splice(indexSubject, 1)
    }
}

module.exports = {
    create,
    allSubjects,
    update,
    remove
  }