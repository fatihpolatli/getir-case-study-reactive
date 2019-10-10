import TestDAO from "../dao/TestDAO";

class TestService {

    constructor() {


    }



    findAll(postData) {

        var testDao = new TestDAO();
        return testDao.findAll(postData);
    }
}

export default TestService;