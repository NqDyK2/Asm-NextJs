import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useForm, SubmitHandler} from 'react-hook-form'
import {SignUp} from '../../api/auth'
import isEmpty from "validator/lib/isEmpty"


interface Input{
  email: String,
  password: String,
  name: string,
}

const Signup = () => {

  const {register, handleSubmit, formState:{errors} } = useForm<Input>()
  const onSubmit:SubmitHandler<Input> = data => {
    console.log(data);
    SignUp(data)
  }
  return (
    <div className='bg-black relative flex h-screen w-screen flex-col md:items-center md:justify-center '>
      <Head>
        <title>Netflix</title>
      </Head>
      <Image src={"https://rb.gy/p2hphi"}
      layout="fill"
      className="-z-10!hidden opacity-60 sm:!inline"
      objectFit="cover">
        
      </Image>
      <img src="https://rb.gy/ulxxee" className="absolute lef-4top-4cursor-pointer object-contain md:left-10 md:top-6" width={150}  height={150}/>
        
        
        <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8rounded bg-black/75 py-10 px-6md:mt-0
          md:max-w-md md:px-14">
          <h1 className='text-center mb-5 text-white text-3xl'>Sign Up</h1>
          <div className="space-y-4">
            <label>
              <input type="email"placeholder="Name"{...register('name', {required: true})} className='w-full rounded bg-[#333333] mb-5 px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];'/>
            </label>

            <span>{errors.name?.type === 'required' && <span className='text-red-900 '>*Name is required</span>}</span>
            {/* Validate */}
            <label>
              <input type="email"placeholder="Email"{...register('email', {required: true})} className='w-full rounded bg-[#333333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];'/>
            </label>
            <span>{errors.email?.type === 'required' && <span className='text-red-900 '>*Email is required</span>}</span>
            {/* Validate */}
            <label>
              <input type="password"placeholder="Password"{...register('password', {required: true})} className='w-full rounded bg-[#333333] mt-5 px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];'/>
            </label>
            <span>{errors.password?.type === 'required' && <span className='text-red-900'>*Password is required</span>}</span>
            {/* Validate */}
          </div>
          <button type='submit' className='w-full rounded bg-[#e50914] mt-5 py-3 font-semibold'>Sign In</button>
          {Object.keys(errors).length !== 0 && (
                <div className='error-container'>
                </div>
                )
          }


          <div className="text-[gray] mt-3">
          New to Netflix?{''}
          <button type="submit"className="ml-3 text-white hover:underline">
            Sign up now
          </button>
        </div>
        </form>
    </div>
  )
}

export default Signup