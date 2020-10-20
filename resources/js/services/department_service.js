import {http, httpFile} from './http_services';

export function createDepartment(data){
    return httpFile().post('/departments', data);
}

export function loadFaculties(){
    return http().get('/get-faculties');
}

export function loadDepartments(){
    return http().get('/departments');
}

export function deleteDepartment(id){
    return http().delete(`departments/${id}`);
}

export function updateDepartment(id, data){
    return httpFile().post(`departments/${id}`, data);
}
