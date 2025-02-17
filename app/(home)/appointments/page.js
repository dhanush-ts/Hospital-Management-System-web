import { api } from '@/app/api'
import { cookies } from 'next/headers'
import React from 'react'

async function getDoctors() {
  const Store = cookies() 
  const token = Store.get("jwt")?.value;
  const response = await fetch(`${api}auth/doctors/`,{
    headers: {
      'Authorization': `Bearer ${token}`
  }})
  const data = await response.json()
  return data
}

export default async function Page() {

  const response = await getDoctors()
  console.log(response)

  return (
    <div>P</div>
  )
}
