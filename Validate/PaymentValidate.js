const validate = (payment) => {
    let error = {};
    console.log(payment)
    if (!payment.price || payment.price.length < 3) {
        error.price = "คุณต้องกรอกข้อมูล";
    }
    if (!payment.slip) {
        error.slip = "คุณต้องกรอกข้อมูล";
    }
    return error;
};

export default validate;