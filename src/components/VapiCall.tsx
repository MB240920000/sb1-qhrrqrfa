import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { Phone, PhoneOff, Mic, MicOff } from 'lucide-react';

interface VapiCallProps {
  onClose?: () => void;
}

export default function VapiCall({ onClose }: VapiCallProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    // Initialize Vapi instance
    vapiRef.current = new Vapi("c502214b-f9c0-45b3-80de-a86ac3572569");

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (vapiRef.current && isCallActive) {
        try {
          vapiRef.current.stop();
        } catch (err) {
          console.error('Error stopping call:', err);
        }
      }
    };
  }, []);

  const startCall = async () => {
    if (!vapiRef.current) return;

    try {
      setError(null);
      setIsCallActive(true);

      // Start the call
      await vapiRef.current.start("d764db9c-580d-43de-a52d-cc67cc72450f");

      // Start duration timer
      intervalRef.current = window.setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);

      // Handle call end through vapiRef events
      vapiRef.current.on('end', () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsCallActive(false);
        setCallDuration(0);
      });

      // Handle errors through vapiRef events
      vapiRef.current.on('error', (err: Error) => {
        console.error('Call error:', err);
        setError(err.message || 'An error occurred during the call');
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsCallActive(false);
        setCallDuration(0);
      });

    } catch (err) {
      console.error('Failed to start call:', err);
      setError(err instanceof Error ? err.message : 'Failed to start call');
      setIsCallActive(false);
    }
  };

  const endCall = () => {
    if (!vapiRef.current) return;

    try {
      vapiRef.current.stop();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsCallActive(false);
      setCallDuration(0);
    } catch (err) {
      console.error('Error ending call:', err);
      setError(err instanceof Error ? err.message : 'Failed to end call');
    }
  };

  const toggleMute = () => {
    if (!vapiRef.current) return;

    try {
      if (isMuted) {
        vapiRef.current.unmute();
      } else {
        vapiRef.current.mute();
      }
      setIsMuted(!isMuted);
    } catch (err) {
      console.error('Error toggling mute:', err);
      setError(err instanceof Error ? err.message : 'Failed to toggle mute');
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4">
      <div className="relative max-w-xs sm:max-w-md w-full">
        <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              AI Call Demo
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Experience our AI phone agent in action
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs sm:text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col items-center gap-6">
            {isCallActive && (
              <div className="text-xl sm:text-2xl font-mono text-purple-400">
                {formatDuration(callDuration)}
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMute}
                disabled={!isCallActive}
                className={`p-3 sm:p-4 rounded-full transition-all duration-300 ${
                  !isCallActive ? 'opacity-50 cursor-not-allowed' :
                  isMuted 
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {isMuted ? <MicOff className="w-5 h-5 sm:w-6 sm:h-6" /> : <Mic className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>

              <button
                onClick={isCallActive ? endCall : startCall}
                className={`p-4 sm:p-6 rounded-full transition-all duration-300 ${
                  isCallActive
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-purple-600 text-white hover:bg-purple-500'
                }`}
              >
                {isCallActive ? (
                  <PhoneOff className="w-6 h-6 sm:w-8 sm:h-8" />
                ) : (
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
              </button>
            </div>
          </div>

          {!isCallActive && (
            <div className="mt-6 sm:mt-8 text-center">
              <button
                onClick={onClose}
                className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}