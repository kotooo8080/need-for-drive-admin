export function setData ({ instance }, serviceName, data) {
    return instance.post(serviceName, data);
}