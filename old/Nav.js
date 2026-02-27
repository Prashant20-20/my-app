const Nav = () => {
    let isLogin = false;
    return(
        <>
            {isLogin ? <Profile/> : <Login/>}
        </>
    )
}

const Profile = () => {
    return (
        <>
                <h1>Hello Prashant</h1>
                <button>Logout</button>
            </>
    );
}

const Login = () => {
    return(
        <button>Login</button>
    );
}

export default Nav;