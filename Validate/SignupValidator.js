import { regexExpression } from "./InterfaceValidator";

const validate = (dataSignup) => {
    let error = {};
    if (!regexExpression.regexText.test(dataSignup.firstName) || !dataSignup.firstName) {
        error.firstName = "คุณกรอกข้อมูลไม่ถูกต้อง";
    }
    if (!regexExpression.regexText.test(dataSignup.lastName) || !dataSignup.lastName) {
        error.lastName = "คุณกรอกข้อมูลไม่ถูกต้อง";
    }
    if (!regexExpression.regexPassword.test(dataSignup.password) ||!dataSignup.password || dataSignup.password.length < 5) {
        error.password = "คุณกรอกพาสเวิร์ดไม่ถูกต้อง";
    }
    if (!regexExpression.regexPassword.test(dataSignup.confirmPassword) || !dataSignup.password ||
        dataSignup.password !== dataSignup.confirmPassword) {
        error.confirmPassword = "คุณกรอกรหัสผ่านไม่เหมือนกัน";
    }

    if (!regexExpression.regexEmail.test(dataSignup.email) ||
        !dataSignup.email) {
        error.email = "คุณกรอกรูปแบบอีเมลล์ไม่ถูกต้อง";
    }

    if (!regexExpression.regexEmail.test(dataSignup.ConfirmEmail) ||
        !dataSignup.ConfirmEmail || dataSignup.email !== dataSignup.ConfirmEmail) {
        error.ConfirmEmail = "คุณกรอกรูปแบบอีเมลล์ไม่ถูกต้อง";
    }

    if (!regexExpression.regexTel.test(dataSignup.tel) || dataSignup.tel.length < 10) {
        error.tel = "เบอร์โทรศัพท์ไม่ถูกต้อง";
    }

    return error;
};

export default validate;
