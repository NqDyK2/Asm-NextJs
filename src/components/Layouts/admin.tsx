import React from 'react'
import FooterAdmin from '../Admin/footer'
import NavAdmin from '../Admin/sideBarAdmin'

type Props = {}

const LayoutAdmin = ({ children }: any) => {
    return (
        <div className='bg-white '>
            <div className="flex flex-no-wrap">
                <div style={{ height: '792px' }}>
                    <NavAdmin />
                </div>
                <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-full rounded">
                        {children}
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default LayoutAdmin