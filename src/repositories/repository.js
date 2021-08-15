let _model = null;
class Repository {

    constructor({ Model }) {
        _model = Model;
    }

    create = async (entity) =>
        await _model.create(entity);

    get = async (id) =>
        await _model.findById(id);

    update = async (id, entity) =>
        await _model.findByIdAndUpdate(id, entity, { user: true });

    delete = async (id) => {
        await _model.findByIdAndDelete(id, entity, { user: true });
        return true;
    }

    getAll = async (pageSize = 6, pageNum = 1) => {
        const skips = pageSize * (pageNum - 1);
        return await _model.find().skip(skips).limit(pageSize);
    }

}

module.exports = Repository;
