export function logIn () {
    return window.localStorage.getItem('auth') === 'true'
}