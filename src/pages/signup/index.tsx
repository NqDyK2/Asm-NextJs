import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SignUp } from '../../api/auth'
import isEmpty from "validator/lib/isEmpty"


interface Input {
  email: String,
  password: String
}

const Signup = () => {

  const { register, handleSubmit } = useForm<Input>()
  const onSubmit: SubmitHandler<Input> = data => {
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
      {/* <img src="https://rb.gy/ulxxee" className="absolute lef-4top-4cursor-pointer object-contain md:left-10 md:top-6" width={150} height={150} /> */}


      <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8rounded bg-black/75 py-10 px-6md:mt-0
          md:max-w-md md:px-14">
        <h1 className='text-center mb-5 text-white text-3xl'>Sign Up</h1>
        <div className="space-y-4">
          <label>
            <input type="email" placeholder="Email"{...register('email')} className='text-white w-full rounded bg-[#333333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];' />
          </label>
          <label>
            <input type="password" placeholder="Password"{...register('password')} className='text-white w-full rounded bg-[#333333] mt-5 px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545];' />
          </label>
        </div>
        <button type='submit' className='w-full rounded bg-[#e50914] mt-5 py-3 font-semibold text-white'>Sign Up</button>




      </form>
    </div>
  )
}

export default Signup