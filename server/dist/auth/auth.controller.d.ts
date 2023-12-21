import { AuthService } from './auth.service';
import { loginDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    postLogin(loginDto: loginDto): Promise<void>;
}
