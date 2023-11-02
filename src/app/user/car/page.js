"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Car() {
  
  const isAutenticated = useSelector((state) => state.users.isAutenticated);
  const router = useRouter()
  
  if (!isAutenticated) {
    router.replace('/signin');
    return
  }

  return (
    <div>Car </div>
  )
}

