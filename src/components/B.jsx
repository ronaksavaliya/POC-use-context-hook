import React from 'react'
import C from './C'
import { useContext } from 'react'
import { name } from '../App'

export default function B () {
    const {lname} = useContext(name);
  return (
    <div> 
        <C/>
        {lname}
    </div>
  )
}
