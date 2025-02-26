"use client";

import { useRouter } from "next/navigation";
import { Calendar, Clock, User, UserCircle, Hash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function AppointmentCard({ appointment, userType }) {
  const router = useRouter();
  const [cookieValue, setCookieValue] = useState("");
  
    useEffect(() => {
      const cookies = document.cookie.split("; ");
      const targetCookie = cookies.find((row) => row.startsWith("user_type="));
      if (targetCookie) {
        setCookieValue(targetCookie.split("=")[1]);
      }
      console.log('targetCookie', targetCookie.split("=")[1])
    }, []);
  

  const handleRedirect = () => {
    if(cookieValue==="doctor"){
      router.push(`/appointments/${appointment.id}`);
    }
  };

  return (
    <Card
      onClick={handleRedirect}
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Hash className="h-3 w-3" />
                Token {appointment.token_no}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(appointment.start_time)}
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              {userType === "admin" ? (
                <>
                  <div className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Dr. {appointment.doctor_name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium">{appointment.patient_name}</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  {userType === "doctor" ? (
                    <>
                      <User className="h-5 w-5 text-primary" />
                      <span className="font-medium">{appointment.patient_name}</span>
                    </>
                  ) : (
                    <>
                      <UserCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">Dr. {appointment.doctor_name}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="text-sm">
              <p className="text-muted-foreground">{appointment.description}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
