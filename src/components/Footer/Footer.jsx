'use client';
import location from "@/assets/images/Footer/icon-map.svg";
import Mail from "@/assets/images/Footer/icon-mail.svg";
import Phone from "@/assets/images/Footer/icon-phone.svg";
import Qrcode from "@/assets/images/Footer/qr_code.svg";
import Logo from "@/assets/images/common/logo_dsc.svg";
import { FooterStyled } from "./FooterStyled";
import WrapperComponent from "@/components/Common/WrapperComponent/WrapperComponent";
import QRCodeSticky from "@/components/QRCodeSticky/QRCodeSticky";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <div className={'WMNNMHVWDI'}>
          <WrapperComponent>
            <div className={'ZJXBKMSQJB'}>
              <div className={'KONJHHNGSK'}>
                <img src={Logo.src} alt="" />
                <p>Đồng hành cùng thành công!</p>
              </div>
              <div className={'ZCHVVFGGLN'}>
                <h2 className={'YTCATERFXB'}>Giới thiệu</h2>
                <div className={'BHTOWUICWP'}>
                  <p className={'ETDHXZJCFP'}>
                    Giới thiệu về Welearn
                  </p>
                </div>
                <div className={'BHTOWUICWP'}>
                  <p className={'WYQETNYCCR'}>Điều khoản và điều kiện</p>
                </div>
              </div>

              <div className={'ZCHVVFGGLN'}>
                <h2 className={'YTCATERFXB'}>Địa chỉ</h2>
                <div className={'BHTOWUICWP'}>
                  <div className={'DIWJAAVNNH'}>
                    <img className={'KJBTIAHTRO'} src={location.src} />
                  </div>
                  <p className={'ETDHXZJCFP'}>
                    Tầng 2, Thành Công Building,
                    80 Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                  </p>
                </div>
                <div className={'BHTOWUICWP'}>
                  <div className={'DIWJAAVNNH'}>
                    <img className={'KJBTIAHTRO'} src={Phone.src} />
                  </div>
                  <p className={'WYQETNYCCR'}>(024) 3880 3456</p>
                </div>
                <div className={'BHTOWUICWP'}>
                  <div className={'DIWJAAVNNH'}>
                    <img className={'KJBTIAHTRO'} src={Mail.src} />
                  </div>
                  <p className={'NKKRGGOENU'}>info@dsc.com.vn</p>
                </div>
              </div>

              <div className={'ZCHVVFGGLN'}>
                <h2 className={'YTCATERFXB'}>QRcode room Tư vấn số</h2>
                <div className={'BHTOWUICWP'}>
                  <div className={'DIWJAAVNNH'}>
                    <img className={'KJBTIAHTRO'} src={Qrcode.src} />
                  </div>
                </div>
              </div>
            </div>
          </WrapperComponent>

          <div className="EUPQPPXMMI">
            <span className="MOXSVVYETI">All Rights Reserved 2024 © </span>
          </div>
        </div>
        <QRCodeSticky />
      </FooterStyled>
    </>
  );
}
