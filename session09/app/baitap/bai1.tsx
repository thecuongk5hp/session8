import React from 'react'
import Button from '@/components/Button';
export default function Bai1() {
    const handleClick = () => {
        alert('Button clicked!');
    };
  return (
    <div className="p-4">
      <Button variant="primary" size="large" onClick={handleClick}>
        Primary Button
      </Button>
      <Button variant="secondary" size="medium" onClick={handleClick}>
        Secondary Button
      </Button>
    </div>
  )
}
