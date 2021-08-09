"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (request, response) {
        return response.json({ userID: request.userID });
    };
    return IndexController;
}());
exports.default = new IndexController();
