export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Features Overview</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Discover the powerful features of Viber AI Chatbot.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Core Features</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Chat</h3>
              <p className="text-gray-700 mb-4">
                Engage in natural conversations with our advanced AI powered by MiniMax technology.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Capabilities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Real-time streaming responses</li>
                  <li>Context-aware conversations</li>
                  <li>Multi-turn dialogue support</li>
                  <li>Code generation and explanation</li>
                  <li>Natural language understanding</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Firebase Authentication</h3>
              <p className="text-gray-700 mb-4">
                Secure, reliable authentication system with multiple sign-in methods.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Supported Methods:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Email and password</li>
                  <li>Google OAuth</li>
                  <li>Session management</li>
                  <li>Protected routes</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Live Code Preview</h3>
              <p className="text-gray-700 mb-4">
                See your code come to life instantly with our integrated preview system.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>HTML rendering</li>
                  <li>JavaScript execution</li>
                  <li>React component preview</li>
                  <li>Secure sandbox environment</li>
                  <li>Auto-detection of code blocks</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">File Upload</h3>
              <p className="text-gray-700 mb-4">
                Share documents and images directly in your conversations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Supported Formats:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Images (JPG, PNG, GIF, WebP)</li>
                    <li>Documents (PDF, TXT)</li>
                    <li>Data files (JSON, CSV)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">File Management:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Drag and drop support</li>
                    <li>File preview</li>
                    <li>Size validation (up to 10MB)</li>
                    <li>Secure storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8">Advanced Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Split-Panel Interface</h3>
              <p className="text-gray-700 text-sm mb-2">Work efficiently with our dual-panel layout:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Chat panel on the left</li>
                <li>Live preview panel on the right</li>
                <li>Responsive design for all screen sizes</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Message History</h3>
              <p className="text-gray-700 text-sm mb-2">Your conversations are preserved:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Persistent chat history</li>
                <li>Timestamp tracking</li>
                <li>Easy navigation through past messages</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Streaming Responses</h3>
              <p className="text-gray-700 text-sm mb-2">Experience smooth, real-time AI responses:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Character-by-character streaming</li>
                <li>Loading indicators</li>
                <li>Cancellation support</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Handling</h3>
              <p className="text-gray-700 text-sm mb-2">Robust error management:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>User-friendly error messages</li>
                <li>Automatic retry logic</li>
                <li>Connection status indicators</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Voice input support</li>
                <li>Multi-language support</li>
                <li>Export chat history</li>
                <li>Custom AI model selection</li>
                <li>Team collaboration features</li>
                <li>API webhooks</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fast page loads</li>
                <li>Optimized bundle size</li>
                <li>Efficient caching</li>
                <li>CDN-optimized assets</li>
                <li>Server-side rendering</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}