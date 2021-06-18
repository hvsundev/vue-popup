import axios from 'axios';

// 공지사항 타이틀 가져오기
function getNotice() {
    return axios.get("http://localhost:8081/popup/notice/title");
}

function getNoticeContents(idx) {
    const formData = new FormData();
    formData.append("idx", idx);
    return axios.post("http://localhost:8081/popup/notice/contents", formData);
}

function getScrollNotice() {
    return axios.get("http://localhost:8081/popup/main/contents");
}

export {
    getNotice,
    getNoticeContents,
    getScrollNotice
}
