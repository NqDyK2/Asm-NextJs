import instance from "./instance";
export const SignUp = (user:any) => {
    const url = '/signup'
    return instance.post(url, user)
}
export const Signin = (user:any) => {
    const url = '/signin'
    return instance.post(url, user)
}