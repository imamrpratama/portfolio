export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-blob top-0 -left-32" />
      <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-blob animation-delay-2000 top-1/2 -right-32" />
      <div className="absolute w-[600px] h-[600px] bg-violet-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-blob animation-delay-4000 bottom-0 left-1/3" />
    </div>
  );
};
