window.Analytics=(()=>{
  const URL='https://rukxdhojmnrcbxbjrzsn.supabase.co';
  const KEY='sb_publishable_hRMfYZTp6WYHp6ddDCR6Mw_1iFdqhJ4';
  const id=(store,key)=>{let value=store.getItem(key);if(!value){value=crypto.randomUUID();store.setItem(key,value)}return value};
  const visitorId=id(localStorage,'after_midnight_visitor');
  const sessionId=id(sessionStorage,'after_midnight_session');
  async function rpc(name,body){
    const response=await fetch(`${URL}/rest/v1/rpc/${name}`,{method:'POST',headers:{apikey:KEY,Authorization:`Bearer ${KEY}`,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!response.ok)throw new Error('统计服务暂时不可用');
    const text=await response.text();return text?JSON.parse(text):null;
  }
  function track(eventName,pageKey,metadata={}){
    rpc('track_event',{p_visitor_id:visitorId,p_session_id:sessionId,p_event_name:eventName,p_page_key:pageKey,p_metadata:metadata}).catch(()=>{});
  }
  function page(pageKey){
    const key=`analytics_page_${pageKey}`;if(sessionStorage.getItem(key))return;sessionStorage.setItem(key,'1');track('page_view',pageKey);
  }
  const summary=()=>rpc('get_analytics_summary',{});
  return{track,page,summary};
})();
