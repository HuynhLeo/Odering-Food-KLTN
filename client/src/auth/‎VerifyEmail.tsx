import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRef = useRef<any>([]);
    const navigate = useNavigate();
    const loading = false;
    // Hàm xử lý thay đổi giá trị OTP
    const handleChange = (index: number, value: string) => {
        if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Nếu giá trị đã được nhập đầy đủ, di chuyển focus đến ô tiếp theo
            if (value && index < otp.length - 1) {
                inputRef.current[index + 1]?.focus();
            }
        }
    };

    // Hàm xử lý khi nhấn phím Backspace để quay lại ô trước
    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl">Xác minh email của bạn</h1>
                    <p className="text-sm text-gray-600">
                        Nhập mã gồm 6 chữ số được gửi tới địa chỉ email của bạn
                    </p>
                </div>
                <form action="">
                    <div className="flex justify-between">
                        {otp.map((letter, idx) => (
                            <Input
                                key={idx}
                                ref={(element) => (inputRef.current[idx] = element)}
                                type="text"
                                maxLength={1}
                                value={letter}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange(idx, e.target.value)
                                }
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                                    handleKeyDown(idx, e)
                                }
                                className="md:w-14 md:h-14 w-12 h-12 text-center text-sm md:text-4xl font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ))}
                    </div>
                    {
                        loading ? <Button disabled className="bg-orange hover:bg-hoverOrange mt-6 w-full">
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Vui lòng chờ
                        </Button> : (
                            <Button className="bg-orange hover:bg-hoverOrange mt-6 w-full">
                                Xác minh
                            </Button>
                        )
                    }

                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
