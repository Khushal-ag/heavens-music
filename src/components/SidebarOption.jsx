import React from 'react'
import './SidebarOption.css'

function SidebarOption({option="test",Icon}) {
  return (
    <div className="SidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption