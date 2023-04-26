'use client'
import TimeAgo from "react-timeago"

const LiveTimeStamp = ({time}) => {
  return (
    <TimeAgo
    date={time}
   />
  )
}

export default LiveTimeStamp