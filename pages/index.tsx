import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [userType, setUserType] = useState<null | "guest" | "member" | "signup">(null);
  const [membershipTier, setMembershipTier] = useState<null | "daily" | "monthly" | "yearly">(null);

  if (!userType) {
    return (
<div
  className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center text-white"
  style={{
    backgroundImage: "url('/parotta-wallpaper.jpg')",
  }}
>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div> {/* Optional overlay */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <h1 className="text-5xl font-bold drop-shadow-md">Doughverse</h1>
          <Button onClick={() => setUserType("guest")}>Continue as Guest</Button>
          <Button onClick={() => setUserType("member")}>Member Login</Button>
          <Button onClick={() => setUserType("signup")}>Sign Up</Button>
        </div>
      </div>
    );
  }

  if (userType === "signup") {
    return (
      <div className="p-4 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Choose Your Membership</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Free (Guest)</h3>
              <p>View-only access. Limited features.</p>
              <Button onClick={() => setUserType("guest")}>Sign Up as Guest</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Daily - $2</h3>
              <p>Full access for 24 hours.</p>
              <Button onClick={() => { setUserType("member"); setMembershipTier("daily"); }}>Subscribe</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Monthly - $31 (Sale)</h3>
              <p>Best for regular users.</p>
              <Button onClick={() => { setUserType("member"); setMembershipTier("monthly"); }}>Subscribe</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Yearly - $300 (Save $200)</h3>
              <p>Unlock everything for a year.</p>
              <Button onClick={() => { setUserType("member"); setMembershipTier("yearly"); }}>Subscribe</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Welcome to Doughverse</h1>
      <p className="mb-4 text-gray-600">
        You are logged in as{" "}
        <strong>
          {userType === "guest" ? "Guest" : `Member (${membershipTier})`}
        </strong>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Tiers & Privileges</h2>
            <p className="text-sm text-gray-500">See what each tier unlocks.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Profile</h2>
            <p className="text-sm text-gray-500">View your membership details.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
