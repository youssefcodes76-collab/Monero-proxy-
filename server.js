const net = require('net');

// بورت السيرفر اللي هينزل عليه البروكسي
const PORT = process.env.PORT || 8080;

const server = net.createServer((socket) => {
    console.log('عامل تعدين متصل جديد!');

    socket.on('data', (data) => {
        // هنا بيتم استقبال وتوجيه بيانات الـ Stratum
        console.log(`بيانات مستلمة: ${data.toString()}`);
    });

    socket.on('close', () => {
        console.log('انقطع اتصال عامل التعدين.');
    });

    socket.on('error', (err) => {
        console.log(`خطأ في الاتصال: ${err.message}`);
    });
});

server.listen(PORT, () => {
    console.log(`سيرفر البروكسي شغال ويستمع على البورت ${PORT}`);
});
