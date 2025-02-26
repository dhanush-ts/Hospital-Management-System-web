'use client'

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, GripVertical, X } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function ConsultationForm({ appointmentId, medicines }) {
  const [description, setDescription] = useState("")
  const [medications, setMedications] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMedicines = medicines.filter(medicine => 
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    medicine.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result

    // If dragging from medicine list to prescription
    if (source.droppableId === 'medicineList' && destination.droppableId === 'prescription') {
      const medicine = medicines[source.index]
      setMedications([
        ...medications,
        {
          medicine,
          dosage: "",
          quantity: 1,
          days: 1
        }
      ])
    }
    // If reordering within prescription
    else if (source.droppableId === 'prescription' && destination.droppableId === 'prescription') {
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
      const response = await fetch(`/api/features/prescription/${appointmentId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          medications: medications.map(med => ({
            medicine: med.medicine.id,
            dosage: med.dosage,
            quantity: Number(med.quantity),
            days: Number(med.days)
          }))
        })
      })

      if (!response.ok) throw new Error('Failed to submit prescription')
      
      // Reset form
      setDescription("")
      setMedications([])
    } catch (error) {
      console.error('Error submitting prescription:', error)
    }
  }

  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {/* Prescription Section (2/3) */}
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prescription Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter consultation notes"
              />
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="prescription">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid gap-4 min-h-[200px]"
                  >
                    {medications.map((medication, index) => (
                      <Draggable
                        key={index}
                        draggableId={`medication-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                          >
                            <div {...provided.dragHandleProps}>
                              <GripVertical className="h-5 w-5 text-muted-foreground" />
                            </div>
                            
                            <div className="grid gap-4 flex-1">
                              <div className="font-medium">
                                {medication.medicine.name} ({medication.medicine.type})
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

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveMedication(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
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
            </DragDropContext>

            <Button
              type="button"
              className="w-full"
              onClick={handleSubmit}
              disabled={!description || medications.length === 0}
            >
              Complete Prescription
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Medicine List Section (1/3) */}
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Available Medicines</CardTitle>
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
          <CardContent>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="medicineList">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid gap-2"
                  >
                    {filteredMedicines.map((medicine, index) => (
                      <Draggable
                        key={medicine.id}
                        draggableId={`medicine-${medicine.id}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3 bg-muted rounded-lg cursor-move hover:bg-accent transition-colors"
                          >
                            <div className="font-medium">{medicine.name}</div>
                            <div className="text-sm text-muted-foreground">{medicine.type}</div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
