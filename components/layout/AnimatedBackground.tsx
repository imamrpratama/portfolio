export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#d6d3d1_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
      {/* Soft pastel washes */}
      <div className="absolute w-[500px] h-[500px] bg-orange-200 rounded-full blur-[140px] opacity-50 animate-blob top-0 -left-32" />
      <div className="absolute w-[500px] h-[500px] bg-sky-200 rounded-full blur-[140px] opacity-40 animate-blob animation-delay-2000 top-1/2 -right-32" />
      <div className="absolute w-[500px] h-[500px] bg-amber-100 rounded-full blur-[140px] opacity-50 animate-blob animation-delay-4000 bottom-0 left-1/3" />
    </div>
  );
};
