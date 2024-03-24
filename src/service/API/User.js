import { axiosGET, axiosPOST } from "@/helper/TypeAxios";
import { urlParseParams } from "@/helper/helpFunction";

export default class User {
    getUserDetail(accessToken) {
        return axiosGET("auth", `/users/user-detail`, {
            Authorization: `Bearer ${accessToken}`,
        });
    }
    logout(body, accessToken) {
        return axiosPOST("auth", `/auth/external/revoke`, body, {
            Authorization: `Bearer ${accessToken}`,
        });
    }
    getNewAccessToken(body) {
        return axiosPOST("auth", `/auth/external/refresh`, body);
    }
}
