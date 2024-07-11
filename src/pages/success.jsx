import Header from '@/components/header'
import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react'

export default function Success() {
  const [sweepdata, setSweepdata] = useState({});
  const router = useRouter();

  useEffect(() => {
    if(window.sweepdata){
      setSweepdata(window.sweepdata)
    }else{
      router.push('/');
    }
  }, [router.isReady])
  
  return (
    <div className="success-container">
      <Header />
      <div className="success-wrapper">
        <div className="list">
          <div className="title">Kazananlar 🎉</div>
          {sweepdata &&
            sweepdata.winner?.map((item) => {
              return (
                <div key={item.id} className="list-item">
                  <div className="user-profile">
                    <img src={item.authorProfileImageUrl} />
                  </div>
                  <div className="content">
                    <div className="user-name">{item.authorDisplayName}</div>
                    <div className="commnets">{item.textOriginal}</div>
                  </div>
                </div>
              );
            })}
        </div>
        {sweepdata.spare &&
        <div className="list">
          <div className="title">Yedekler 🥹</div>
          {sweepdata.spare.map((item) => {
              return (
                <div key={item.id} className="list-item">
                  <div className="user-profile">
                    <img src={item.authorProfileImageUrl} />
                  </div>
                  <div className="content">
                    <div className="user-name">{item.authorDisplayName}</div>
                    <div className="commnet">{item.textOriginal}</div>
                  </div>
                </div>
              );
            })}
        </div>
        }
      </div>
      <div onClick={()=> router.push('/')} className='retry-button'>Çekilişi Tekrarla</div>
    </div>
  );
}
