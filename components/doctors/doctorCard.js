"use server";
import Image from "next/image";
import { Clock, Award, Stethoscope, ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BadgeCheck } from "../ui/badge-check";
import { Button } from "../ui/button";


async function handleRedirect(formData) {
  "use server"; // Ensure it's a server action
  const doctorId = formData.get("doctorId");
  redirect(`/doctors/${doctorId}`); // Redirect to the doctor's page
}

export default async function DoctorCard({ doctor }) {
  const randomExperience = Math.floor(Math.random() * (25 - 5 + 1))
  console.log(doctor)

  return (
    <form className="cursor-pointer" action={handleRedirect}>
      <input type="hidden" name="doctorId" value={doctor.user.id} />
      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="relative">
            <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-xl ring-2 ring-primary/20">
              <Image
                src="https://imgs.search.brave.com/JUPsydqJLTirif_2YbS2ZJjLSNRe6m-LivJaexB83c0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzY2LzU5Lzgx/LzM2MF9GXzI2NjU5/ODEzN19DSnU0VGM4/ZHZJSkYyY1lBSk9P/ZWpwMFRPOG5XN1Fp/OS5qcGc"
                alt={doctor.user.full_name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-3 -right-2">
              <BadgeCheck />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Dr. {doctor.user.full_name}</h2>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="font-medium">
                  <Stethoscope className="mr-1 h-3 w-3" />
                  {doctor.specialization}
                </Badge>
                <Badge variant="outline" className="animate-in fade-in-50 duration-1000">
                  <Award className="mr-1 h-3 w-3" />
                  {randomExperience} Years Experience
                </Badge>
              </div>
            </div>

            <div className="grid gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>
                  Available {doctor.available_from.slice(0, 5)} - {doctor.available_to.slice(0, 5)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Button
          type="submit"
          className={`absolute right-4 bottom-4 rounded-full p-2 transition-all duration-300 hover:opacity-100 hover:translate-y-0 opacity-0 translate-y-4`}
          aria-label="View Profile"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
    </Card>
    </form>
  );
}
