"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sampleController_1 = __importDefault(require("./controllers/sampleController/sampleController"));
const mongoose_1 = __importDefault(require("mongoose"));
const sampleModelController_1 = __importDefault(require("./controllers/sampleModelController"));
const body_parser_1 = __importDefault(require("body-parser"));
const tables_routes_1 = __importDefault(require("./routes/tables.routes"));
const chairs_routes_1 = __importDefault(require("./routes/chairs.routes"));
const cabinets_routes_1 = __importDefault(require("./routes/cabinets.routes"));
const app = (0, express_1.default)();
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    console.log(req.body);
    res.json({ code: res.statusCode, message: res.statusMessage, headers: res.getHeaders() });
});
app.use('/api/sample', sampleController_1.default);
app.use('/api/mongo', sampleModelController_1.default);
app.use('/api/tables', tables_routes_1.default);
app.use('/api/chairs', chairs_routes_1.default);
app.use('/api/cabinets', cabinets_routes_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect('mongodb://127.0.0.1:27017');
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
    }
    console.log('Server running on port ' + port);
}));
