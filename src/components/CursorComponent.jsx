// /* eslint-disable no-unused-vars */
// import "../CursorComponent.css" // Import your CSS file

// import { useEffect, useRef } from "react"
// const CursorComponent = () => {
//   const cursorRef = useRef(null)

//   useEffect(() => {
//     // JavaScript logic for cursor movement
//     const INTERVAL_POSITION = 5
//     const INTERVAL_ROTATION = 100
//     let lastCursorPos = { x: -999, y: -999 }
//     let currentCursorPos = { x: -999, y: -999 }
//     let lastCursorAngle = 0,
//       cursorAngle = 0

//     const setCurrentCursorProps = () => {
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`
//         cursorRef.current.querySelector("img").style.transform = `rotate(${
//           cursorAngle - 90
//         }deg)`
//       }
//     }

//     const updateCursor = () => {
//       window.addEventListener("mousemove", (event) => {
//         currentCursorPos = { x: event.clientX, y: event.clientY }
//       })

//       setInterval(setCurrentCursorProps, INTERVAL_POSITION)

//       setInterval(() => {
//         const delt = {
//           x: lastCursorPos.x - currentCursorPos.x,
//           y: lastCursorPos.y - currentCursorPos.y,
//         }

//         if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return

//         cursorAngle = (Math.atan2(delt.y, delt.x) * 180) / Math.PI
//         setCurrentCursorProps()

//         lastCursorPos = currentCursorPos
//         lastCursorAngle = cursorAngle
//       }, INTERVAL_ROTATION)
//     }

//     updateCursor()

//     // Clean up function to remove event listeners if needed
//     return () => {
//       window.removeEventListener("mousemove", setCurrentCursorProps)
//     }
//   }, [])

//   return (
//     <div id="cursor" ref={cursorRef}>
//       <img
//         alt="Cursor Hand"
//         src="https://static.wixstatic.com/media/2d89eb_f05aaa37b2a64ca2a607b0a903d8ad30~mv2.png/v1/fill/w_68,h_106/rocket-cursor.png"
//       />
//     </div>
//   )
// }

// export default CursorComponent
