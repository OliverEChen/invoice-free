import request from "@/utils/request";

export function post(url, data){
    return request.post(url, data)
}
export function get(url, params){
    return request.get(url, params)
}