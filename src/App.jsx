import { useEffect, useState } from 'react';
import Magnifier from './Magnifier';
import useDeviceType from './useDeviceType';
import Alert from './Alert';

function App() {
  const [dimensions, setDimensions] = useState({});
  const [currentSetImage, setCurrentSetImage] = useState({});
  const [revealSize, setRevealSize] = useState(200);
  const deviceType = useDeviceType();

  const images = {
    desktop: [
      { displayImg: 'https://i.ibb.co/FDG1y1S/1-1-1280.jpg', revealImg: 'https://i.ibb.co/SPMcd1k/1-2-1280.jpg' },
      { displayImg: 'https://i.ibb.co/JRsMXSm/2-1-1280.png', revealImg: 'https://i.ibb.co/3r5dKt1/2-2-1280.png' },
      { displayImg: 'https://i.ibb.co/0tY8PbF/3-1-1280.jpg', revealImg: 'https://i.ibb.co/bPhmdDy/3-2-1280.jpg' },
      { displayImg: 'https://i.ibb.co/7JqQd4g/4-1-1280.png', revealImg: 'https://i.ibb.co/jk0vKwG/4-2-1280.png' },
    ],
    mobile: [
      { displayImg: 'https://i.ibb.co/jHWFFLJ/1-1-300.jpg', revealImg: 'https://i.ibb.co/bWdqdKr/1-2-300.jpg' },
      { displayImg: 'https://i.ibb.co/ZVrzJKM/2-1-300.png', revealImg: 'https://i.ibb.co/mzpVmhn/2-2-300.png' },
      { displayImg: 'https://i.ibb.co/9rT8R3Q/3-1-300.jpg', revealImg: 'https://i.ibb.co/s5F7Xr0/3-2-300.jpg' },
      { displayImg: 'https://i.ibb.co/k5M5Wkp/4-1-300.png', revealImg: 'https://i.ibb.co/qgTCKgN/4-2-300.png' },
    ],
  };

  const data = {
    desktop: [
      { width: 387, height: 788 },
      { width: 496, height: 788 },
      { width: 800, height: 565 },
      { width: 1280, height: 724 },
    ],
    mobile: [
      { width: 300, height: 611 },
      { width: 300, height: 477 },
      { width: 300, height: 212 },
      { width: 300, height: 170 },
    ],
  };

  useEffect(() => {
    if (deviceType) {
      const initialImages = deviceType === 'desktop' ? images.desktop : images.mobile;
      const initialDimensions = deviceType === 'desktop' ? data.desktop : data.mobile;

      setCurrentSetImage(initialImages[0]);
      setDimensions(initialDimensions[0]);
    }
  }, [deviceType]);

  const handleOnChange = (e) => {
    const selectedId = e.target.value;
    const selectedImages = deviceType === 'desktop' ? images.desktop : images.mobile;
    const selectedDimensions = deviceType === 'desktop' ? data.desktop : data.mobile;

    setCurrentSetImage(selectedImages[selectedId]);
    setDimensions(selectedDimensions[selectedId]);
  };

  const handleRevealChange = (e) => {
    setRevealSize(parseInt(e.target.value));
  };

  return (
    <>
      <Alert />
      <main className='w-full h-lvh overflow-auto grid place-items-center bg-fuchsia-100'>
        <h1 className='text-4xl mb-8 font-bold text-fuchsia-500'>
          Image Reveal
        </h1>

        <div className='flex relative w-full items-center justify-center gap-5 px-3'>
          <select
            id="options"
            name="options"
            onChange={e => handleOnChange(e)}
            className='mb-5 w-[200px] border-4 rounded-xl px-2 py-2 border-fuchsia-400 focus:border-fuchsia-400 outline-none'>
            <option value="0">Bãi biển</option>
            <option value="1">Giường</option>
            <option value="2">Nằm</option>
            <option value="3">Bò</option>
          </select>

          <div className='-mt-6'>
            <h2 className='text-fuchsia-500 font-bold text-md lg:text-xl'>Choose lense size:</h2>
            <label className='mr-1 lg:mr-5 text-md'>
              <input
                type="radio"
                value="200"
                checked={revealSize === 200}
                onChange={handleRevealChange}
                className='mr-2'
              />
              Medium
            </label>
            <label className='text-md'>
              <input
                type="radio"
                value="400"
                checked={revealSize === 400}
                onChange={handleRevealChange}
                className='mr-2'
              />
              Large
            </label>
          </div>
        </div>

        <div className={`border-2 border-fuchsia-500 w-[${dimensions.width}px] h-[${dimensions.height}px] rounded-xl shadow-xl mb-10`}>
          <Magnifier
            revealSize={revealSize}
            img={currentSetImage.displayImg}
            revealImg={currentSetImage.revealImg} />
        </div>
      </main>
    </>
  );
}

export default App;
