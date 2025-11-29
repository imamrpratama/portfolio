export const portfolioStyles = `
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes scroll-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  scrollbar-gutter: stable;
}

/* Sleek custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.4);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgb(99, 102, 241), rgb(139, 92, 246));
  border-radius: 10px;
  border: 2px solid rgba(15, 23, 42, 0.4);
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, rgb(79, 70, 229), rgb(124, 58, 237));
  border: 2px solid rgba(15, 23, 42, 0.2);
}

/* Scroll progress indicator */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, rgb(99, 102, 241), rgb(139, 92, 246), rgb(99, 102, 241));
  transform-origin: left;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}
`;
