import React from 'react'
import Slider from '../../../components/Slider';
export default function Bai6() {
    const handleSliderChange = (value: number) => {
        console.log('Slider value:', value);
    };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Adjust the Slider</h1>
      <Slider min={0} max={100} onChange={handleSliderChange} />
    </div>
  )
}
