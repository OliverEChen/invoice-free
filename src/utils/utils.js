export function formatDateWithMonth() {
    // 创建一个Date对象，表示Dec 18, 2024
    const date = new Date(); // 注意：月份是从0开始的，所以11代表12月

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]}, ${day.toString().padStart(2, '0')}, ${year}`;

}
export function validateEmail(_rule, value) {
    // 定义一个正则表达式来匹配邮箱格式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value === '') {
        return Promise.reject('Please input your email');
    } else if (emailRegex.test(value)) {
        return Promise.resolve(); // 邮箱格式正确，通过验证
    } else {
        return Promise.reject('The email format is incorrect'); // 邮箱格式错误，返回一个错误信息
    }
}
export function validatePassword(_rule, value) {
    // 正则表达式解释：
    // ^ 和 $ 分别表示字符串的开始和结束，确保整个字符串匹配整个正则表达式
    // (?=.*[a-zA-Z]) 确保至少有一个字母
    // (?=.*\d) 确保至少有一个数字
    // (?=.*[!@#$%^&*(),.?":{}|<>]) 确保至少有一个特殊符号
    // .{8,} 确保字符串长度至少为8位
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (value === '') {
        return Promise.reject('Please input your password');
    } else if (passwordRegex.test(value)) {
        return Promise.resolve(); // 格式正确，通过验证
    } else {
        return Promise.reject('The password At least 1 letter, 1 number, and 1 special character, with a length of at least 8'); // 格式错误，返回一个错误信息
    }
}
