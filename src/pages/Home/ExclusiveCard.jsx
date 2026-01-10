

export default function ExclusiveCard({ card }) {
  return (
    <div className="p-2 rounded-xl font-poppins">
      <div className="w-full sm:w-[320px] lg:w-[360px] bg-white rounded-2xl shadow-md overflow-hidden p-2">
        
        <div className={`h-[120px] ${card.bg} text-white flex rounded-xl`}>
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-lg font-semibold">{card.title}</h3>

            {card.span && (
              <span className="text-xl font-bold">{card.span}</span>
            )}

            <p className="text-sm opacity-90">{card.subtitle}</p>

            {card.code && (
              <div className="border-2 border-dashed rounded-md mt-2 px-2 py-1">
                <span className="text-xs">{card.codespan}</span>
                <span className="text-sm font-semibold ml-1">
                  {card.code}
                </span>
              </div>
            )}
          </div>

          <div className="w-1/2">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-tl-2xl rounded-r-xl"
            />
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-700 font-semibold">
            {card.description}
          </p>
          <p className="text-xs text-gray-500 mt-2">{card.validity}</p>
        </div>
      </div>
    </div>
  );
}
