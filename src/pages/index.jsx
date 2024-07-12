import Header from '@/components/header';
import Loading from '@/components/loading';
import Settings from '@/components/settings';
import { getChannelInfo } from '@/services/channel';
import { startSweepStak } from '@/services/sweepstak';
import { getCommands, getVideo } from '@/services/video'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'





export default function Index() {
  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState(null);
  const [commands, setCommands] = useState([])
  const [settings, setSettings] = useState({uniqueUsers:false, uniqueCommands:true, containsWord:[], winnerCount:1, spareCount:0})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(settings.uniqueUsers && settings.uniqueCommands){
      setSettings({...settings, uniqueCommands:false});
    }
  }, [settings])
  
  const startSweepStakclickHandler = (_commands)=>{
    const response = startSweepStak(_commands, settings);
    window.sweepdata = response;
    setTimeout(() => {
      setLoading(false);
      router.push('/success');
    }, 7000);
  }

  const inputOnchageHandler = async (url)=>{
    if(url.length){
    try {
    new URL(url)
    const response =  await getVideo(url);
    const channelResponse = await getChannelInfo(response.items[0].snippet.channelId);
    setChannel(channelResponse.items[0])
    setVideo(response.items[0]);
    setError(false);
    } catch (error) {
      setError(true);
    }
  } 
  }

  const getcommandsWithId = async ()=>{
    setLoading(true);
    const response = await getCommands(video.id)
    setCommands(response);
    startSweepStakclickHandler(response);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="link-wrapper">
            <div className="input-title">*Video Url</div>
            <div className="input-wrapper">
              <input
                type="url"
                placeholder="https://www.youtube.com/watch?v=NPRGrhath9c"
                onChange={(e) => inputOnchageHandler(e.target.value)}
              />
            </div>
            {error && <div className="error-container">Video Bulunamadı</div>}
          </div>
          <Settings settings={settings} setSettings={setSettings} />
          {video && channel && (
            <>
              <div className="thumb-viewer">
                <div className="image-wrapper">
                  <img src={video.snippet.thumbnails.maxres.url} />
                </div>

                <div className="user-info">
                  <div className="profile-image-wrapper">
                    <img src={channel.snippet.thumbnails.high.url}></img>
                  </div>
                  <div className="channel-content">
                    <div className="user-name">
                      {channel.snippet.localized.title}
                      <p>{channel.snippet.customUrl}</p>
                    </div>
                    <div className="user-title">
                      {channel.snippet.localized.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="start-button" onClick={getcommandsWithId}>Çekilişi Başlat !</div>
            </>
          )}
        </div>
      </div>
      {loading && <div className='loading-wrapper'>
        <Loading commands={commands}/>
      </div> }
    </div>
  );
}
