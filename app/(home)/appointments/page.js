import { fetchData } from "@/hooks/fetch-data"
import { cookies } from "next/headers"
import { isUpcoming } from "@/lib/utils"
import AppointmentCard from "@/components/appointments/appointment-card" 

export default async function Page() {
  const data = await fetchData("features/appointment/")
  const cookie = await cookies()
  const user_type = cookie.get("user_type")?.value

  // Filter for upcoming appointments including today
  const upcomingAppointments = data
    .filter((appointment) => isUpcoming(appointment.start_time))
    .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Appointments</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {upcomingAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} userType={user_type} />
        ))}
      </div>
      {upcomingAppointments.length === 0 && (
        <div className="text-center text-muted-foreground py-12">No upcoming appointments found.</div>
      )}
    </div>
  )
}

