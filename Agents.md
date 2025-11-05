# Viber AI Chatbot - Agent Skills & Capabilities

This document outlines the discoverable capabilities and expertise of the Viber AI Chatbot system, following the Agent Skills package model from agents.md.

## 🤖 Core Agent Skills

### SKILL: AI Chat Interface
**Purpose**: Handle conversational AI interactions with streaming responses
**Invocation Model**: Model-invoked - Autonomous decision based on user chat messages
**Location**: `components/ChatInterface.tsx`, `app/api/chat/route.ts`

**Instructions for Claude**:
When a user sends a chat message, automatically:
1. Process the message through MiniMax AI with streaming responses
2. Maintain conversation context and history
3. Handle loading states and user feedback
4. Execute live code preview if code blocks are detected
5. Provide smooth, real-time conversation experience

**Supporting Files**:
- `components/ChatInterface.tsx` - Main chat UI component
- `app/api/chat/route.ts` - MiniMax AI integration endpoint
- `contexts/AuthContext.tsx` - User session management

**Capabilities**:
- Real-time streaming AI responses
- Context-aware conversation management
- Character-by-character streaming
- Error handling and retry logic
- Session persistence

### SKILL: Live Code Preview Execution
**Purpose**: Execute and display generated code in real-time sandbox environment
**Invocation Model**: Model-invoked - Automatic when AI responses contain code blocks
**Location**: `components/ChatInterface.tsx`, `app/api/preview/route.ts`

**Instructions for Claude**:
When AI responses contain code blocks (HTML, JavaScript, React):
1. Auto-detect code blocks in chat responses
2. Execute code in secure iframe sandbox
3. Display live preview with proper styling
4. Handle different code types (HTML, JSX, plain HTML/JS)
5. Provide clear/reset functionality

**Supporting Files**:
- `components/ChatInterface.tsx` - Code preview UI integration
- `app/api/preview/route.ts` - Code execution backend
- `lib/utils.ts` - Utility functions for code processing

**Capabilities**:
- Secure sandbox iframe execution
- Auto-detection of code blocks
- Multiple language support (HTML, JavaScript, React)
- Live rendering with proper styling
- Sample preview generation for testing

### SKILL: File Upload & Processing
**Purpose**: Handle file attachments and process uploaded content securely
**Invocation Model**: User-invoked through upload interface
**Location**: `components/ChatInterface.tsx`, `app/api/upload/route.ts`

**Instructions for Claude**:
When users upload files through the chat interface:
1. Validate file types and sizes
2. Process files with appropriate handlers
3. Display file metadata in chat
4. Provide file preview capabilities
5. Handle multiple format support

**Supporting Files**:
- `components/ChatInterface.tsx` - Upload UI component
- `app/api/upload/route.ts` - File processing endpoint
- `lib/utils.ts` - File validation utilities

**Capabilities**:
- Multi-format support (images, PDF, TXT, JSON, CSV)
- Base64 encoding for secure transmission
- File metadata extraction and display
- Drag & drop interface
- File preview in chat messages

### SKILL: Firebase Authentication Management
**Purpose**: Secure user authentication and session handling
**Invocation Model**: Automatic during app initialization and route navigation
**Location**: `contexts/AuthContext.tsx`, `components/AuthForm.tsx`

**Instructions for Claude**:
During application startup and navigation:
1. Initialize Firebase client with proper configuration
2. Check for existing user sessions
3. Handle authentication state changes
4. Protect routes based on authentication status
5. Provide seamless login/logout experience

**Supporting Files**:
- `contexts/AuthContext.tsx` - React auth context
- `components/AuthForm.tsx` - Authentication forms
- `lib/firebase.ts` - Firebase configuration

**Capabilities**:
- Email/password registration and login
- Google OAuth integration
- Session persistence and management
- Protected route handling
- User profile management

### SKILL: Documentation Navigation System
**Purpose**: Provide comprehensive documentation and help resources
**Invocation Model**: User-invoked through /docs routes
**Location**: `app/docs/`, `components/Navigation.tsx`

**Instructions for Claude**:
When users access documentation routes:
1. Display structured documentation pages
2. Provide navigation between doc sections
3. Include code examples and tutorials
4. Offer troubleshooting guidance
5. Maintain consistent styling and layout

**Supporting Files**:
- `app/docs/getting-started/page.tsx` - Setup guide
- `app/docs/features/page.tsx` - Feature overview
- `components/Navigation.tsx` - Navigation component

**Capabilities**:
- Structured documentation pages
- Getting started guides
- Feature overviews with examples
- SEO-optimized content
- Breadcrumb navigation

### SKILL: Blog Content Management
**Purpose**: Manage and display technical blog content
**Invocation Model**: User-invoked through /blog routes
**Location**: `app/blog/`, `components/Navigation.tsx`

**Instructions for Claude**:
When users access blog routes:
1. Display blog post listings and individual posts
2. Handle code syntax highlighting
3. Provide author attribution and metadata
4. Enable social sharing capabilities
5. Maintain consistent blog layout

**Supporting Files**:
- `app/blog/building-ai-chatbot/page.tsx` - Technical tutorial
- `app/blog/live-preview-feature/page.tsx` - Feature announcement
- `components/Navigation.tsx` - Blog navigation

**Capabilities**:
- Technical blog post management
- Code syntax highlighting with Shiki
- SEO-optimized structure
- Author metadata and social sharing
- Responsive blog layout

### SKILL: Community Platform Management
**Purpose**: Provide user support and community features
**Invocation Model**: User-invoked through /community routes
**Location**: `app/community/`, `components/Navigation.tsx`

**Instructions for Claude**:
When users access community routes:
1. Display support information and FAQ
2. Provide contributor recognition
3. Show user project showcases
4. Enable social media integration
5. Offer contact and feedback forms

