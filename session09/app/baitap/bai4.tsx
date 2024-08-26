import React from 'react'
import { useState } from 'react';
import Select from '@/components/Select';
export default function Bai4() {
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const subjects = [
    { value: 'math', label: 'Mathematics' },
    { value: 'physics', label: 'Physics' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'history', label: 'History' },
    { value: 'literature', label: 'Literature' },
  ];

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Select a Subject</h1>
      <Select
        options={subjects}
        onChange={(e) => handleSubjectChange(e.target.value)}
        placeholder="Choose a subject"
      />
      {selectedSubject && (
        <div className="mt-4">
          <p>You selected: {selectedSubject}</p>
        </div>
      )}
    </div>
  )
}
