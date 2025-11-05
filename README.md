# Viber AI Chatbot

A sophisticated AI-powered chatbot application built with Next.js, Firebase Authentication, and MiniMax AI integration.

## Features

- **Firebase Authentication**: Complete auth system with email/password and Google OAuth
- **MiniMax AI Integration**: Intelligent chat responses with streaming support
- **Split-Panel Interface**: Chat on the left, live preview on the right
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI
- **Real-time Chat**: Streaming AI responses with beautiful animations
- **File Upload Support**: Attach files to your chat conversations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Authentication**: Firebase Auth
- **AI**: MiniMax AI API

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- Firebase account
- MiniMax AI API key

### Environment Variables

The `.env.local` file is already configured with:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCEu3gEvhw1iiGnTxh8GXJOS6PP2wQ2Irc
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=viber-40f2a.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=viber-40f2a
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=viber-40f2a.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1049585237173
NEXT_PUBLIC_FIREBASE_APP_ID=1:1049585237173:web:2628eecc8a9c7810fa52fc
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-N7YME4Z8KX

# MiniMax AI Configuration
MINIMAX_API_KEY=[configured]
MODEL_NAME=minimax-m2
USE_MINIMAX=true
```

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# The app will be available at http://localhost:3000
```

## Usage

1. **Sign Up/Sign In**: Create an account using email/password or Google OAuth
2. **Start Chatting**: Type your message in the input field and press Enter
3. **AI Responses**: Get intelligent responses from MiniMax AI with streaming
4. **View Preview**: See live app previews in the right panel

## Project Structure

```
viber-ai-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # MiniMax AI integration with streaming
│   ├── layout.tsx                # Root layout with AuthProvider
│   ├── page.tsx                  # Main page with auth routing
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Reusable UI components (Button, Input, Dialog)
│   ├── AuthForm.tsx              # Authentication form with email/Google
│   └── ChatInterface.tsx         # Main chat interface with split panel
├── contexts/
│   └── AuthContext.tsx           # Firebase auth context and hooks
├── lib/
│   ├── firebase.ts               # Firebase configuration
│   └── utils.ts                  # Utility functions
└── .env.local                    # Environment variables
```

## API Routes

### POST /api/chat

Main chat endpoint for MiniMax AI integration.

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi! How can I help you?" }
  ]
}
```

**Response:**
- Streaming text/event-stream
- Real-time AI responses
- Supports conversation context

## Component Overview

### AuthForm
- Email/password authentication
- Google OAuth integration
- Error handling and validation
- Responsive design

### ChatInterface
- Real-time chat messages
- Streaming AI responses
- Message history with animations
- Split-panel layout (chat + preview)
- User profile display

### Firebase Auth Context
- User state management
- Sign in/up/out methods
- Google OAuth support
- Loading states

## Features Implemented

- [x] Firebase Authentication
- [x] Email/Password Sign In
- [x] Google OAuth
- [x] Chat Interface with split panel
- [x] MiniMax AI Integration
- [x] Streaming Responses
- [x] Message animations
- [x] Responsive design
- [x] Error handling

## Future Enhancements

- [ ] File Upload Functionality
- [ ] Live App Preview with code execution
- [ ] Message History Persistence (Firebase/Supabase)
- [ ] Dark Mode Toggle
- [ ] Export chat conversations
- [ ] Multi-language support

## License

MIT License

## Deployment

The application is ready for deployment. The development server is currently running on port 3000.

To deploy to production:
1. Ensure all environment variables are set
2. Build the application: `pnpm build`
3. Start production server: `pnpm start`
4. Or deploy to Vercel/Netlify for automatic deployment
