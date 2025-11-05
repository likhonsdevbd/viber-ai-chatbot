export default function LivePreviewFeaturePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Introducing Live Code Preview: See Your Ideas Come to Life
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Learn about our new live preview feature that lets you execute code in real-time.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span><strong>Published:</strong> November 5, 2025</span>
              <span><strong>Author:</strong> Viber Team</span>
            </div>
            <div className="flex gap-2 mt-3">
              {['Features', 'Code Preview', 'Updates'].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Power of Instant Feedback</h2>
          <p className="text-gray-700 mb-6">
            We're excited to announce our live code preview feature - a game-changer for developers and learners alike!
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Is Live Preview?</h2>
          <p className="text-gray-700 mb-6">
            Live Preview lets you see HTML, JavaScript, and React code execute in real-time within a secure sandbox environment.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Auto-Detection:</strong> Code blocks are automatically detected in AI responses</li>
            <li><strong>Multiple Formats:</strong> Support for HTML, JavaScript, and React</li>
            <li><strong>Secure Execution:</strong> Sandboxed iframe prevents malicious code</li>
            <li><strong>Instant Updates:</strong> Preview updates as the AI generates code</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">When the AI generates code, our system:</p>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-1">
            <li>Detects code blocks using regex patterns</li>
            <li>Generates a secure HTML document</li>
            <li>Renders it in an isolated iframe</li>
            <li>Provides clear/reset functionality</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example Use Cases</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Learning HTML:</h4>
              <div className="bg-gray-100 rounded-lg p-4">
                <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
                  <code>{`<div class="card">
  <h2>Hello World</h2>
  <p>My first web page!</p>
</div>`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Testing JavaScript:</h4>
              <div className="bg-gray-100 rounded-lg p-4">
                <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
                  <code>{`console.log('Testing array methods');
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Building UI Components:</h4>
              <div className="bg-gray-100 rounded-lg p-4">
                <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
                  <code>{`function Button({ children }) {
  return (
    <button className="btn-primary">
      {children}
    </button>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Security First</h2>
          <p className="text-gray-700 mb-2">We take security seriously:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Sandboxed iframe execution</li>
            <li>Content Security Policy headers</li>
            <li>No access to parent window</li>
            <li>Isolated execution context</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Performance Optimizations</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Lazy loading of preview content</li>
            <li>Efficient re-rendering</li>
            <li>Minimal memory footprint</li>
            <li>Fast iframe initialization</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Users Are Saying</h2>
          <div className="space-y-4 mb-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              "The live preview changed how I learn web development. Seeing code execute instantly is incredible!" - Sarah K.
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              "As an educator, this helps me demonstrate concepts in real-time during lessons." - Michael R.
            </blockquote>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Try It Now</h2>
          <p className="text-gray-700 mb-2">Ask the AI to generate:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>"Create a responsive card component"</li>
            <li>"Show me a gradient background example"</li>
            <li>"Build a simple counter in JavaScript"</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Future Enhancements</h2>
          <p className="text-gray-700 mb-2">We're planning:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>CSS preprocessor support</li>
            <li>npm package imports</li>
            <li>Multi-file projects</li>
            <li>Preview sharing</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Live Preview represents our commitment to making AI interactions more visual and interactive. We can't wait to see what you build!
          </p>

          <div className="text-center">
            <a 
              href="/docs/getting-started" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start creating
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}