async function getShanghaiPm25Data(){
  try{
    const response = await fetch('https://api.waqi.info/feed/geo:31.2;121.4/?token=c064dc518a6905e0589a4124946bc0188a4a0b60');
    const data = await response.json()
    return data
  }
  catch(err){
    console.error(new Error('Unable to fetch data'))
  }
}

getShanghaiPm25Data()
  .then(result => console.log('The PM2.5 for Shanghai is', result.data.iaqi.pm25.v))
