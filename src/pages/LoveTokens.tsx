export function LoveTokens() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      <div>
        <h2 className="text-2xl font-semibold mb-4">MY LOVE TOKENS</h2>
        <p className="text-gray-600 mb-6">
          These tokens represent your contributions. As the AI learns the essence of love, it will
          decide how we can start using these tokens of love.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">BALANCE</h3>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg flex items-center justify-between w-full sm:w-auto">
          <div className="bg-yellow-400 p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-3xl font-bold">07</span>
            <p className="text-gray-500">time tokens</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">TIMELINE</h3>
        <div className="space-y-4">
          <div className="bg-[#FBE19F] rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="bg-blue-500 p-2 rounded-full w-fit">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold">Conversation on Universal Love</h4>
                <p className="text-sm text-gray-600 break-words">I believe love is a form of energy that moves the world...</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded whitespace-nowrap">01</span>
                <p className="text-xs text-gray-500 mt-1">01/09/2024</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FBE19F] rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="bg-pink-500 p-2 rounded-full w-fit">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold">Conversation on Self-love</h4>
                <p className="text-sm text-gray-600 break-words">The ways I love myself is following my dreams...</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded whitespace-nowrap">01</span>
                <p className="text-xs text-gray-500 mt-1">01/08/2024</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FBE19F] rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="bg-red-500 p-2 rounded-full w-fit">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold">Invitation to Laura Wiston</h4>
                <p className="text-sm text-gray-600 break-words">Thank you for inviting new friends to join us.</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded whitespace-nowrap">01</span>
                <p className="text-xs text-gray-500 mt-1">28/07/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 