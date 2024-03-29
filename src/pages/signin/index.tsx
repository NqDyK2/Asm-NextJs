import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Signin } from '@/api/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Input {
  email: String,
  password: String
}
const signIn = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<Input>()
  // const success = () => toast.success("Bạn đã đăng nhập thành công!");
  // const email = () => toast.error("Email is required")
  // const password = () => toast.error("Password is required")
  const onSubmit: SubmitHandler<Input> = async (dataForm: any) => {
    const data = await Signin(dataForm);
    localStorage.setItem('user', JSON.stringify(data))
    router.push('/')
  }

  return (
    <div>

      <div className='bg-black relative flex h-screen w-screen flex-col md:items-center md:justify-center '>
        <Head>
          <title>Netflix</title>
        </Head>
        <Image src={"https://rb.gy/p2hphi"}
          layout="fill"
          className="-z-10!hidden opacity-60 sm:!inline"
          objectFit="cover">
        </Image>
        {/* <img src="https://rb.gy/ulxxee" className="absolute lef-4top-4cursor-pointer object-contain md:left-10 md:top-6" width={150}  height={150}/> */}
        <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8rounded bg-black/75 py-10 px-6md:mt-0
              md:max-w-md md:px-14">
          <h1 className='text-center mb-5 text-white text-3xl'>Sign In</h1>
          <div className="space-y-4">
            <label>
              <input type="email" placeholder="Email"{...register('email', { required: true })} className='text-slate-50 w-full rounded bg-[#333333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];' />
              {errors.email?.type === 'required' && <span className='text-red-800'>*Email is required</span>}
            </label>
            <label>
              <input type="password" placeholder="Password"{...register('password', { required: true })} className='text-slate-50 w-full rounded bg-[#333333] mt-5 px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];' />
              {errors.password?.type === 'required' && <span className='text-red-800 '>*Password is required</span>}
            </label>
          </div>
          <button type='submit' className='w-full rounded bg-[#e50914] mt-5 px-auto py-3 text-slate-50 font-semibold hover:text-emerald-300'>Sign In</button>

          {Object.keys(errors).length !== 0 && (
            <div className='error-container'>
            </div>
          )
          }
          <div className="text-[gray] mt-3">
            New to Netflix?{''}
            <Link href={"/signup"}>
              <button type='button' className="ml-3 text-slate-50 hover:underline">
                Sign up now
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signIn