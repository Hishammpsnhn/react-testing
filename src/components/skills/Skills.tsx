import { useState, useEffect } from 'react'
import { SkillsProps } from './Skills.types'

export const Skills = (props: SkillsProps) => {
  const { skills } = props

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  useEffect(() => {
   setTimeout(() => {
    setIsLoggedIn(true)
   }, 1001);
  }, []);
  


  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {
        isLoggedIn ? <button>welcome</button>:<button onClick={()=>setIsLoggedIn(pre=> !pre)}>Login</button>
      }
    </>
  )
}