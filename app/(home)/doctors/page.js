import { api } from "@/app/api"
import DoctorCard from "@/components/doctors/doctorCard"
import { cookies } from "next/headers"

async function getDoctors() {
  const Store = await cookies()
  const token = Store.get("jwt")?.value
  const response = await fetch(`${api}auth/doctors/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  })
  const data = await response.json()
  return data
}

export default async function Page() {
  const doctors = await getDoctors()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.user.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}
