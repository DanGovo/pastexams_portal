import {http, httpFile} from './http_services';

export function createFaculty(data){
    return httpFile().post('/faculties', data);
}

export function loadFaculties(){
    return http().get('/faculties');
}

export function deleteFaculty(id){
    return http().delete(`faculties/${id}`);
}

export function updateFaculty(id, data){
    return httpFile().post(`faculties/${id}`, data);
}
