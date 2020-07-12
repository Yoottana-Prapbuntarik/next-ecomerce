import { regexExpression } from "./InterfaceValidator";

const validate = (dataSignin) => {
    let error = {};
    if (!regexExpression.regexEmail.test(dataSignin.email) ||
        !dataSignin.email) {
        error.email = "คุณกรอกรูปแบบอีเมลล์ไม่ถูกต้อง";
    }
    if (!regexExpression.regexPassword.test(dataSignin.password) || !dataSignin.password || dataSignin.password.length < 5) {
        error.password = "คุณกรอกพาสเวิร์ดไม่ถูกต้อง";
    }
    return error;
};

export default validate;
