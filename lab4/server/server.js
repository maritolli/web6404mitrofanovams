const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/api/image', (req, res) => {
    res.json({
        imageUrl: '/images/image.jpg'
    });
});

app.post('/api/feedback', express.json(), (req, res) => {
    const { liked, comment } = req.body;

    // Проверяем, что данные получены
    if (!liked || !comment) {
        return res.status(400).json({ message: 'Все поля обязательны для заполнения!' });
    }

    console.log(`Отзыв: ${liked}, Комментарий: ${comment}`);

    res.status(200).json({ message: 'Ваш отзыв успешно получен. Спасибо!' });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});