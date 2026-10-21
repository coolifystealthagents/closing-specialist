'use client';
import Link from 'next/link';
import { useState } from 'react';

export function ScheduleEmbed(){const[loaded,setLoaded]=useState(false);return <div className="scheduler-panel"><div className="scheduler-heading"><span aria-hidden="true">Official scheduler</span><strong>StealthAgents consultation calendar</strong></div>{!loaded&&<div className="scheduler-loading" role="status">Loading secure scheduling options…</div>}<iframe className="booking-frame" title="Book your StealthAgents consultation" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy" onLoad={()=>setLoaded(true)}/><div className="booking-complete"><p>Completed your booking?</p><Link className="button secondary" href="/thanks-whats-next">Continue to the preparation guide</Link></div></div>}
