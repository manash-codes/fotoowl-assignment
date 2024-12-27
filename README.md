# Instant Chat

> A simple chat application built with React, TypeScript and Vite.

## Features

- Chat with other users in real-time
- Custom User authentication

## Dependencies

- React
- TypeScript
- Vite
- InstantDB

## How to run on your machine

1. Clone the repository
2. Run `pnpm install`
3. Update `.env.local` to `.env`
4. Update `VITE_INSTANT_APP_ID` in `.env`
5. Run `pnpm run dev` to start the development server
6. Open your browser and navigate to `http://localhost:5173`

## Instant DB configuration

1. Create 2 namespaces such as `users` and `messages`
2. Follow below schema for `users`

- `email` (string)
- `name` (string)

3. Follow below schema for `messages`

- `chatRoomID` (string)
- `recieverID` (string)
- `text` (string)
- `createdAt` (string)
