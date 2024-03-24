import React from 'react'
import error from '../../assets/images/Page404/image-404.png'
import GradientButton from '../../components/Common/Button/GradientButton/GradientButton'
import Footer from '../Common/Footer/Footer'
import Navbar from '../Common/Navbar/Navbar'
import { ErrorPageStyled } from './404Styled'

function Page404() {
    return (
        <>
            <Navbar />
            <ErrorPageStyled>
                <div className='ABKSLGRQKQ'>
                    <div className='AOASNUNQIR'>
                        <img src={error?.src} alt={error?.src} />
                    </div>
                </div>
                <div className='KMNMCQQJOL'>
                    Nội dung này hiện không tìm thấy trên trang, vui lòng quay lại trang chủ để trải nghiệm!
                </div>
                {/* <div className='OLTZOHUJTR'>
                    <Link href={'/'}>
                        <button>Quay lại trang chủ</button>
                    </Link>
                </div> */}
                <GradientButton
                 isLink={true}
                 link="/"
                 title="Quay lại trang chủ"
                />
            </ErrorPageStyled>

        </>
    )
}

export default Page404