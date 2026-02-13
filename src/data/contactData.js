const contacts = [
    {
        id: 1,
        name: 'Yoda',
        last_time_conection: 'Hace 2 horas',
        profile_picture: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534',
        messages: [
            {
                id: 1,
                text: 'Hola, ¿cómo estás?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Estoy bien, gracias. ¿Y tú?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Pepe Argento',
        last_time_conection: 'Hace 5 minutos',
        profile_picture: 'https://i.pinimg.com/474x/f6/a6/c4/f6a6c4a9f4c1407854497589349288b3.jpg',
        messages: [
            {
                id: 1,
                text: 'Hola, ¿cómo estás?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Estoy bien, gracias. ¿Y tú?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts