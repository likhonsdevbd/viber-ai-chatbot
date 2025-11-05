export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Getting Started with Viber AI Chatbot</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Welcome to Viber AI Chatbot! This guide will help you get up and running quickly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
          <p className="text-gray-700 mb-4">Before you begin, ensure you have the following installed:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Node.js 18.x or later</li>
            <li>pnpm (recommended) or npm</li>
            <li>Git</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Installation</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Clone the Repository</h3>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono">
              <code>{`git clone https://github.com/your-username/viber-ai-chatbot.git
cd viber-ai-chatbot`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Install Dependencies</h3>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono">
              <code>pnpm install</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Configure Environment Variables</h3>
          <p className="text-gray-700 mb-4">Create a <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file in the root directory:</p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono">
              <code>{`# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# MiniMax AI Configuration
MINIMAX_API_KEY=your_minimax_api_key
MODEL_NAME=minimax-m2
USE_MINIMAX=true`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Run the Development Server</h3>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono">
              <code>pnpm dev</code>
            </pre>
          </div>
          <p className="text-gray-700 mb-6">
            Open <a href="http://localhost:3000" className="text-blue-600 hover:text-blue-800 underline">http://localhost:3000</a> in your browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Sign Up:</strong> Create an account using email/password or Google OAuth</li>
            <li><strong>Start Chatting:</strong> Type a message and interact with the AI</li>
            <li><strong>Upload Files:</strong> Click the paperclip icon to attach files</li>
            <li><strong>View Previews:</strong> Ask the AI to generate code and see live previews</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Explore the <a href="/docs/features" className="text-blue-600 hover:text-blue-800 underline">Features</a> documentation</li>
            <li>Check out the <a href="/docs/api-reference" className="text-blue-600 hover:text-blue-800 underline">API Reference</a></li>
            <li>Read the <a href="/docs/troubleshooting" className="text-blue-600 hover:text-blue-800 underline">Troubleshooting</a> guide</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Join our <a href="/community" className="text-blue-600 hover:text-blue-800 underline">Community</a></li>
            <li>Check the <a href="/community/support" className="text-blue-600 hover:text-blue-800 underline">FAQ</a></li>
            <li>Report issues on <a href="https://github.com/your-username/viber-ai-chatbot/issues" className="text-blue-600 hover:text-blue-800 underline">GitHub</a></li>
          </ul>
        </article>
      </div>
    </div>
  );
}