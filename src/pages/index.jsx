import { startSweepStak } from '@/services/sweepstak';
import { getVideo } from '@/services/video'
import React from 'react'

export default function index() {
  const getOnclicked = async ()=>{
    const response =  await getVideo("pLLRepaq4a8");
  }
  const startSweepStakclickHandler = async ()=>{
    const response = await startSweepStak("pLLRepaq4a8");
  }
  return (
    <div >
    <div onClick={()=>getOnclicked()}>
      getVideo
    </div>
    <div onClick={startSweepStakclickHandler} >start sweepstake</div>
    </div>
  )
}
