# Viber AI Chatbot - Agent Structure

This document outlines the technical structure and capabilities of the Viber AI Chatbot project.

## Project Overview

Viber AI Chatbot is a sophisticated AI-powered conversational interface built with modern web technologies, featuring real-time AI responses, live code preview, and secure Firebase authentication.

## Core Technologies

### Frontend Stack
- **Next.js 14.2.0**: React framework with App Router for server-side rendering
- **TypeScript 5.9.3**: Type-safe development
- **Tailwind CSS 4.1.16**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion 12.23.24**: Animation library
- **Lucide React 0.552.0**: SVG icon library

### Backend Services
- **Firebase Authentication**: Secure user authentication (email/password, Google OAuth)
- **MiniMax AI API**: Advanced language model with streaming capabilities
- **Next.js API Routes**: Serverless API endpoints

### Development Tools
- **Playwright 1.56.1**: End-to-end testing framework
- **ESLint 9.39.1**: Code linting
- **pnpm**: Fast, disk space efficient package manager

## Project Structure

```
viber-ai-chatbot/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── chat/                 # AI chat endpoint
│   │   ├── upload/               # File upload endpoint
│   │   └── preview/              # Code preview endpoint
│   ├── docs/                     # Documentation pages
│   ├── blog/                     # Blog posts
│   ├── community/                # Community pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── AuthForm.tsx              # Authentication form
│   └── ChatInterface.tsx         # Main chat interface
├── contexts/                     # React contexts
│   └── AuthContext.tsx           # Firebase auth context
├── lib/                          # Utility libraries
│   ├── firebase.ts               # Firebase configuration
│   └── utils.ts                  # Helper functions
├── tests/                        # Test suites
│   └── e2e/                      # Playwright E2E tests
├── .github/                      # GitHub configuration
│   └── workflows/                # CI/CD pipelines
├── public/                       # Static assets
└── docs/                         # Project documentation
```

## Skills & Capabilities

### SKILL: Authentication
**Location:** `contexts/AuthContext.tsx`, `lib/firebase.ts`

Handles user authentication using Firebase:
- Email/password registration and login
- Google OAuth integration
- Session management
- Protected route handling

**Methods:**
- `signIn(email, password)`: Email/password login
- `signUp(email, password)`: User registration
- `signInWithGoogle()`: Google OAuth authentication
- `logout()`: Sign out current user

### SKILL: AI Chat Integration
**Location:** `app/api/chat/route.ts`, `components/ChatInterface.tsx`

Manages real-time AI conversations:
- Streaming response handling
- Message history management
- Context-aware conversations
- Error handling and retry logic

**Features:**
- Character-by-character streaming
- Conversation context preservation
- Loading states and animations
- Graceful error recovery

### SKILL: File Upload
**Location:** `app/api/upload/route.ts`

Processes file uploads:
- Multi-format support (images, documents, data files)
- File validation and sanitization
- Base64 encoding
- Metadata extraction

**Supported Formats:**
- Images: JPG, PNG, GIF, WebP
- Documents: PDF, TXT
- Data: JSON, CSV

### SKILL: Live Code Preview
**Location:** `app/api/preview/route.ts`, `components/ChatInterface.tsx`

Renders code in real-time:
- HTML rendering
- JavaScript execution
- React component preview
- Secure sandbox environment

**Security Features:**
- Sandboxed iframe execution
- Content Security Policy headers
- Isolated execution context
- XSS protection

## Model-Invoked Capabilities

### API Endpoints

**POST /api/chat**
- Accepts conversation messages
- Returns streaming AI responses
- Handles context management

**POST /api/upload**
- Processes file uploads
- Returns file metadata
- Validates file types and sizes

**POST /api/preview**
- Generates HTML preview from code
- Supports multiple code types
- Returns rendered output

## Testing Framework

### Playwright E2E Tests
**Location:** `tests/e2e/`

Comprehensive test coverage:
- Authentication flows
- Chat functionality
- UI component validation
- Responsive design testing

**Test Scripts:**
- `pnpm test`: Run all tests
- `pnpm test:ui`: Interactive UI mode
- `pnpm test:headed`: Run with browser visible
- `pnpm test:debug`: Debug mode

## CI/CD Pipeline

### GitHub Actions
**Location:** `.github/workflows/ci.yml`

Automated testing and deployment:
- Run Playwright tests on push/PR
- Build verification
- Artifact upload
- Environment variable management

## Environment Configuration

Required environment variables:
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
MINIMAX_API_KEY
MODEL_NAME
USE_MINIMAX
```

## Deployment

### Vercel Configuration
**Location:** `vercel.json`

Optimized for Vercel deployment:
- Custom headers for security
- Cache optimization
- Function timeouts
- Environment variable mapping

## Documentation

- **Getting Started**: `/docs/getting-started`
- **API Reference**: `/docs/api-reference`
- **Features**: `/docs/features`
- **Troubleshooting**: `/docs/troubleshooting`

## Community

- **Contributors**: `/community/contributors`
- **Support**: `/community/support`
- **Showcase**: `/community/showcase`

## GitHub Topics

`ai chatbot firebase authentication minimax nextjs typescript tailwind react open-source ai-powered vercel deployment testing`

## Contributing

See CONTRIBUTING.md for guidelines on:
- Code style
- Pull request process
- Testing requirements
- Documentation standards

## License

MIT License - See LICENSE file for details

---

**Last Updated:** November 6, 2025  
**Version:** 1.0.0  
**Maintainer:** Viber Development Team
