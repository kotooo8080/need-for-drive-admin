const service = 'auth/login'

export function auth ({ instance }, data) {
    return instance.post(service, {
        'username': data.email,
        'password': data.password,
    })
}