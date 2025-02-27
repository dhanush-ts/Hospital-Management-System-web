"use client"

import { useEffect, useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, GripVertical, X, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { api } from "@/app/api"

export default function ConsultationForm({ appointmentId, medicines }) {
  const [description, setDescription] = useState("")
  const [medications, setMedications] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const [cookieValue, setCookieValue] = useState("");
    
      useEffect(() => {
        const cookies = document.cookie.split("; ");
        const targetCookie = cookies.find((row) => row.startsWith("jwt="));
        if (targetCookie) {
          setCookieValue(targetCookie.split("=")[1]);
        }
        console.log('targetCookie', targetCookie.split("=")[1])
      }, []);

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId === "medicineList" && destination.droppableId === "prescription") {
      const medicine = filteredMedicines[source.index]
      setMedications([
        ...medications,
        {
          medicine,
          dosage: "",
          quantity: 1,
          days: 1,
        },
      ])
    } else if (source.droppableId === "prescription" && destination.droppableId === "prescription") {
      const items = Array.from(medications)
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setMedications(items)
    }
  }

  const handleRemoveMedication = (index) => {
    setMedications(medications.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${api}features/prescription/${appointmentId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookieValue}`,
        },
        body: JSON.stringify({
          description,
          medications: medications.map((med) => ({
            medicine: med.medicine.id,
            dosage: med.dosage,
            quantity: Number(med.quantity),
            days: Number(med.days),
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to submit prescription")

      setDescription("")
      setMedications([])
    } catch (error) {
      console.error("Error submitting prescription:", error)
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6 mt-6">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Prescription Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description" className="text-lg">
                  Consultation Notes
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter detailed consultation notes here..."
                  className="min-h-[120px]"
                />
              </div>

              <Droppable droppableId="prescription">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={cn(
                      "space-y-4 min-h-[200px] p-4 border-2 border-dashed rounded-lg transition-all",
                      snapshot.isDraggingOver && "border-primary bg-primary/5",
                    )}
                  >
                    {medications.map((medication, index) => (
                      <Draggable key={index} draggableId={`medication-${index}`} index={index}>
                        {(provided) => (
                          <Card ref={provided.innerRef} {...provided.draggableProps} className="bg-card">
                            <CardContent className="p-4 flex items-start gap-4">
                              <div {...provided.dragHandleProps}>
                                <GripVertical className="h-5 w-5 text-muted-foreground" />
                              </div>

                              <div className="grid gap-4 flex-1">
                                <div className="flex justify-between items-center">
                                  <div className="font-medium text-lg">{medication.medicine.name}</div>
                                  <Badge variant="secondary">{medication.medicine.type}</Badge>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-3">
                                  <Input
                                    placeholder="Dosage (e.g., 2 tablets)"
                                    value={medication.dosage}
                                    onChange={(e) => {
                                      const newMedications = [...medications]
                                      newMedications[index].dosage = e.target.value
                                      setMedications(newMedications)
                                    }}
                                  />

                                  <Input
                                    type="number"
                                    placeholder="Quantity"
                                    value={medication.quantity}
                                    onChange={(e) => {
                                      const newMedications = [...medications]
                                      newMedications[index].quantity = Number(e.target.value)
                                      setMedications(newMedications)
                                    }}
                                  />

                                  <Input
                                    type="number"
                                    placeholder="Days"
                                    value={medication.days}
                                    onChange={(e) => {
                                      const newMedications = [...medications]
                                      newMedications[index].days = Number(e.target.value)
                                      setMedications(newMedications)
                                    }}
                                  />
                                </div>
                              </div>

                              <Button variant="ghost" size="icon" onClick={() => handleRemoveMedication(index)}>
                                <X className="h-4 w-4" />
                              </Button>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {medications.length === 0 && (
                      <div className="text-center p-8 border-2 border-dashed rounded-lg text-muted-foreground">
                        Drag medicines here to add to prescription
                      </div>
                    )}
                  </div>
                )}
              </Droppable>

              <Button
                type="button"
                className="w-full text-lg py-6"
                onClick={handleSubmit}
                disabled={!description || medications.length === 0}
              >
                Complete Prescription
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Available Medicines</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
            </CardHeader>
            <CardContent className="max-h-[calc(100vh-200px)] overflow-y-auto">
              <Droppable droppableId="medicineList">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                    {filteredMedicines.map((medicine, index) => (
                      <Draggable key={medicine.id} draggableId={`medicine-${medicine.id}`} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={cn(
                              "p-3 bg-card border rounded-lg cursor-move hover:bg-accent transition-colors flex items-center gap-2",
                              snapshot.isDragging && "shadow-lg",
                            )}
                          >
                            <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-medium">{medicine.name}</div>
                              <div className="text-sm text-muted-foreground">{medicine.type}</div>
                            </div>
                            <Plus className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CardContent>
          </Card>
        </div>
      </DragDropContext>
    </div>
  )
}

