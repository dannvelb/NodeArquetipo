let _repository = null;
class Service {
    constructor({ Repository }) {
        _repository = Repository;
    }

    create = async (entity) =>
        await _repository.create(entity);

    get = async (id) => {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "id must be send";
            throw error;
        }
        const currentEntity = await _repository.get(id);
        if (!currentEntity) {
            const error = new Error();
            error.status = 404;
            error.message = "entity does not found";
            throw error;
        }
        return currentEntity;
    }

    update = async (id, entity) => {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "id must be send";
            throw error;
        }
        return await _repository.update(id, entity);

    }
    getAll = async (pageSize, pageNum) => {
        return await _repository.getAll(pageSize, pageNum);
    }
}

module.exports = Service