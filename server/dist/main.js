"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { rawBody: true });
    app.enableCors({
        origin: [process.env.BASE_URL, '*'], credentials: true
    });
    app.use(cookieParser());
    app.useBodyParser('json', { limit: '100mb' });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(multer({ dest: './uploads' }).single('image'));
    await app.listen(7000);
}
bootstrap();
//# sourceMappingURL=main.js.map