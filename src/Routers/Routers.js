import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dasboard } from '../Pages/Dashboard/Dasboard'
import { DetailSewa } from '../Pages/DetailSewa/DetailSewa'
import Pemesanan from '../Pages/Pemesanan/Pemesanan'
import { PencarianMobil } from '../Pages/PencarianMobil/PencarianMobil'

export const Routers = () => {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Dasboard/>}/>
      <Route path='/pencarianMobil' element={<PencarianMobil/>}/>
      <Route path='/detailSewa' element={<DetailSewa/>}/>
      <Route path='/pemesanan' element={<Pemesanan/>}/>
    </Routes>

    
    
    </div>
  )
}
