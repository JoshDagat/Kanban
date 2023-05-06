import { Plus_Jakarta_Sans } from 'next/font/google'
import Sidebar from '@/components/sidebar/Sidebar'
import Taskbar from '@/components/taskbar/Taskbar'

const pjs = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-pjs'
})

export default function Home() {
  return (
    <div className={`${pjs.variable} font-sans`}>
      <Sidebar/>  
      <main
        className={`min-h-screen ml-80`}
      >
        <Taskbar/>
      </main>
    </div>
  )
}
 