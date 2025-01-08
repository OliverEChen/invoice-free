import request from "@/utils/request";

export function post(url, data){
    return request.post(url, data)
}
export function get(url, params){
    return request.get(url, {params})
}
export function uploadApi(url, data, onUploadProgress){
    return request({
        url,
        method: 'post',
        data,
        onUploadProgress, // 上传进度回调函数 onUploadProgress(ev)
    })
}