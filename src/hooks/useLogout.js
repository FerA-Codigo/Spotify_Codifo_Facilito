const useLogout = () => {
    window.localStorage.removeItem("token");
    window.location = `/`;
    };
export default useLogout