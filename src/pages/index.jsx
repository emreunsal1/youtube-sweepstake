import { getVideo } from '@/services/video'
import React from 'react'

export default function index() {
  const getOnclicked = async ()=>{
    const response =  await getVideo("pLLRepaq4a8");
  }
  return (
    <div onClick={()=>getOnclicked()}>
      getVideo
    </div>
  )
}
