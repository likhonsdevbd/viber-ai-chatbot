'use client';

import React from 'react';
import Link from 'next/link';

export default function Troubleshooting() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h1>
          <p className="text-lg text-gray-600 mb-8">
            Common issues and solutions for Viber AI Chatbot.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Authentication Issues</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Cannot Sign In with Email/Password</h3>
                
                <div className="mb-4">
                  <p className="text-red-700 font-medium mb-2">Problem:</p>
                  <p className="text-red-700">Login fails with incorrect credentials error.</p>
                </div>
                
                <div>
                  <p className="text-red-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-red-700 space-y-1">
                    <li>Verify email and password are correct</li>
                    <li>Check if email is verified (check inbox)</li>
                    <li>Try password reset if needed</li>
                    <li>Clear browser cache and cookies</li>
                    <li>Disable browser extensions</li>
                  </ol>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Google OAuth Not Working</h3>
                
                <div className="mb-4">
                  <p className="text-yellow-700 font-medium mb-2">Problem:</p>
                  <p className="text-yellow-700">Google sign-in button doesn&apos;t respond or fails.</p>
                </div>
                
                <div>
                  <p className="text-yellow-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-yellow-700 space-y-1">
                    <li>Check popup blockers (allow popups for this site)</li>
                    <li>Ensure third-party cookies are enabled</li>
                    <li>Try a different browser</li>
                    <li>Check Firebase console for OAuth configuration</li>
                  </ol>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Session Expires Frequently</h3>
                
                <div className="mb-4">
                  <p className="text-orange-700 font-medium mb-2">Problem:</p>
                  <p className="text-orange-700">User gets logged out unexpectedly.</p>
                </div>
                
                <div>
                  <p className="text-orange-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-orange-700 space-y-1">
                    <li>Check browser cookie settings</li>
                    <li>Ensure "Remember me" is enabled</li>
                    <li>Check Firebase token expiration settings</li>
                    <li>Clear site data and re-login</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Chat Issues</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">AI Not Responding</h3>
                
                <div className="mb-4">
                  <p className="text-blue-700 font-medium mb-2">Problem:</p>
                  <p className="text-blue-700">Messages sent but no AI response received.</p>
                </div>
                
                <div>
                  <p className="text-blue-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-blue-700 space-y-1">
                    <li>Check internet connection</li>
                    <li>Verify API key is configured correctly</li>
                    <li>Check browser console for errors</li>
                    <li>Try refreshing the page</li>
                    <li>Check API rate limits</li>
                  </ol>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Streaming Response Interrupted</h3>
                
                <div className="mb-4">
                  <p className="text-purple-700 font-medium mb-2">Problem:</p>
                  <p className="text-purple-700">AI response cuts off mid-sentence.</p>
                </div>
                
                <div>
                  <p className="text-purple-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-purple-700 space-y-1">
                    <li>Check network stability</li>
                    <li>Increase timeout settings</li>
                    <li>Try shorter prompts</li>
                    <li>Check server logs for errors</li>
                  </ol>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Messages Not Displaying</h3>
                
                <div className="mb-4">
                  <p className="text-indigo-700 font-medium mb-2">Problem:</p>
                  <p className="text-indigo-700">Chat interface is blank or messages don&apos;t appear.</p>
                </div>
                
                <div>
                  <p className="text-indigo-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-indigo-700 space-y-1">
                    <li>Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)</li>
                    <li>Clear browser cache</li>
                    <li>Check browser console for JavaScript errors</li>
                    <li>Disable ad blockers</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">File Upload Issues</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Upload Fails</h3>
                
                <div className="mb-4">
                  <p className="text-green-700 font-medium mb-2">Problem:</p>
                  <p className="text-green-700">File upload button doesn&apos;t work or upload fails.</p>
                </div>
                
                <div>
                  <p className="text-green-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-green-700 space-y-1">
                    <li>Check file size (max 10MB)</li>
                    <li>Verify file type is supported</li>
                    <li>Try a different file</li>
                    <li>Check browser permissions</li>
                    <li>Check network connection</li>
                  </ol>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">File Preview Not Showing</h3>
                
                <div className="mb-4">
                  <p className="text-teal-700 font-medium mb-2">Problem:</p>
                  <p className="text-teal-700">Uploaded file doesn&apos;t display in chat.</p>
                </div>
                
                <div>
                  <p className="text-teal-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-teal-700 space-y-1">
                    <li>Check file format compatibility</li>
                    <li>Try re-uploading the file</li>
                    <li>Clear browser cache</li>
                    <li>Check console for errors</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preview Panel Issues</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Live Preview Not Rendering</h3>
                
                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">Problem:</p>
                  <p className="text-gray-700">Code preview panel stays blank.</p>
                </div>
                
                <div>
                  <p className="text-gray-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Check if code block is properly formatted</li>
                    <li>Verify code syntax is correct</li>
                    <li>Try the "Generate Sample Preview" button</li>
                    <li>Check browser console for errors</li>
                    <li>Disable browser security extensions</li>
                  </ol>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Preview Shows Errors</h3>
                
                <div className="mb-4">
                  <p className="text-slate-700 font-medium mb-2">Problem:</p>
                  <p className="text-slate-700">Preview panel displays error messages.</p>
                </div>
                
                <div>
                  <p className="text-slate-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-slate-700 space-y-1">
                    <li>Check code syntax</li>
                    <li>Verify all required libraries are included</li>
                    <li>Check browser compatibility</li>
                    <li>Review code in browser dev tools</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Performance Issues</h2>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Slow Page Load</h3>
                
                <div>
                  <p className="text-emerald-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-emerald-700 space-y-1">
                    <li>Clear browser cache</li>
                    <li>Disable unnecessary extensions</li>
                    <li>Check internet speed</li>
                    <li>Try a different browser</li>
                    <li>Check system resources</li>
                  </ol>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">High Memory Usage</h3>
                
                <div>
                  <p className="text-cyan-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-cyan-700 space-y-1">
                    <li>Close unused tabs</li>
                    <li>Restart browser</li>
                    <li>Clear chat history</li>
                    <li>Disable heavy extensions</li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Build and Deployment Issues</h2>
              
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-rose-800 mb-3">Build Fails on Vercel</h3>
                
                <div className="mb-4">
                  <p className="text-rose-700 font-medium mb-2">Problem:</p>
                  <p className="text-rose-700">Deployment fails with build errors.</p>
                </div>
                
                <div>
                  <p className="text-rose-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-rose-700 space-y-1">
                    <li>Check environment variables are set</li>
                    <li>Verify all dependencies are listed in package.json</li>
                    <li>Check Node.js version compatibility</li>
                    <li>Review build logs for specific errors</li>
                  </ol>
                </div>
              </div>

              <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-violet-800 mb-3">Environment Variables Not Working</h3>
                
                <div className="mb-4">
                  <p className="text-violet-700 font-medium mb-2">Problem:</p>
                  <p className="text-violet-700">App can&apos;t access environment variables.</p>
                </div>
                
                <div>
                  <p className="text-violet-700 font-medium mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside text-violet-700 space-y-1">
                    <li>Ensure variables are prefixed with NEXT_PUBLIC_ for client-side</li>
                    <li>Verify variables are set in Vercel dashboard</li>
                    <li>Redeploy after setting variables</li>
                    <li>Check .env.local file format</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Still Need Help?</h2>
              
              <p className="text-blue-800 mb-4">
                If you&apos;re still experiencing issues:
              </p>
              
              <ol className="list-decimal list-inside text-blue-800 space-y-2 mb-6">
                <li>Check our <Link href="/community/support" className="text-blue-600 hover:underline">FAQ</Link></li>
                <li>Search <a href="https://github.com/your-username/viber-ai-chatbot/issues" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
                <li>Join our <Link href="/community" className="text-blue-600 hover:underline">Community</Link></li>
                <li>Contact support</li>
              </ol>
              
              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="text-blue-900 font-medium mb-2">When reporting an issue, please include:</p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Browser and version</li>
                  <li>Operating system</li>
                  <li>Steps to reproduce</li>
                  <li>Error messages (from browser console)</li>
                  <li>Screenshots if applicable</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}