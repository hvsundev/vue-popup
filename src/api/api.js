import axios from 'axios';

// 공지사항 타이틀 가져오기
function getNotice() {
    console.log("1");
    return axios.get("http://localhost:8081/popup/notice/title");
}

function getNoticeContents(idx) {
    const formData = new FormData();
    formData.append("idx", idx);

    return axios.post("http://localhost:8081/popup/notice/contents", formData);
}

function checkLogin(user) {
    const formData = new FormData();
    formData.append("user_id", user.user_id);
    formData.append("user_pw", user.user_pw);

    return axios.post("http://localhost:8081/popup/login/check", formData);
}

export {
    getNotice,
    getNoticeContents,
    checkLogin
}
