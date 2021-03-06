import React, { useEffect, useState } from 'react';

console.log(useState);

const useFetch = url => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {fetchData()},[url]);
  return data;
};

const Loading = ()=> <div style={{fontSize:24,textAlign:'center',marginTop:'12px'}}>Loading...</div>

export default ({url, component, match})=> {
  const data = useFetch(url);
  const Component = component;
  return data ? <Component data={data} id={match ? match.params.id : null}/> : <Loading/>
}


