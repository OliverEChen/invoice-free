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
export function addDaysToDate(dateString, daysToAdd) {
    // 将日期字符串解析为Date对象
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // 月份从0开始，需要减1
    const day = parseInt(dateParts[2], 10);
    const startDate = new Date(year, month, day);

    // 计算X天后的日期
    const futureDate = new Date(startDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));

    // 格式化日期为YYYY-MM-DD字符串
    const futureYear = futureDate.getFullYear();
    const futureMonth = String(futureDate.getMonth() + 1).padStart(2, '0'); // 月份加1并补零
    const futureDay = String(futureDate.getDate()).padStart(2, '0'); // 补零
    const futureDateString = `${futureYear}-${futureMonth}-${futureDay}`;

    return futureDateString;
}
export function base64ToFile(base64, filename) {
    // 移除Base64字符串中的元数据部分（如果有的话）
    const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches) {
        console.error('Invalid input string');
        throw new Error('Invalid input string');
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    console.log('mimeType:', mimeType)
    // 将Base64字符串转换为字节数组
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    // 创建Blob对象
    const blob = new Blob([byteArray], { type: mimeType });

    // 创建File对象（可选）
    const file = new File([blob], filename, {
        type: mimeType,
        lastModified: Date.now()
    });

    // 生成对象URL（如果需要的话）
    const url = URL.createObjectURL(file);
    return {
        file: file,
        url: url
    };
}

/**
 * 打印HTML内容
 *
 * @param html 要打印的HTML内容
 * @returns 返回一个Promise对象，表示打印操作完成
 */
export function printHTML(html) {
    return new Promise((resolve) => {
        const content = html
        const iframe = document.createElement('iframe')

        iframe.setAttribute('style', 'display:none;')
        document.body.appendChild(iframe)

        const doc = iframe.contentDocument || iframe.contentWindow.document
        doc.open()
        doc.write('<html><head><title>Print</title></head><body>')
        doc.write(content)
        doc.write('</body></html>')
        doc.close()

        iframe.contentWindow.onload = function () {
            iframe.contentWindow.print()
            document.body.removeChild(iframe)
            resolve()
        }
    })
}
export const formatCurrency = (val) => {
    if (val?.length > 0) {
        return val.split('-')[1]
    } else {
        return ''
    }
}

export const downloadFileByURL = (url) => {
    const a = document.createElement('a')
    a.href = url
    a.download = ''
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}


