'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function Page() {
    const [ email, setEmail ] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Recuperar conta</CardTitle>
        </CardHeader>
        <CardContent>
          {email ? (
            <div className="flex flex-col space-y-4">
              <p>Enviamos um email para você, verifique sua caixa de entrada.</p>
            </div>
          ) : (
            <form>
                <div className="space-y-4">
                <div className="space-y-2">
                    <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    Email
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" onClick={() => setEmail(true)}>{email ? <Link href="/login">Voltar</Link> : 'Confirmar'}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

