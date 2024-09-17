import React from 'react'
import Button from './Button'
import { useState } from 'react'


export default function FetchNews(props) {
  const{onLoad} = props
  return (
    <div>
      <Button onClick={onLoad} label="Fetch Latest News" />
    </div>
  )
}
