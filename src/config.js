export const API_URL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/`;


export const API_APPROVE = `${API_URL}book/approve`;
export const API_GETALLBOOK = `${API_URL}book/getAllBooks`;
export const API_PUBLISHBOOK = `${API_URL}book/publishbook`;
export const API_SINGLEBOOK = `${API_URL}book/singlebookrecord`;
export const API_VIEWPRIVECY = `${API_URL}book/privacy`;
export const API_LOGINUSER = `${API_URL}auth/login`;
export const API_LOGOUTUSER = `${API_URL}auth/logout`;
export const API_REGUSER = `${API_URL}users/register`;
export const API_DELETEPOST = `${API_URL}book/deletebook`