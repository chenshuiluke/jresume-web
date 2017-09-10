export class Utility{
    static resolve_object_string_key(path, obj) {
        console.log(path);
        let result =  path.split('.').reduce((prev, curr) =>{
            return prev ? prev[curr] : undefined
        }, obj || self);
        console.log(obj);
        console.log(result);
        return result;
    }
}