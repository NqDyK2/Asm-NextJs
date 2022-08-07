import LayoutAdmin from '@/components/Layouts/admin'
import useFilms from '@/hooks/use-film'
import { NextPageWithLayout } from '@/models/layouts'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Input {
    name: string,
    overview: string,
    poster_path: string,
    banner_img: string,
    title: string,
    video: string,
}

const CreateFilm = (props: NextPageWithLayout) => {
    const { create } = useFilms()
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()
    const onSubmit: SubmitHandler<Input> = data => {
        create(data)
        console.log("data", data);

    }
    return (
        <div>
            <h1 className='pb-10 font-bold text-5xl'>Thêm Phim</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" {...register('name', { required: true, minLength: 8 })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tên Phim</label>
                        <p className='text-red-500'>
                            {errors.name?.type === 'required' && "Không bỏ trống trường"}
                        </p>
                         <p className='text-red-500'>{errors.name?.type=== 'minLength' && "Tối thiểu 8 ký tự"}</p>   
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" {...register('title', { required: true, minLength: 8 })}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">tiêu đề</label>
                        <p className='text-red-500'>
                            {errors.title?.type === 'required' && "Không bỏ trống trường"}
                        </p>
                         <p className='text-red-500'>{errors.title?.type=== 'minLength && "Tối thiểu 8 ký tự'}</p>   
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" {...register('poster_path', { required: true, minLength: 8 })}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ảnh Poster</label>
                            <p className='text-red-500'>
                                {errors.poster_path?.type === 'required' && "Không bỏ trống trường"}
                            </p>
                         <p className='text-red-500'>{errors.poster_path?.type=== 'minLength' && "Tối thiểu 8 ký tự"}</p>   
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" {...register('banner_img', { required: true, minLength: 8 })}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Banner</label>
                            <p className='text-red-500'>
                                {errors.banner_img?.type === 'required' && "Không bỏ trống trường"}
                            </p>
                         <p className='text-red-500'>{errors.banner_img?.type=== 'minLength' && "Tối thiểu 8 ký tự"}</p>   
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" {...register('video', { required: true, minLength: 8 })}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Video</label>
                            <p className='text-red-500'>
                                {errors.video?.type === 'required' && "Không bỏ trống trường"}
                            </p>
                         <p className='text-red-500'>{errors.video?.type=== 'minLength' && "Tối thiểu 8 ký tự"}</p>   
                        </div><br />
                    </div>
                    <textarea id="message" {...register('overview',{required:true})} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mô tả" defaultValue={""} />
                    <p className='text-red-500'>
                                {errors.video?.type === 'required' && "Không bỏ trống trường"}
                            </p>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    )
}
CreateFilm.Layout = LayoutAdmin
export default CreateFilm