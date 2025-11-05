# Vercel Deployment Configuration

This document explains the Vercel deployment configuration for the Viber AI Chatbot application.

## Files Created

1. **`vercel.json`** - Main deployment configuration file
2. **`.env.example`** - Environment variables template

## Key Configuration Features

### 1. **API Route Optimization**
- **Function Timeouts**: Set appropriate timeouts for different API endpoints
  - `/api/chat`: 60 seconds (for AI processing)
  - `/api/upload`: 60 seconds (for file uploads)
  - `/api/preview`: 30 seconds (for quick previews)

### 2. **Security Headers**
- **Content Security Policy**: Prevents XSS attacks
- **Frame Options**: Protects against clickjacking
- **XSS Protection**: Enables browser XSS filtering
- **Referrer Policy**: Controls referrer information

### 3. **CORS Configuration**
- Allows cross-origin requests for API routes
- Supports standard HTTP methods (GET, POST, PUT, DELETE, OPTIONS)
- Configured for frontend-backend communication

### 4. **Caching Strategy**
- **Static Assets**: Long-term caching (1 year immutable)
- **Images**: Optimized formats (WebP, AVIF)
- **API Responses**: No caching for real-time chat data
- **Dynamic Content**: Short TTL for responsive updates

### 5. **Environment Variables**
Required environment variables for deployment:

#### Firebase Configuration (Public)
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

#### MiniMax API (Private)
```
MINIMAX_API_KEY
MODEL_NAME
```

### 6. **Performance Optimizations**
- **Region Selection**: Primary region `iad1` (East Coast US)
- **Image Optimization**: Built-in Next.js image optimization
- **Bundle Analysis**: Optimized build settings
- **Compression**: Automatic gzip/brotli compression

### 7. **Routing Configuration**
- **API Routes**: Direct mapping to Next.js API handlers
- **Static Assets**: Proper caching headers
- **Health Check**: `/health` route rewrite
- **Redirects**: Legacy URL handling

## Deployment Instructions

1. **Environment Variables Setup**
   ```bash
   # In Vercel dashboard or CLI
   vercel env add firebase_api_key
   vercel env add firebase_auth_domain
   # ... continue for all required variables
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Configure Custom Domain** (Optional)
   - Add domain in Vercel dashboard
   - Update Firebase allowed domains if needed

## API Integration Notes

### MiniMax API
- **Endpoint**: `https://api.minimaxi.chat/v1/chat/completions`
- **Authentication**: Bearer token
- **Streaming**: Enabled for real-time responses
- **Rate Limits**: Handled by MiniMax API quotas

### Firebase Integration
- **Authentication**: Client-side Firebase Auth
- **Firestore**: Real-time database for chat history
- **Storage**: File uploads for attachments
- **Security Rules**: Configure in Firebase Console

## Monitoring & Logging

- **Vercel Analytics**: Built-in performance monitoring
- **Function Logs**: Available in Vercel dashboard
- **Error Tracking**: Integrates with Sentry (if configured)
- **Uptime Monitoring**: Use external services for health checks

## Troubleshooting

### Common Issues

1. **Environment Variables Not Loading**
   - Check variable names match exactly
   - Ensure private variables don't have `NEXT_PUBLIC_` prefix
   - Redeploy after adding new variables

2. **API Route Timeouts**
   - Increase function timeout in `vercel.json`
   - Optimize MiniMax API call performance
   - Consider implementing request queuing

3. **CORS Errors**
   - Verify allowed origins in Firebase Console
   - Check API route headers configuration
   - Ensure proper preflight handling

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies in `package.json`
   - Review build logs for specific errors

## Performance Considerations

- **Cold Starts**: First request may be slower
- **Memory Usage**: Monitor function memory consumption
- **Database Connections**: Implement connection pooling
- **CDN Caching**: Leverage Vercel Edge Network

## Security Best Practices

- Never commit environment variables
- Use Vercel's encrypted environment storage
- Regularly rotate API keys
- Monitor for suspicious API usage
- Implement rate limiting on API routes

## Support

For deployment issues:
1. Check Vercel function logs
2. Review environment variable configuration
3. Verify Firebase project settings
4. Test MiniMax API connectivity