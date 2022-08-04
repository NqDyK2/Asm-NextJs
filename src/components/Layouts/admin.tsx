import React from 'react'
import FooterAdmin from '../Admin/footer'
import NavAdmin from '../Admin/sideBarAdmin'

type Props = {}

const LayoutAdmin = ({ children }: any) => {
    return (
        <div>
            <div className=''>
                <div>
                    <NavAdmin/>
                </div>
                <div className='h-full'>
                    {children}
                </div>
                <div>
                    <FooterAdmin/>
                </div>
            </div>

        </div>
    )
}
export default LayoutAdmin