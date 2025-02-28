import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello from bun elysia')
    .listen(3000)

console.log('bun + elysia is running at port 3000')