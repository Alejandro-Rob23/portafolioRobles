import Link from "next/link";
import { Filters } from './Filters.jsx'

export function Header () {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <MenuU/>
      <Filters />
    </header>
  )
}




export const MenuU = () => {
  return (
    <div>
 
    <Link href="/cbd">Regresar</Link></div>
  )
}
