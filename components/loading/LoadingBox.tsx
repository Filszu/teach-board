'use client'
import { CircularProgress } from "@mui/material"


type Props = {}

export const LoadingBox = (props: Props) => {
  return (
    <div style={{color:"var(--elements-main-color)"}}><CircularProgress color="inherit" /></div>
  )
}