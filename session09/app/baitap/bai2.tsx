import { useState } from 'react';
import Input from '@/components/Input';
export default function Bai2() {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState<number | string>('');
  const [fileValue, setFileValue] = useState<File | null>(null);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(e.target.value);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileValue(e.target.files[0]);
    }
  };
  return (
    <div className="p-4">
      <div className="mb-4">
        <label>Text Input:</label>
        <Input
          type="text"
          placeholder="Enter text"
          value={textValue}
          onChange={handleTextChange}
        />
      </div>
      <div className="mb-4">
        <label>Number Input:</label>
        <Input
          type="number"
          placeholder="Enter number"
          value={numberValue}
          onChange={handleNumberChange}
        />
      </div>
      <div className="mb-4">
        <label>File Input:</label>
        <Input type="file" onChange={handleFileChange} />
      </div>
    </div>
  )
}
