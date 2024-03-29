import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type Props = {}

const SearchPages = (props: Props) => {
    const [searchFilms, setSearchFilms] = useState<any>([]);
    const router = useRouter();

    const { search } = router.query;
    const [films, setFilms] = useState<any>();
  

    useEffect(() => {
        (async () => {
            const films = await searchFilms(search as string)
            setSearchFilms(films)
        })();
    }, [search]);


    return (
        <div className="container-base">
            <main>
                <section>
                    <div>
                        <ul className="flex py-5">
                            <li>
                                <Link href="/">Trang chủ</Link>
                            </li>{" "}
                            <span className="px-3 ">/</span>
                            <li>
                                <Link href="/">Tất cả sản phẩm</Link>
                            </li>
                        </ul>
                    </div>
                    <h1 className="text-3xl font-sans font-semibold pt-50">{`Kết quả tìm kiếm "${search}"`}</h1>
                </section>
                <section className="col-span-12 lg:col-span-9 pb-4">
                    <div className="grid grid-cols-2 md:grid-clos-3 lg:grid-cols-4 gap-4">
                        {!films?.length && <p className="mt-2">Không tìm thấy sản phẩm!</p>}

                        {films?.map((item:any, index:any) => {
                            return (
                                <div key={index}>
                                    <div className="group">
                                        <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10 pt-[100%]">
                                            {item.image && <Image src={item.image} alt="" layout="fill" />}
                                            <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear  hover:text-white translate-y-full group-hover:translate-y-0">
                                                Xem nhanh 
                                            </button>
                                        </div>
                                        <div className="text-center py-3">
                                            <Link href={}>
                                                <span className="cursor-pointer block font-semibold text-xl">{item.name}</span>
                                            </Link>
                                            {/* <span className="font-semibold text-xl">
                                                <span className="font-medium">Giá</span>: {formatCurrency(item.price)}
                                            </span> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SearchPages