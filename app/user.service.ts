import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    
    constructor() { }

    user = {
        isAuthorized: true
    }

}