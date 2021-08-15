let _service = null

class Controller {

    constructor({ Service }) {
        _service = Service;
    }

    create = async (req, res) => {
        const { body } = req;
        let response = await _service.create(body);
        return res.send(response);
    }

    get = async (req, res) => {
        const { id } = req.params;
        let response = await _service.get(id);
        res.send(response);
    }

    getAll = async (req, res) => {
        const { pageSize, pageNum } = req.query;
        const users = await _service.getAll(pageSize, pageNum);
        return res.send(users);
    }

    update = async (req, res) => {
        const { body } = req;
        const { id } = req.params;
        const updatedUser = await _service.update(id, body);
        return res.send(updatedUser);
    }

    delete = async (req, res) => {
        const { userId } = req.params;
        const deletedUser = await _service.delete(userId);
        return res.send(deletedUser);
    }
}

module.exports = Controller;
