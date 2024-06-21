import React, { useEffect, useState } from 'react';

interface Car {
  carBrand: string;
}

interface CarsFiltersOptionProps {
  carsList: Car[];
  setBrand: (brand: string) => void;
  orderCarList: (order: number) => void;
}

const CarsFiltersOption: React.FC<CarsFiltersOptionProps> = ({ carsList, setBrand, orderCarList }) => {
  const [brandList, setBrandList] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<string>("Prices");

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const brandSet = new Set<string>();
    carsList.forEach((element) => {
      brandSet.add(element.carBrand);
    });
    setBrandList(Array.from(brandSet));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;
    setSelectedBrand(selectedBrand);
    if (selectedBrand === "all") {
      setBrand("");
    } else {
      setBrand(selectedBrand);
    }
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = e.target.value;
    setSelectedOrder(selectedOrder);
    orderCarList(parseInt(selectedOrder));
  };

  return (
      <div className='mt-10 flex items-center justify-between'>
        <div>
          <h2 className='text-[30px] text-white font-bold'>Cars Catalog</h2>
          <h2 className='text-white'>Explore our cars you might like</h2>
        </div>
        <div className='flex gap-5'>
          <select
              className="select select-bordered w-full max-w-xs text-white"
              value={selectedOrder}
              onChange={handleOrderChange}
          >
            <option value="Prices">Price</option>
            <option value="-1">Min to Max</option>
            <option value="1">Max To Min</option>
          </select>
          <select
              className="select select-bordered w-full md:block max-w-xs text-white"
              value={selectedBrand}
              onChange={handleBrandChange}
          >
            <option value="all">Manufactural</option>
            {brandList.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>
  );
}

export default CarsFiltersOption;
