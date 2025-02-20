export default function SellersCard() {
    const sellers = {
      "Signed NDA": [
        { name: "Jason Reed", img: "/port.png" },
        { name: "Kristin Watson", img: "/port.png" },
        { name: "Dianne Russell", img: "/port.png" },
        { name: "Jacob Jones", img: "/port.png" },
      ],
      "Had Intro Call": [
        { name: "Guy Hawkins", img: "/port.png" },
        { name: "Cody Fisher", img: "/port.png" },
        { name: "Ronald Richard", img: "/port.png" },
      ],
      "Received LOI": [
        { name: "Eleanor Pena", img: "/port.png" },
        { name: "Wade Warren", img: "/port.png" },
      ],
      "Closed": [
        { name: "Jenny Wilson", img: "/port.png" },
      ],
    };
  
    return (
      <div className="w-[400px] bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sellers</h2>
          <div className="h-2 w-6 bg-gray-300 rounded-full"></div>
        </div>
  
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 text-sm text-gray-700">
            {Object.entries(sellers).map(([stage, people]) => (
              <div key={stage}>
                <h3 className="font-semibold mb-2 text-[10px]">{stage}</h3>
                <ul className="mb-2">
                  {people.map((seller, index) => (
                    <li key={index} className="flex items-center ">
                      <img src={seller.img} alt={seller.name} className="w-4 h-4 rounded-full mr-2" />
                      <span className="text-[6px]">{seller.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  