import { regexExpression } from "./InterfaceValidator";

const validate = (dataCheckout) => {
    let error = {};
    if (!regexExpression.regexText.test(dataCheckout.firstName) || !dataCheckout.firstName) {
        error.firstName = "คุณกรอกข้อมูลไม่ถูกต้อง";
    }
    if (!regexExpression.regexText.test(dataCheckout.lastName) || !dataCheckout.lastName) {
        error.lastName = "คุณกรอกข้อมูลไม่ถูกต้อง";
    }
    if (!dataCheckout.address){
        error.address = "คุณต้องกรอกข้อมูล";
    }
    if (!regexExpression.regexText.test(dataCheckout.district) || !dataCheckout.district) {
        error.district = "คุณต้องกรอกข้อมูล";
    }
    if (!regexExpression.regexText.test(dataCheckout.area) || !dataCheckout.area) {
        error.area = "คุณต้องกรอกข้อมูล";
    }

    if (!dataCheckout.province || dataCheckout.province.length < 4) {
        error.province = "คุณต้องกรอกข้อมูล";
    }
    if (!dataCheckout.postal || dataCheckout.postal.length < 4) {
        error.postal = "คุณต้องกรอกข้อมูล";
    }
    if (!regexExpression.regexTel.test(dataCheckout.tel) || dataCheckout.tel.length < 10) {
        error.tel = "เบอร์โทรศัพท์ไม่ถูกต้อง";
    }

    return error;
};

export default validate;