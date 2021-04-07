
import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@me.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'me first',
        email: 'me@me.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'paku user',
        email: 'paku@me.com',
        password: bcrypt.hashSync('123456', 10),
    },
]
export default users;