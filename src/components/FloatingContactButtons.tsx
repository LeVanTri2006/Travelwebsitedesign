import { ImageWithFallback } from './figma/ImageWithFallback';

export function FloatingContactButtons() {
  return (
    <>
      <style>{`
        @keyframes spin-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .rotating-border {
          animation: spin-border 8s linear infinite;
        }
      `}</style>
      
      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-6">
        {/* Support Button */}
        <a
          href="tel:1900XXXX"
          className="group relative w-20 h-20 flex items-center justify-center"
          title="Gọi điện hỗ trợ"
        >
          {/* Rotating dashed border - larger circle */}
          <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-[#0f4c81] rotating-border"></div>
          
          {/* Button content - smaller inner circle */}
          <div className="relative w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 p-2">
            <ImageWithFallback
              src="https://tse2.mm.bing.net/th?id=OIP.sGLGsaO5c5x9or89TTJ6dQAAAA&pid=Api&P=0&h=220"
              alt="Support"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Hotline: 1900 XXXX
          </div>
        </a>

        {/* Zalo Button */}
        <a
          href="https://zalo.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-20 h-20 flex items-center justify-center"
          title="Chat qua Zalo"
        >
          {/* Rotating dashed border - larger circle */}
          <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-[#0f4c81] rotating-border"></div>
          
          {/* Button content - smaller inner circle */}
          <div className="relative w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 p-2">
            <ImageWithFallback
              src="https://tse2.mm.bing.net/th?id=OIP.fwMIZah7Xf94CZUvv_zycwHaHB&pid=Api&P=0&h=220"
              alt="Zalo"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat qua Zalo
          </div>
        </a>
      </div>
    </>
  );
}