import styled from 'styled-components';

const DropdownContent = styled.div`
  background-color: #fff;
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  height: fit-content;
  width: max-content;
  border-radius: 1.6rem;
`;

const ProfileMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    padding: 2.4rem 4rem;
`;
const ProfileAvatar = styled.div`
  margin-bottom: 0.8rem;
`
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProfileName = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  color: ${(props) => props.theme.colors.text_primary};
  padding-bottom: 0.4rem;
`
const ProfilePhoneNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  color: ${(props) => props.theme.colors.text_secondary};
  padding-bottom: 0.4rem;
`
const ProfileCourseRegister = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  color: ${(props) => props.theme.colors.text_secondary};
`
const LogoutButton = styled.button`
  background-color: transparent;
  color: #EB0C34;
  font-weight: 700;
  cursor: pointer;
  border: none;
`
const ProfileMenuButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export {
    DropdownContent,
    ProfileMenuWrapper,
    ProfileAvatar,
    ProfileName,
    ProfilePhoneNumber,
    ProfileCourseRegister,
    ProfileInfo,
    LogoutButton,
    ProfileMenuButtonGroup
}