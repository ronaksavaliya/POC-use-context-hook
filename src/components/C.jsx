import React, { useContext } from 'react'
 import {name} from '../App.js'

export default function C() {
    const {fname} = useContext(name);
  return (
    <div> my name is {fname}</div>
  )
}
