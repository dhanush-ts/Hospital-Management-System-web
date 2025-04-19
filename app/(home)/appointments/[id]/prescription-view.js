"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pill, Droplets, Calendar, User, FileText } from "lucide-react"

export default function PrescriptionView({ prescriptionData }) {
  if (!prescriptionData) return null

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-muted/30">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Prescription Details
        </CardTitle>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Doctor:</span>
            <span className="font-medium">{prescriptionData?.doctor_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Patient:</span>
            <span className="font-medium">{prescriptionData?.patient_name}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Diagnosis</h3>
          <p className="text-muted-foreground">{prescriptionData?.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Medications</h3>
          <div className="grid gap-4">
            {prescriptionData?.medications?.map((medication) => (
              <Card key={medication.id} className="bg-muted/20">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex items-center gap-2">
                      {medication.dosage.includes("tablet") ? (
                        <Pill className="h-5 w-5 text-primary" />
                      ) : (
                        <Droplets className="h-5 w-5 text-primary" />
                      )}
                      <span className="font-medium">Medicine #{medication.medicine}</span>
                    </div>
                    <Badge variant="outline" className="ml-auto">
                      {medication.dosage}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{medication.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="font-medium">{medication.days} days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

