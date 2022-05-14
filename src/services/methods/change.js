export function changeData ({ instance }, serviceName, data) {
    return instance.put(serviceName, data);
}