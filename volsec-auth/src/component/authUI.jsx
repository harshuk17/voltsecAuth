import React, { useState } from "react";
import { Brain, ShieldCheck, Gauge } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

export default function VoltSecLogin() {
  const [activeTab, setActiveTab] = useState("login");
  const { loginWithRedirect } = useAuth0();

  const handleSocialLogin = (connection) => {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
      authorizationParams: {
        connection: connection,
      },
    });
  };


  return (
    <div className="min-h-screen bg-[#14138A] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding */}
        <div className="text-white space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">VoltSec.io</h1>
            <h2 className="text-3xl font-bold mb-2">
              Deep Learning Meets Cybersecurity
            </h2>
            <p className="text-xl text-blue-200">
              Pentest Smarter. Defend Faster.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <span className="text-lg">
                AI-Powered Vulnerability Detection
              </span>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <span className="text-lg">Automated Penetration Testing</span>
            </div>
            <div className="flex items-start gap-3">
              <Gauge className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <span className="text-lg">Real-time Threat Intelligence</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-[#12155C] bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-cyan-500/50">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "login"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "signup"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Continue With Section */}
          <div className="space-y-4 mb-6">
            <p className="text-slate-400 text-sm text-center mb-4">
              CONTINUE WITH
            </p>

            <button onClick={()=>handleSocialLogin('google-oauth2')} className="w-full bg-[#141A64] hover:bg-[#141A40] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span>Continue with Google</span>
            </button>

            <button onClick={()=>handleSocialLogin('linkedin')}  className="w-full bg-[#141A64] hover:bg-[#141A40] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
              <span>Continue with LinkedIn</span>
            </button>

            <button onClick={() => handleSocialLogin('github')} className="w-full bg-[#141A64] hover:bg-[#141A40] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Continue with GitHub</span>
            </button>

            <button onClick={() => handleSocialLogin('windowslive')} className="w-full bg-[#141A64] hover:bg-[#141A40] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ff5722"
                  d="M6 6H22V22H6z"
                  transform="rotate(-180 14 14)"
                ></path>
                <path
                  fill="#4caf50"
                  d="M26 6H42V22H26z"
                  transform="rotate(-180 34 14)"
                ></path>
                <path
                  fill="#ffc107"
                  d="M26 26H42V42H26z"
                  transform="rotate(-180 34 34)"
                ></path>
                <path
                  fill="#03a9f4"
                  d="M6 26H22V42H6z"
                  transform="rotate(-180 14 34)"
                ></path>
              </svg>
              <span>Continue with Microsoft</span>
            </button>

            <button onClick={() => handleSocialLogin('bitbucket')} className="w-full bg-[#141A64] hover:bg-[#141A40] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="24" /* Set smaller width */
                height="24" /* Set smaller height */
              >
                <defs>
                  <linearGradient
                    id="bitbucket-original-a"
                    gradientUnits="userSpaceOnUse"
                    x1="28.593"
                    y1="14.226"
                    x2="16.672"
                    y2="23.532"
                    gradientTransform="scale(4)"
                  >
                    <stop offset=".176" stopColor="#0052cc" />
                    <stop offset="1" stopColor="#2684ff" />
                  </linearGradient>
                </defs>
                <path
                  d="M19.082 20c-1.918 0-3.355 1.758-3.039 3.516l12.95 79.289c.32 2.078 2.077 3.515 4.155 3.515h62.66c1.442 0 2.72-1.12 3.04-2.558l13.109-80.086c.316-1.918-1.121-3.516-3.039-3.516zM74.07 77.227H54.09l-5.278-28.293h30.215zm0 0"
                  fill="#2684ff"
                />
                <path
                  d="M107.64 48.934H78.868L74.07 77.227H54.09l-23.5 27.972s1.12.961 2.719.961h62.66c1.441 0 2.719-1.12 3.039-2.558zm0 0"
                  fill="url(#bitbucket-original-a)"
                />
              </svg>

              <span>Continue with Bitbucket</span>
            </button>
          </div>

          {/* Access Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-all shadow-lg">
            Access VoltSec
          </button>

          {/* Terms */}
          <p className="text-slate-400 text-xs text-center mt-6">
            By continuing, you agree to our{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
