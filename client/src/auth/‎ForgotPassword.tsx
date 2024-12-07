import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl mb-2">Quên mật khẩu</h1>
                    <p className="text-sm text-gray-600">Nhập địa chỉ email của bạn để đặt lại mật khẩu</p>
                </div>
                <div className="relative w-full">
                    <Input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email của bạn"
                        className="pl-10"
                    />
                    <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
                </div>
                {
                    loading ? (
                        <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>
                    ) : (
                        <Button className="bg-orange hover:bg-hoverOrange">Gửi liên kết đặt lại</Button>
                    )
                }
                <span className="text-center">
                    Quay lại{" "}
                    <Link to="/login" className="text-blue-500">Đăng nhập</Link>
                </span>
            </form>
        </div>
    );
};

export default ForgotPassword;