**Supporting Files**:
- `app/community/support/page.tsx` - FAQ and support
- `components/Navigation.tsx` - Community navigation
- `lib/utils.ts` - Contact form utilities

**Capabilities**:
- FAQ and support page management
- Contributor showcase and recognition
- Social media integration links
- Contact forms and feedback systems
- Community project examples

### SKILL: Navigation & Routing Control
**Purpose**: Handle application navigation and routing seamlessly
**Invocation Model**: Automatic during user navigation interactions
**Location**: `components/Navigation.tsx`, `app/layout.tsx`

**Instructions for Claude**:
During user navigation:
1. Handle route changes and state updates
2. Manage active navigation states
3. Provide breadcrumb navigation
4. Ensure responsive mobile navigation
5. Maintain SEO-friendly URL structure

**Supporting Files**:
- `components/Navigation.tsx` - Main navigation component
- `app/layout.tsx` - Root layout with navigation
- `app/page.tsx` - Home page routing

**Capabilities**:
- Single-page application routing
- Active state management
- Breadcrumb navigation
- Mobile-responsive design
- URL state management

### SKILL: Testing & Quality Assurance
**Purpose**: Comprehensive automated testing and quality validation
**Invocation Model**: Automatic via CI/CD pipeline and manual testing
**Location**: `tests/e2e/`, `.github/workflows/`

**Instructions for Claude**:
For quality assurance and testing:
1. Run comprehensive Playwright E2E tests
2. Validate all user flows and interactions
3. Test authentication, chat, and file upload
4. Verify responsive design across devices
5. Provide test reports and metrics

**Supporting Files**:
- `tests/e2e/` - Playwright test suites
- `.github/workflows/ci.yml` - CI/CD pipeline
- `playwright.config.ts` - Test configuration

**Capabilities**:
- Authentication flow testing
- Chat functionality validation
- File upload system testing
- UI component validation
- Cross-device responsive testing

### SKILL: Deployment & DevOps
**Purpose**: Optimized deployment and infrastructure management
**Invocation Model**: Automatic during deployment processes
**Location**: `vercel.json`, `next.config.js`

**Instructions for Claude**:
For deployment and infrastructure:
1. Optimize build configuration for production
2. Configure proper environment variables
3. Set up caching and performance optimization
4. Handle security headers and CSP
5. Monitor deployment status and errors

**Supporting Files**:
- `vercel.json` - Vercel deployment configuration
- `next.config.js` - Next.js build optimization
- `.env.local` - Environment variable template

**Capabilities**:
- Vercel-optimized deployment
- Environment variable management
- Performance optimization
- Security configuration
- Build artifact management

## 🔧 Technical Architecture

### Skill Invocation Model
**Model-Invoked vs User-Invoked:**
- **Model-Invoked Skills**: Claude autonomously decides when to use based on request context and skill descriptions
  - AI Chat Interface, Live Code Preview, Authentication, Navigation, Testing, Deployment
  
- **User-Invoked Skills**: Explicit user interaction triggers the skill
  - File Upload, Documentation, Blog, Community

### Skill Dependencies
Each skill requires these core dependencies:
- Firebase configuration and API keys
- MiniMax AI API integration
- Next.js App Router structure
- TypeScript type safety
- Tailwind CSS styling system

### Performance & Optimization
- **Streaming**: Real-time response streaming for chat
- **Static Generation**: Pre-built pages for fast loading
- **Caching**: Intelligent caching strategies
- **Bundle Optimization**: Optimized webpack configuration

## 🚀 Advanced Multi-Modal Capabilities

### Text Processing
- Natural language understanding and generation
- Context-aware conversation management
- Technical documentation processing
- Code syntax highlighting and analysis

### Code Processing
- HTML/JavaScript/React execution
- Secure sandbox environment
- Live preview rendering
- Error handling and debugging

### File Processing
- Multi-format support (images, documents, data)
- Metadata extraction and validation
- Secure file handling
- Preview generation

### UI Processing
- Real-time component updates
- Responsive design adaptation
- Animation and interaction handling
- Accessibility compliance

## 📋 Skill Category Organization

### Core Application Skills (High Priority)
1. **AI Chat Interface** - Primary user interaction
2. **Authentication Management** - Security foundation
3. **Live Code Preview** - Unique value proposition
4. **File Upload Processing** - Enhanced functionality

### Content & Documentation Skills (Medium Priority)
5. **Documentation System** - User guidance
6. **Blog Content Management** - Community engagement
7. **Community Platform** - User support
8. **Navigation Control** - User experience

### Infrastructure & DevOps Skills (Supporting)
9. **Testing & QA** - Quality assurance
10. **Deployment & DevOps** - Production readiness

## 🎯 Future Skill Expansion Roadmap

### Phase 1: Enhanced AI Capabilities
- **Voice Input Processing**: Speech-to-text integration
- **Image Generation**: AI-powered image creation
- **Advanced Analytics**: Usage tracking and insights

### Phase 2: Community & Social Features
- **Multi-Language Support**: Internationalization
- **Plugin System**: Extensible skill architecture
- **Advanced Collaboration**: Real-time co-editing

### Phase 3: Enterprise Features
- **Advanced Security**: Enterprise-grade auth
- **API Management**: Third-party integrations
- **Scalability**: Multi-tenant architecture

---

**Agent Skills Package Model**: This implementation follows the agents.md pattern where skills are model-invoked rather than user-invoked commands, allowing autonomous decision-making based on context and skill descriptions.

**Last Updated**: November 6, 2025  
**Version**: 2.0.0  
**Repository**: https://github.com/likhonsdevbd/viber-ai-chatbot