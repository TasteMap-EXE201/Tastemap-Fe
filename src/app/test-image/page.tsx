"use client";

import React from "react";
import Image from "next/image";

const TestImagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Test Image Loading</h1>

      {/* Test 1: Direct img tag */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Test 1: Direct img tag</h2>
        <img
          src="/images/hero-banner.png"
          alt="Hero Banner Test"
          className="w-96 h-64 object-cover border"
        />
      </div>

      {/* Test 2: Next.js Image component */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Test 2: Next.js Image component
        </h2>
        <div className="relative w-96 h-64 border">
          <Image
            src="/images/hero-banner.png"
            alt="Hero Banner Next Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Test 3: CSS Background */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Test 3: CSS Background</h2>
        <div
          className="w-96 h-64 border bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-banner.png')`,
          }}
        ></div>
      </div>

      {/* Test 4: Footer CTA Image */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Test 4: Footer CTA Image</h2>
        <img
          src="/images/footer-cta.png"
          alt="Footer CTA Test"
          className="w-96 h-64 object-cover border"
        />
      </div>
    </div>
  );
};

export default TestImagePage;
