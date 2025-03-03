import React, { useState } from 'react';
import products_store from "../../../store/products_store"



import opened_pointer from '../../../images/opened_pointer.png'
import closed_pointer from '../../../images/closed_pointer.png'
// import '../../../pages/FilteredProducts'

import { observer } from 'mobx-react-lite';

const MotherboardFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [msiMotherboards, setMsiMotherboards] = useState(products_store.msi_motherboard)

  const [selectedChipsets, setSelectedChipsets] = useState([]);
  const [selectedRamTypes, setSelectedRamTypes] = useState([]);
  const [selectedSocket, setSelectedSocket] = useState([])

  const [activeCollapsChipsets, setActiveCollapsChipsets] = useState(false);
  const [activeCollapsRamTypes, setActiveCollapsRamTypes] = useState(false);
  const [activeCollapsSocket, setActiveCollapsSocket] = useState(false)

  const [value,setValue] = useState("")

  const handleCheckboxChange = (category, value, setSelectedCategories) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== value));
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
    products_store.counter += 1
  };

  // products_store.filteredProductsArr = msiMotherboards.filter((product) => {
  //   return product.name.toLowerCase().includes(value.toLowerCase())
  // })


  products_store.filteredProductsArr = msiMotherboards.filter((item) => {
    const isChipsetSelected = selectedChipsets.length === 0 || selectedChipsets.includes(item.characteristic.chipset);
    const isRamTypeSelected = selectedRamTypes.length === 0 || selectedRamTypes.includes(item.characteristic.type_ram);
    const isSocketSelected = selectedSocket.length == 0 || selectedSocket.includes(item.characteristic.socket)

    const inputChange = item.name.toLowerCase().includes(value.toLowerCase())


    return isChipsetSelected && isRamTypeSelected && isSocketSelected && inputChange;
  });

  return (
    <div>
      <div>
        <input onChange={(event) => setValue(event.target.value)}/>dsfg
        <button class={activeCollapsChipsets ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsChipsets(!activeCollapsChipsets)}><h2>Chipset</h2><img src={activeCollapsChipsets ? opened_pointer : closed_pointer} /></button>
        <div class={activeCollapsChipsets ? "content activeContent" : "content"}>
          {Array.from(new Set(msiMotherboards.map((item) => item.characteristic.chipset))).map((chipset) => (
            <label key={chipset}>
              <ul>
                <li>            <input
                  type="checkbox"
                  value={chipset}
                  checked={selectedChipsets.includes(chipset)}
                  onChange={() => handleCheckboxChange('chipset', chipset, setSelectedChipsets)}
                />
                  {chipset}</li>
              </ul>

            </label>
          ))}
        </div>
        


        <button class={activeCollapsRamTypes ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsRamTypes(!activeCollapsRamTypes)}><h2>RAM Type</h2><img src={activeCollapsRamTypes ? opened_pointer : closed_pointer} /></button>
        <div class={activeCollapsRamTypes ? "content activeContent" : "content"}>
          {Array.from(new Set(msiMotherboards.map((item) => item.characteristic.type_ram))).map((ramType) => (
            <label key={ramType}>
              <ul>
                <li style={{ listStyleType: 'none' }}>
                  <input
                    type="checkbox"
                    value={ramType}
                    checked={selectedRamTypes.includes(ramType)}
                    onChange={() => handleCheckboxChange('ramType', ramType, setSelectedRamTypes)}
                  />
                  {ramType}
                </li>
              </ul>

            </label>
          ))}

        </div>



        <button class={activeCollapsSocket ? "collapsible active" : "collapsible"} onClick={() => setActiveCollapsSocket(!activeCollapsSocket)}><h2>Socket</h2><img src={activeCollapsSocket ? opened_pointer : closed_pointer} /></button>
        <div class={activeCollapsSocket ? "content activeContent" : "content"}>
          {Array.from(new Set(msiMotherboards.map((item) => item.characteristic.socket))).map((socket) => (
            <label key={socket}>
              <ul>
                <li>            <input
                  type='checkbox'
                  value={socket}
                  checked={selectedSocket.includes(socket)}
                  onChange={() => handleCheckboxChange('socket', socket, setSelectedSocket)}
                />
                  {socket}</li>
              </ul>

            </label>
          ))}
        </div>

      </div>
    </div>
  );
};

export default (MotherboardFilter);
