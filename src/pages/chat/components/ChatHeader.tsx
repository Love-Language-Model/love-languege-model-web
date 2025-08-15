interface ChatHeaderProps {
  title?: string;
}

export const ChatHeader = ({ title = 'Hi human, what does love mean to you?' }: ChatHeaderProps) => {
  return (
    <div className="flex-shrink-0 p-8 text-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        {title}
      </h1>
    </div>
  );
};
