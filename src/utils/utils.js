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
