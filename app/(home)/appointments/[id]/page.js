import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fetchData } from "@/hooks/fetch-data"
import ConsultationForm from "./consultation-form"

export default async function AppointmentPage({ params }) {
  const [appointmentData, medicines] = await Promise.all([
    fetchData(`features/appointment/${params.id}/`, "GET"),
    fetchData("features/medicines/", "GET"),
  ])

  const appointmentDate = new Date(appointmentData.start_time).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="grid gap-2">
              <div className="text-sm text-muted-foreground">Patient Name</div>
              <div className="font-medium">{appointmentData.patient_name}</div>
            </div>
            <div className="flex gap-4">
              <div className="font-medium">Token no : {appointmentData.token_no}</div>
              <Badge variant={appointmentData.status === "completed" ? "default" : "secondary"} className="capitalize">
                {appointmentData.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="text-sm text-muted-foreground">Description</div>
            <div className="font-medium">{appointmentData.description}</div>
          </div>
        </CardContent>
      </Card>

      <ConsultationForm appointmentId={params.id} medicines={medicines} />
    </div>
  )
}

