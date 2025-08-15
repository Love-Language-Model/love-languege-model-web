import { Eye, Heart, Star, UserPlus } from 'lucide-react';

const LoveTokens = () => {
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
          <div className="flex-shrink-0">
            <Star className="w-10 h-10 text-[#FFA726] bg-[#FFF3E0] p-2 rounded-full" />
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
              <div className="flex-shrink-0">
                <Eye className="w-10 h-10 text-[#2196F3] bg-[#E3F2FD] p-2 rounded-full" />
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
              <div className="flex-shrink-0">
                <Heart className="w-10 h-10 text-[#E91E63] bg-[#FCE4EC] p-2 rounded-full" />
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
              <div className="flex-shrink-0">
                <UserPlus className="w-10 h-10 text-[#F44336] bg-[#FFEBEE] p-2 rounded-full" />
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

export default LoveTokens;