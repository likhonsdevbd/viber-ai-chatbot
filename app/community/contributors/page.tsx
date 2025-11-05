'use client';

import React from 'react';
import Link from 'next/link';

export default function Contributors() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Community Contributors</h1>
          <p className="text-lg text-gray-600 mb-8">
            Meet the amazing people behind Viber AI Chatbot.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Team</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Project Lead</h3>
                <div className="space-y-2">
                  <p className="text-blue-800">
                    <span className="font-medium">Name:</span> Viber Development Team
                  </p>
                  <p className="text-blue-800">
                    <span className="font-medium">Role:</span> Architecture and Development
                  </p>
                  <p className="text-blue-800">
                    <span className="font-medium">Contribution:</span> Core platform development, AI integration
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contributing</h2>
              <p className="text-gray-700 mb-6">
                We welcome contributions from the community! Here&apos;s how you can help:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Code Contributions</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Bug fixes</li>
                    <li>• New features</li>
                    <li>• Performance improvements</li>
                    <li>• Documentation updates</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Testing</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Report bugs</li>
                    <li>• Test new features</li>
                    <li>• Provide feedback</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Documentation</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Write tutorials</li>
                    <li>• Improve guides</li>
                    <li>• Translate content</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Community Support</h3>
                  <ul className="text-orange-700 space-y-2">
                    <li>• Help other users</li>
                    <li>• Answer questions</li>
                    <li>• Share your projects</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Get Started</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Fork the <a href="https://github.com/your-username/viber-ai-chatbot" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">repository</a></li>
                  <li>Create a feature branch</li>
                  <li>Make your changes</li>
                  <li>Submit a pull request</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contribution Guidelines</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <ul className="text-yellow-800 space-y-2">
                  <li>• Follow our code style guide</li>
                  <li>• Write tests for new features</li>
                  <li>• Update documentation</li>
                  <li>• Keep commits focused and clear</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recognition</h2>
              
              <p className="text-gray-700 mb-4">
                All contributors are recognized in:
              </p>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <ul className="text-indigo-800 space-y-2">
                  <li>• README.md</li>
                  <li>• Release notes</li>
                  <li>• This contributors page</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">GitHub Discussions</h3>
                  <p className="text-gray-600 text-sm">Join technical discussions</p>
                </div>
                
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Discord Server</h3>
                  <p className="text-gray-600 text-sm">Chat with the community</p>
                </div>
                
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Twitter Updates</h3>
                  <p className="text-gray-600 text-sm">Follow our progress</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">Thank You</h2>
              <p className="text-purple-800 mb-4">
                Special thanks to everyone who has contributed to making Viber AI Chatbot better!
              </p>
              
              <div className="text-center">
                <div className="inline-block bg-purple-100 border border-purple-300 rounded-lg p-4">
                  <p className="text-purple-900 font-medium">
                    Ready to contribute? Check out our{' '}
                    <a href="https://github.com/your-username/viber-ai-chatbot" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      GitHub repository
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}