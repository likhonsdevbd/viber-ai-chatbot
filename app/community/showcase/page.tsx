'use client';

import React from 'react';
import Link from 'next/link';

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">User Showcase</h1>
          <p className="text-lg text-gray-600 mb-8">
            See what amazing projects our community has built with Viber AI Chatbot.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Projects</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Educational Coding Platform</h3>
                  <p className="text-blue-800 mb-2">
                    <span className="font-medium">Creator:</span> Sarah Johnson
                  </p>
                  <p className="text-blue-700 mb-3">
                    Interactive coding tutor for students learning web development
                  </p>
                  <p className="text-blue-700 mb-4">
                    Sarah integrated Viber&apos;s live preview feature into her online course platform, allowing students to get instant feedback on their code.
                  </p>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-700 bg-blue-100 p-3 rounded">
                    "The live preview feature transformed how I teach. Students can see their code execute in real-time!" - Sarah J.
                  </blockquote>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Customer Support Bot</h3>
                  <p className="text-green-800 mb-2">
                    <span className="font-medium">Creator:</span> TechCorp Solutions
                  </p>
                  <p className="text-green-700 mb-3">
                    AI-powered customer service for e-commerce
                  </p>
                  <p className="text-green-700 mb-4">
                    TechCorp built a custom chatbot using Viber&apos;s API to handle 80% of customer inquiries automatically.
                  </p>
                  <blockquote className="border-l-4 border-green-400 pl-4 italic text-green-700 bg-green-100 p-3 rounded">
                    "We reduced response time by 75% and improved customer satisfaction significantly." - TechCorp Team
                  </blockquote>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">Content Creation Assistant</h3>
                  <p className="text-purple-800 mb-2">
                    <span className="font-medium">Creator:</span> Marcus Lee
                  </p>
                  <p className="text-purple-700 mb-3">
                    AI writing companion for bloggers and marketers
                  </p>
                  <p className="text-purple-700 mb-4">
                    Marcus uses Viber to brainstorm ideas, generate outlines, and get writing suggestions for his blog.
                  </p>
                  <blockquote className="border-l-4 border-purple-400 pl-4 italic text-purple-700 bg-purple-100 p-3 rounded">
                    "This tool is like having a writing partner available 24/7. Game changer for content creators!" - Marcus L.
                  </blockquote>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">Code Review Helper</h3>
                  <p className="text-orange-800 mb-2">
                    <span className="font-medium">Creator:</span> DevTeam Pro
                  </p>
                  <p className="text-orange-700 mb-3">
                    AI-assisted code review and debugging
                  </p>
                  <p className="text-orange-700 mb-4">
                    The team integrated Viber into their development workflow for quick code reviews and debugging assistance.
                  </p>
                  <blockquote className="border-l-4 border-orange-400 pl-4 italic text-orange-700 bg-orange-100 p-3 rounded">
                    "Our team&apos;s productivity increased by 30%. The AI catches issues we might have missed." - DevTeam Pro
                  </blockquote>
                </div>
              </div>
            </section>

            <section className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Share Your Project</h2>
              <p className="text-indigo-800 mb-6">
                We&apos;d love to feature your work!
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">How to Submit</h3>
                <ol className="list-decimal list-inside text-indigo-700 space-y-2 mb-4">
                  <li>Fill out the <a href="https://forms.example.com/showcase" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">submission form</a></li>
                  <li>Include:</li>
                </ol>
                <ul className="list-disc list-inside text-indigo-700 space-y-1 ml-6">
                  <li>Project name and description</li>
                  <li>Your name and website/social</li>
                  <li>Screenshots or demo video</li>
                  <li>How you used Viber AI Chatbot</li>
                  <li>Testimonial (optional)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Selection Criteria</h3>
                <ul className="list-disc list-inside text-indigo-700 space-y-1">
                  <li>Innovative use of Viber features</li>
                  <li>Clear impact or value</li>
                  <li>Quality of implementation</li>
                  <li>Community benefit</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Community Stats</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-800">50,000+</div>
                  <div className="text-blue-600">Active Users</div>
                </div>
                
                <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-800">1,200+</div>
                  <div className="text-green-600">Projects Built</div>
                </div>
                
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-800">75+</div>
                  <div className="text-purple-600">Countries</div>
                </div>
                
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-800">4.8/5</div>
                  <div className="text-orange-600">Average Rating</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Success Stories</h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Individual Developers</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• <strong>10,000+ hours</strong> saved in development time</li>
                    <li>• <strong>500+ apps</strong> built and deployed</li>
                    <li>• <strong>95% satisfaction</strong> rate</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Businesses</h3>
                  <ul className="text-pink-700 space-y-2">
                    <li>• <strong>300+ companies</strong> using Viber in production</li>
                    <li>• <strong>$2M+ revenue</strong> generated by user projects</li>
                    <li>• <strong>85% retention</strong> rate</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">Educators</h3>
                  <ul className="text-teal-700 space-y-2">
                    <li>• <strong>5,000+ students</strong> learning with Viber</li>
                    <li>• <strong>100+ courses</strong> integrated</li>
                    <li>• <strong>98% recommendation</strong> rate</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Inspired</h2>
              <p className="text-gray-700 mb-4">
                Browse more community creations:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li>
                  <a href="https://github.com/topics/viber-ai-chatbot" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub Topic: viber-ai-chatbot
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/viber" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Discord Showcase Channel
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hashtag/ViberBuilds" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Twitter #ViberBuilds
                  </a>
                </li>
              </ul>
              
              <div className="text-center">
                <div className="inline-block bg-white border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-800 font-medium">
                    Ready to build something amazing? <Link href="/docs/getting-started" className="text-blue-600 hover:underline">Get Started</Link>
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