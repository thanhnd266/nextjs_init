'use client';
import { useQRCode } from 'next-qrcode';
import IconClose from '@/assets/images/HeaderHome/icon-close.svg'
import { useState } from "react";
import './QRCodeSticky.scss'
import { useEffect } from "react";

function QRCodeSticky() {
  const { Canvas } = useQRCode();
  const [show, setShow] = useState(false);
  const url = process?.env?.NEXT_PUBLIC_URL_BASE_WEB + '/ung-dung'

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage && localStorage.getItem('qr_code')) {
      let showDefault = localStorage.getItem('qr_code');
      showDefault === 'show' ? setShow(true) : setShow(false);
    }
  }, [])

  useEffect(() => {
    if (show) {
      localStorage.setItem('qr_code', 'show')
    } else {
      localStorage.setItem('qr_code', 'hidden')
    }
  }, [show])

  return (
    <>
      <div className={`JQLLJNAZTD ${show ? 'UVXNHLXNHI' : 'CLFBYDCIQA'}`} suppressHydrationWarning={true}>
        <div className={`IYUJAURVHG`}>
          {show ? <img className="XMCPDJWTPD" onClick={() => setShow(false)} src={IconClose.src} /> : null}

          <div onClick={() => setShow(true)}>
            <Canvas
              text={url}
              options={{
                errorCorrectionLevel: 'high',
                margin: 1,
                width: show ? 114 : 40,
                color: { dark: '#000000', light: '#ffffff' },
              }}
              logo={{
                src: '/image-dsc.png',
                options: {
                  width: show ? 35 : 10,
                  x: undefined,
                  y: undefined,
                }
              }}
            />
          </div>

        </div>
        <div className={'XMBSTZPRDL'}>
          {show ? 'Quét mã QR để tải ngay ứng dụng DSC Trading trên điện thoại' : ''}
        </div>
      </div>

    </>
  );
}

export default QRCodeSticky;
