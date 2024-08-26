import { Button } from '@/components/ui/button'
import { ChartContainer } from '@/components/ui/chart'
import { Calendar } from 'lucide-react'
import React from 'react'
import { BarChart } from 'recharts'

export default function page() {
  const [date, setDate] = React.useState <Date | underfined>(new Date())
  return (
    <div>page
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className='rounded'
      />
    </div>
  )
}