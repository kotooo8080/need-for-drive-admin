export function deleteData ({ instance }, serviceName) {
    return instance.delete(serviceName);
}