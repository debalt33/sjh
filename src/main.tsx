"use client";

import React from 'react';
import { provideAuth } from 'supabase-auth-react';
const Main = () => {
  provideAuth();
  return <div>Hello World!</div>;
};
export default Main;