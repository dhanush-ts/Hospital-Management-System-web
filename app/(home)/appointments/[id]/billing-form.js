"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { api } from "@/app/api"
import { CreditCard, QrCode, Loader2 } from "lucide-react"
import Image from "next/image"

export default function BillingForm({ appointmentId }) {
  const [totalAmount, setTotalAmount] = useState(0)
  const [paymentType, setPaymentType] = useState("cash")
  const [showQr, setShowQr] = useState(false)
  const [qrUrl, setQrUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [cookieValue, setCookieValue] = useState("")

  useEffect(() => {
    const cookies = document.cookie.split("; ")
    const targetCookie = cookies.find((row) => row.startsWith("jwt="))
    if (targetCookie) {
      setCookieValue(targetCookie.split("=")[1])
    }
  }, [])

  const handleCreateBill = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${api}features/bill/${appointmentId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookieValue}`,
        },
        body: JSON.stringify({
          total_amount: Number(totalAmount),
          payment_type: paymentType,
        }),
      })

      if (!response.ok) throw new Error("Failed to create bill")

      setIsLoading(false)
      // Reset form or show success message
    } catch (error) {
      console.error("Error creating bill:", error)
      setIsLoading(false)
    }
  }

  const handleGenerateQr = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${api}features/generate-upi-qr/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookieValue}`,
        },
        body: JSON.stringify({
          amount: Number(totalAmount),
        }),
      })

      if (!response.ok) throw new Error("Failed to generate QR code")

      const data = await response.json()
      setQrUrl(`${data.qr_url}`)
      setShowQr(true)
      setIsLoading(false)
    } catch (error) {
      console.error("Error generating QR code:", error)
      setIsLoading(false)
    }
  }

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-muted/30">
        <CardTitle className="text-2xl font-bold">Create Bill</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="total-amount">Total Amount (₹)</Label>
            <Input
              id="total-amount"
              type="number"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              placeholder="Enter total amount"
              className="text-lg"
            />
          </div>

          <div className="grid gap-2">
            <Label>Payment Type</Label>
            <RadioGroup
              value={paymentType}
              onValueChange={setPaymentType}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="h-5 w-5" />
                  Cash
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                  <QrCode className="h-5 w-5" />
                  UPI
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentType === "upi" && !showQr && (
            <Button onClick={handleGenerateQr} disabled={!totalAmount || isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating QR...
                </>
              ) : (
                <>
                  <QrCode className="mr-2 h-4 w-4" />
                  Show QR Code
                </>
              )}
            </Button>
          )}

          {showQr && qrUrl && (
            <div className="flex flex-col items-center justify-center p-4 border rounded-md">
              <div className="relative w-64 h-64 mb-4">
                <Image src={`http://localhost:8000${qrUrl}` || "/placeholder.svg"} alt="UPI QR Code" fill className="object-contain" />
              </div>
              <p className="text-center text-muted-foreground">Scan this QR code to pay ₹{totalAmount}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleCreateBill} disabled={!totalAmount || isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Create Bill"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

