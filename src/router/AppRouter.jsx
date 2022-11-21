import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { useCheckAuth } from '../hooks'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === 'checking' ) {
    return <CheckingAuth/>
  }
  return (
    <Routes>


        {
          (status === 'authenticated')
          ? <Route path="/*" element={ <JournalRoutes/> } />
          : <Route path="/auth/*" element={ <AuthRoutes/> } />
        }
        <Route path='/*' element={ <Navigate to='/auth/login' /> } />


        {/* Login / Register */}
        {/* <Route path="/auth/*" element={ <AuthRoutes/> } /> */}
        {/* Journal App */}
        {/* <Route path="/*" element={ <JournalRoutes/> } /> */}
    </Routes>
  )
}
