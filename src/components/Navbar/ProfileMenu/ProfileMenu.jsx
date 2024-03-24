import Avatar from "@/assets/images/common/avt_temp.svg";
import GradientButton from "@/components/Common/Button/GradientButton/GradientButton";
import OutlineButton from "@/components/Common/Button/OutlineButton/OutlineButton";
import { Tooltip } from "antd";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownContent,
  LogoutButton,
  ProfileAvatar,
  ProfileCourseRegister,
  ProfileInfo,
  ProfileMenuButtonGroup,
  ProfileMenuWrapper,
  ProfileName,
  ProfilePhoneNumber,
} from "./ProfileMenuStyled";

const ProfileMenu = ({ logoutRedirectUrl }) => {
  const router = useRouter();
  const accessToken = Cookies.get("access_token");
  const { userDetail } = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();

  return (
    <DropdownContent>
      <ProfileMenuWrapper>
        <ProfileInfo>
          <ProfileAvatar>
            <Image src={Avatar} alt="" />
          </ProfileAvatar>
          <ProfileName>{userDetail?.fullName}</ProfileName>
          <ProfilePhoneNumber>
            Số điện thoại: {userDetail?.phone}
          </ProfilePhoneNumber>
          <ProfileCourseRegister>
            Khóa học đã đăng ký: {listMyCourse?.length}
          </ProfileCourseRegister>
        </ProfileInfo>
        <ProfileMenuButtonGroup>
          <Tooltip
            placement="top"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -14],
                    },
                  },
                ],
              },
            }}
            title={"Tính năng đang phát triển"}
          >
            <GradientButton title={"Đăng ký thành chuyên gia"} disabled />
            <div></div>
          </Tooltip>
          <Link
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_URL_LOGINONEID}`}
          >
            <div style={{ marginTop: "20px" }}>
              <OutlineButton title={"Cài đặt tài khoản"} />
            </div>
          </Link>
        </ProfileMenuButtonGroup>

        <LogoutButton onClick={handleLogout}>Đăng xuất</LogoutButton>
      </ProfileMenuWrapper>
    </DropdownContent>
  );
};

export default ProfileMenu;
