class TokenService {
  getLocalAccessToken(){
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.token;
  }
}

export default new TokenService();
