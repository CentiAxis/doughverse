import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function Home() {
  const [userType, setUserType] = useState(null);
  const [membershipTier, setMembershipTier] = useState(null);

  if (!userType) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[url('/parotta-wallpaper.jpg')] bg-cover text-white">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-md">Doughverse</h1>
        <div className="space-y-4">
          <Button onClick={() => setUserType('guest')}>Continue as Guest</Button>
          <Button onClick={() => setUserType('member')}>Member Login</Button>
          <Button onClick={() => setUserType('signup')}>Sign Up</Button>
        </div>
      </div>
    );
  }

  if (userType === 'signup') {
    return (
      <div className="p-4 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Choose Your Membership</h2>
        <div className="space-y-4">
          {[
            { tier: 'guest', title: 'Free (Guest)', description: 'View-only access. Limited features.' },
            { tier: 'daily', title: 'Daily - $2', description: 'Full access for 24 hours.' },
            { tier: 'monthly', title: 'Monthly - $31 (Sale)', description: 'Best for regular users.' },
            { tier: 'yearly', title: 'Yearly - $300 (Save $200)', description: 'Unlock everything for a year.' }
          ].map(({ tier, title, description }) => (
            <Card key={tier}>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>{description}</p>
                <Button onClick={() => {
                  if (tier === 'guest') setUserType('guest');
                  else {
                    setUserType('member');
                    setMembershipTier(tier);
                  }
                }}>
                  {tier === 'guest' ? 'Sign Up as Guest' : 'Subscribe'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Welcome to Doughverse</h1>
      <p className="mb-4 text-gray-600">
        You are logged in as <strong>{userType === 'guest' ? 'Guest' : `Member (${membershipTier})`}</strong>
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
