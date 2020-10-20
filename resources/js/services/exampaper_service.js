import {http, httpFile} from './http_services';

export function createExampaper(data){
    return httpFile().post('/exampapers', data);
}

export function loadCourses(){
    return http().get('/get-courses');
}

export function loadCategories(){
    return http().get('/get-categories');
}

//download file
export function getDownload(){
    return httpFile().get('/get-download');
}

export function loadExampapers(){
    return http().get('/exampapers');
}

export function deleteExampaper(id){
    return http().delete(`exampapers/${id}`);
}

export function updateExampaper(id, data){
    return httpFile().post(`exampapers/${id}`, data);
}
