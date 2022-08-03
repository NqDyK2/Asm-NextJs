import instance from "./instance";
export const SignUp = (user:any) => {
    const url = '/users'
    return instance.post(url, user)
}
export const Signin = (user:any) => {
    const url = '/users'
    return instance.post(url, user)
}