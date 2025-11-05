export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Support & FAQ</h1>
          <p className="text-lg text-gray-700 mb-8">
            Find answers to common questions and get help.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">General Questions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Is Viber AI Chatbot free to use?</p>
                  <p className="text-gray-700">A: Yes! The basic features are free. Premium features may be added in the future.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: What browsers are supported?</p>
                  <p className="text-gray-700">A: We support all modern browsers: Chrome, Firefox, Safari, and Edge (latest versions).</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Is my data secure?</p>
                  <p className="text-gray-700">A: Absolutely. We use Firebase authentication and follow security best practices. Your conversations are private.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Can I use this for commercial projects?</p>
                  <p className="text-gray-700">A: Yes, under our MIT license. Check LICENSE file for details.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Account & Authentication</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: How do I reset my password?</p>
                  <p className="text-gray-700">A: Click "Forgot Password" on the login page and follow the email instructions.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Can I use multiple sign-in methods?</p>
                  <p className="text-gray-700">A: Yes, you can link multiple authentication providers to one account.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: How do I delete my account?</p>
                  <p className="text-gray-700">A: Contact support or use the account settings (coming soon).</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Features & Usage</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: What AI model does Viber use?</p>
                  <p className="text-gray-700">A: We use MiniMax AI's latest model for natural conversations.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Can I upload any file type?</p>
                  <p className="text-gray-700">A: We support images (JPG, PNG, GIF), documents (PDF, TXT), and data files (JSON, CSV).</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Is there a message limit?</p>
                  <p className="text-gray-700">A: Currently, no hard limit. Rate limiting may apply to prevent abuse.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Can I export my chat history?</p>
                  <p className="text-gray-700">A: This feature is coming soon!</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Questions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: What technologies power Viber?</p>
                  <p className="text-gray-700">A: Next.js 14, TypeScript, Firebase, MiniMax AI, Tailwind CSS, and more.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Can I self-host Viber?</p>
                  <p className="text-gray-700">A: Yes! Check our deployment documentation.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Is there an API available?</p>
                  <p className="text-gray-700">A: See our <a href="/docs/api-reference" className="text-blue-600 hover:text-blue-800 underline">API Reference</a> for details.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: How do I report a bug?</p>
                  <p className="text-gray-700">A: Create an issue on our <a href="https://github.com/your-username/viber-ai-chatbot/issues" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Privacy & Security</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: What data do you collect?</p>
                  <p className="text-gray-700">A: We collect minimal data: email (for auth), chat history (for functionality). See Privacy Policy.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Do you train on my conversations?</p>
                  <p className="text-gray-700">A: No, your conversations are not used for training AI models.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-800">Q: Is the code open source?</p>
                  <p className="text-gray-700">A: Yes! Check our <a href="https://github.com/your-username/viber-ai-chatbot" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8">Still Have Questions?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Email:</strong> support@viber-ai.example.com</li>
                <li><strong>GitHub Issues:</strong> <a href="https://github.com/your-username/viber-ai-chatbot/issues" className="text-blue-600 hover:text-blue-800 underline">Report a bug</a></li>
                <li><strong>Discord:</strong> Join our community server</li>
                <li><strong>Twitter:</strong> <a href="https://twitter.com/ViberAI" className="text-blue-600 hover:text-blue-800 underline">@ViberAI</a></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Times</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Critical bugs:</strong> 24 hours</li>
                <li><strong>Feature requests:</strong> 1-2 weeks</li>
                <li><strong>General inquiries:</strong> 2-3 business days</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Help Improve This FAQ</h3>
            <p className="text-gray-700 mb-3">Found an answer missing? Let us know!</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Submit a PR to add questions</li>
              <li>Open an issue with suggestions</li>
              <li>Share feedback in Discord</li>
            </ul>
          </div>

          <hr className="border-gray-200 my-6" />
          
          <p className="text-center text-gray-700">
            <strong>Need immediate help?</strong> Check our <a href="/docs/troubleshooting" className="text-blue-600 hover:text-blue-800 underline">Troubleshooting Guide</a>
          </p>
        </article>
      </div>
    </div>
  );
}