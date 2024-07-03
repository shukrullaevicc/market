import Home from "./home/Home"
import Favourite from "./favourite/Favourite"
import Auth from "./auth/Auth"
import NotFound from "./not-found/NotFound"
import { Routes, Route, Navigate } from "react-router-dom"

const RouteController = () => {
  return (
    <>
      <Routes>
         <Route path="" element={<Home/>}/>
         <Route path="favourite" element={<Favourite/>}/>
         <Route path="auth" element={<Auth/>}/>
         <Route path="not-found" element={<NotFound/>}/>
         <Route path="*" element={<Navigate to="not-found"/>}/>
      </Routes>
    </>
  )
}

export default RouteController