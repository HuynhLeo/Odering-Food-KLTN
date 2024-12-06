import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const loading = false;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">Đăng nhập</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Email" className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password" className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
                <div className="mb-10">
                    {
                        loading ? <Button className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="mr-4 h-4 w-4 animate-spin" />Vui lòng đợi</Button> : (
                            <Button className="bg-orange w-full hover:bg-hoverOrange">Đăng nhập</Button>
                        )
                    }
                </div>
                <Separator />
                <p className="mt-4">
                    Không có tài khoản? {" "}
                    <Link to="/signup" className="text-blue-500">Đăng nhập</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;