'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/images/common/logo_dsc.svg";
import AvatarDefault from "@/assets/images/common/avatar_default.svg";
import GradientButton from "@/components/Common/Button/GradientButton/GradientButton";
import { FiMenu } from "react-icons/fi";
import OutlineButton from "@/components/Common/Button/OutlineButton/OutlineButton";
import { NavbarStyled } from "./NavbarStyled";
import Cookies from "js-cookie";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import WrapperComponent from "@/components/Common/WrapperComponent/WrapperComponent";
import toast from "react-hot-toast";
import { Dropdown } from "antd";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter()
  const [fixMenu, setFixMenu] = useState(false);
  const userDetail  = null;
  
  return (
    <NavbarStyled>
      <div className="JCQNBEWASW">
        <div
          id="TDXWWKUMVV"
          className={`VOXCTFRNCP ${fixMenu ? "posFixed" : ""}`}
        >
          <div className="PEVDOOLHAC">
            <WrapperComponent>
              <div className="WCMSKRQGFG">
                <div className="AEAQTHFWZI">
                  <div className="WGAVYBERXJ">
                    <Link href={"/"}>
                      {" "}
                      <img src={Logo.src} />
                    </Link>
                  </div>
                  <div className="PGBRZQLDOR">
                    <Link
                      href={
                        userDetail ? `/#registered_course` : `/#other_course`
                      }
                      scroll={false}
                    >
                      Khóa học
                    </Link>
                  </div>
                  <div className="PGBRZQLDOR">
                    <Link href={"/huong-dan"}>Hướng dẫn</Link>
                  </div>
                </div>
                <div className="WMVHSGDYSF">
                  {userDetail ? (
                    <div className="TFAXVSSQFE">
                      <OutlineButton
                        title="Khóa học của tôi"
                        onClick={() => router.push("/khoa-hoc-cua-toi")}
                      />
                      <Dropdown
                        trigger={['click']}
                        placement="bottomRight"
                        dropdownRender={() => (
                          <ProfileMenu logoutRedirectUrl={logoutRedirectUrl} />
                        )}
                      >
                        <div className="SLWXARVYYJ">
                          <img className="UHRJJDGWLO" src={AvatarDefault.src} />
                        </div>
                      </Dropdown>
                    </div>
                  ) : (
                    <div className="WSJIAEATLS">
                      <GradientButton
                        onClick={() => {}}
                        isLink={true}
                        link="/dang-nhap"
                        title="Đăng nhập"
                      />
                    </div>
                  )}
                </div>
              </div>
            </WrapperComponent>
          </div>
        </div>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
