import Head from "next/head";
import MainLayout from "../layouts/Main";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import Errors from "../components/Errors";
import { useState } from "react";
import { useAuth } from "../hooks/auth";

function Login() {
    // States
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    // Auth Hook
    const {login, isLoading, user} = useAuth({middleware: "guest"});

    // Check Loading and User
    if(isLoading || user) {
        return (
            <>
                <p>Is Loading...</p>
            </>
        )
    }

    // Submit Form
    const submitForm = async e => {
        e.preventDefault();

        login({email, password, setErrors});
    }

    return (
        <>
            <Head>
                <title>Article - Login Page</title>
            </Head>
            <div className="px-4 py-7 rounded mx-auto bg-white shadow w-100 ">
                {/* <Errors error={errors} /> */}
                {/* Form */}
                <form className="space-y-4" onSubmit={submitForm} autoComplete="off">
                    <div className="">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email"
                            type="email"
                            value={email}
                            className="w-full"
                            onChange={e => setEmail(e.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>
                    <div className="">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            id="password"
                            type="password"
                            value={password}
                            className="w-full"
                            onChange={e => setPassword(e.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>
                    <div className="">
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;

Login.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    );
}