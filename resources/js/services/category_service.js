import {http, httpFile} from './http_services';

export function createCategory(data){
    return httpFile().post('/categories', data);
}

export function loadCategories(){
    return http().get('/categories');
}

export function deleteCategory(id){
    return http().delete(`categories/${id}`);
}

export function updateCategory(id, data){
    return httpFile().post(`categories/${id}`, data);
}
