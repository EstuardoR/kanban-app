import { useState } from "react"



export default function Login() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUserName(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    return (
        <div>
            <input
                placeholder="username"
                value={userName}
                onChange={handleChangeUsername}
            />
            <input
                placeholder="password"
                value={password}
                onChange={handleChangePassword}

            />
        </div>
    )
}

