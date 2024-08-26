import React from 'react'
import InputOTP from '@/components/InputOTP';
export default function Bai5() {
    const handleOTPComplete = (otp: string) => {
        console.log('OTP entered:', otp);
    };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Enter OTP to View Subjects</h1>
      <InputOTP length={6} onComplete={handleOTPComplete} />
      {/* Danh sách các môn học sẽ được hiển thị ở đây khi OTP đã được nhập đúng */}
    </div>
  )
}
