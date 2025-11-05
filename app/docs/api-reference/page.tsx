'use client';

import React from 'react';
import Link from 'next/link';

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h1>
          <p className="text-lg text-gray-600 mb-8">
            Complete API documentation for Viber AI Chatbot.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">REST API Endpoints</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">POST /api/chat</h3>
                <p className="text-gray-700 mb-4">
                  Send messages to the AI and receive streaming responses.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body:</h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "messages": [
    {
      "role": "user",
      "content": "Hello, how can you help me?"
    }
  ]
}`}
                  </pre>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                  <p className="text-gray-700 mb-2">Streaming text/event-stream with JSON chunks:</p>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "choices": [
    {
      "delta": {
        "content": "Hello! I can help you..."
      }
    }
  ]
}`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Status Codes:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 200: Success</li>
                    <li>• 400: Bad Request (invalid message format)</li>
                    <li>• 500: Internal Server Error</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">POST /api/upload</h3>
                <p className="text-gray-700 mb-4">
                  Upload files to the chat.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Request:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Content-Type: multipart/form-data</li>
                    <li>• Body: FormData with &apos;file&apos; field</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "success": true,
  "file": {
    "name": "document.pdf",
    "type": "application/pdf",
    "size": 12345,
    "id": "file_1234567890"
  }
}`}
                  </pre>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Supported File Types:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Images: jpg, jpeg, png, gif, webp</li>
                    <li>• Documents: pdf, txt, json, csv</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-gray-700">
                    <strong>File Size Limit:</strong> 10MB
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">POST /api/preview</h3>
                <p className="text-gray-700 mb-4">
                  Generate live preview from code.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body:</h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "code": "<div>Hello World</div>",
  "type": "html"
}`}
                  </pre>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`{
  "success": true,
  "html": "<!DOCTYPE html>..."
}`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Supported Types:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• html</li>
                    <li>• javascript</li>
                    <li>• react</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Authentication</h2>
              <p className="text-gray-700 mb-4">
                All authenticated requests require a valid Firebase authentication token.
              </p>
              
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`import { getAuth } from 'firebase/auth';

const auth = getAuth();
const user = auth.currentUser;
const token = await user?.getIdToken();`}
              </pre>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rate Limits</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Chat API: 60 requests per minute</li>
                <li>• Upload API: 10 requests per minute</li>
                <li>• Preview API: 30 requests per minute</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Error Handling</h2>
              <p className="text-gray-700 mb-4">
                All API errors follow this format:
              </p>
              
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto mb-4">
{`{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}`}
              </pre>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Common Error Codes:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">INVALID_REQUEST</code>: Request validation failed</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">AUTHENTICATION_REQUIRED</code>: User not authenticated</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">RATE_LIMIT_EXCEEDED</code>: Too many requests</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">INTERNAL_ERROR</code>: Server error</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}