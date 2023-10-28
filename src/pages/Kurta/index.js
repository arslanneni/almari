import React, { useEffect } from 'react'
import {scrappedDataService} from "../../../services/dataFetching"


export default function Kurta() {
    useEffect(() => {
        scrappedDataService.getScrappedData()
      },[])

  return (
    <>
    <p>Alyan Quddoos</p>
    </>
    )
  }

