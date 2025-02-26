"use server"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

async function redirectToDoctors() {
  "use server";
  redirect("/doctors");
}

export default async function Page({params}) {  
    const { id } = (await params)
    return (
    <form action={redirectToDoctors}>
      <Button type="submit" variant="destructive">
        <ArrowLeft />
        Back
      </Button>
        {id}
    </form>
  )
}