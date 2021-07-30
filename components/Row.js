export const Row = ({ name, price }) => (
  <div className="flex-1 justify-between flex bg-gray-200 px-4 py-2 odd:bg-gray-100"> 
    <div className="w-3/4 max-w-3/4">
      <p className="overflow-clip overflow-hidden break-words">{name}</p>
    </div>
    <div>
      <p className="text-right">{price} zł</p>
    </div>
  </div>
);