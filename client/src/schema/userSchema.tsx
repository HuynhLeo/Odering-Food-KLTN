import { z } from "zod";

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Họ tên là bắt buộc"),
    email: z.string().email("Địa chỉ email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự."),
    contact: z.string().min(10, { message: "Số liên lạc ít nhất 10 chữ số" }).max(10, "Số liên lạc tối đa 10 chữ số"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
    email: z.string().email("Địa chỉ email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
});

export type LoginInputState = z.infer<typeof userLoginSchema>;