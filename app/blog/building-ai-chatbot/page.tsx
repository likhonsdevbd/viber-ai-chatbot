export default function BuildingAIChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Building an AI-Powered Chatbot with Firebase and MiniMax
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Discover how we built Viber AI Chatbot using cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span><strong>Published:</strong> November 6, 2025</span>
              <span><strong>Author:</strong> Viber Team</span>
            </div>
            <div className="flex gap-2 mt-3">
              {['AI', 'Development', 'Firebase', 'MiniMax', 'Next.js'].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            In the rapidly evolving world of artificial intelligence, creating a chatbot that's both powerful and user-friendly presents unique challenges. In this post, we'll dive deep into how we built Viber AI Chatbot, combining Firebase authentication with MiniMax AI to create a seamless experience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-gray-700 mb-4">
            Our choice of technologies was driven by performance, developer experience, and scalability:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Next.js 14:</strong> For server-side rendering and optimal performance</li>
            <li><strong>TypeScript:</strong> Type safety across the entire application</li>
            <li><strong>Firebase Auth:</strong> Secure, scalable authentication</li>
            <li><strong>MiniMax AI:</strong> Advanced language model with streaming support</li>
            <li><strong>Tailwind CSS:</strong> Rapid UI development</li>
            <li><strong>Framer Motion:</strong> Smooth animations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Real-Time AI Streaming</h3>
          <p className="text-gray-700 mb-4">
            One of our most impressive features is real-time streaming responses. Instead of waiting for the entire response, users see the AI's thoughts unfold character by character.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
              <code>{`const reader = response.body?.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  // Update UI with new content
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Live Code Preview</h3>
          <p className="text-gray-700 mb-4">
            We implemented a secure sandbox for executing user-generated code:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
              <code>{`<iframe
  srcDoc={previewHtml}
  sandbox="allow-scripts"
  className="w-full h-full"
/>`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Firebase Integration</h3>
          <p className="text-gray-700 mb-4">
            Authentication was crucial for security and personalization:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <pre className="text-sm text-gray-800 font-mono overflow-x-auto">
              <code>{`const { signIn, signUp, signInWithGoogle } = useAuth();`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Challenges We Faced</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Building at Scale</h3>
              <p className="text-gray-700">
                Handling streaming responses while maintaining React's rendering optimization required careful state management.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Security Considerations</h3>
              <p className="text-gray-700">
                Executing user-generated code safely meant implementing multiple layers of sandboxing and validation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Optimization</h3>
              <p className="text-gray-700">
                Balancing real-time updates with smooth animations required fine-tuning our render cycles.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lessons Learned</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Start with MVP:</strong> We began with core chat functionality before adding preview features</li>
            <li><strong>User feedback matters:</strong> Early testing revealed the need for better loading states</li>
            <li><strong>TypeScript saves time:</strong> Caught bugs during development instead of production</li>
            <li><strong>Performance budgets:</strong> Setting metrics early prevented bloat</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Next</h2>
          <p className="text-gray-700 mb-2">We're working on:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Voice input support</li>
            <li>Multi-language interface</li>
            <li>Team collaboration features</li>
            <li>Custom AI model selection</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Building Viber AI Chatbot taught us that combining powerful APIs with thoughtful UX creates magic. The key is balancing feature richness with simplicity.
          </p>
          
          <p className="text-gray-700 mb-6">
            Want to try it yourself? <a href="/docs/getting-started" className="text-blue-600 hover:text-blue-800 underline">Get started now</a>
          </p>

          <hr className="border-gray-200 my-6" />
          
          <p className="text-center text-gray-700">
            <strong>Share your thoughts in our <a href="/community" className="text-blue-600 hover:text-blue-800 underline">community</a>!</strong>
          </p>
        </article>
      </div>
    </div>
  );
}