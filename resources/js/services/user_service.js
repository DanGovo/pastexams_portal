import {http, httpFile} from './http_services';

export function librarianScope(){
    return http().get('/user/librarian-scope');
}

export function adminScope(){
    return http().get('/user/admin-scope');
}

export function studentScope(){
    return http().get('/user/student-scope');
}

