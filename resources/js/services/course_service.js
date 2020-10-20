import {http, httpFile} from './http_services';

export function createCourse(data){
    return httpFile().post('/courses', data);
}

export function loadDepartments(){
    return http().get('/get-departments');
}

export function loadCourses(){
    return http().get('/courses');
}

export function deleteCourse(id){
    return http().delete(`courses/${id}`);
}

export function updateCourse(id, data){
    return httpFile().post(`courses/${id}`, data);
}
