export default function authHeader() {
    const currentToken = localStorage.getItem("loginToken") ?
    JSON.parse(localStorage.getItem("loginToken")) :
    "";
    if (currentToken && currentToken.state.access_token) {
        return {
            "Access-ControlAllow-Origin": "*",
            authorization: `Bearer ${currentToken.state.access_token}`
        };
    } else {
        return {};
    }
}