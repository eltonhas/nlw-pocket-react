import letsStart from '../assets/lets-start.svg'
import logo from '../assets/logo-in-orbit.svg'

import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo inorbit" />
        <p className="font-semibold">in.orbit</p>
      </div>
      <img src={letsStart} alt="Imagem lets start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" /> Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
