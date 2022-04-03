"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
let gameController = require('./controllers/controller');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use('/game', gameController);
app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, '..', 'public', 'favicon.ico')));
app.use("/public", express_1.default.static(path_1.default.join(__dirname, '..', '/public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '/views/html/index.html'));
});
app.listen(port, () => {
    console.log(`Server is running https://localhost:${port}`);
});
