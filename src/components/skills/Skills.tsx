import { useState, useEffect } from 'react'
import { SkillsProps } from './Skills.types'

export const Skills = (props: SkillsProps) => {
  const { skills } = props


  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      
    </>
  )
}