import React from 'react'

const GameplayPagination = () => {
  return (
    <>
      <div className='si-pagination'>
        <div href='#' className='si-correct si-active'><span>1</span></div>
        <div href='#' className='si-wrong'><span>2</span></div>
        <div href='#' className='si-correct'><span>3</span></div>
        <div href='#' className='si-attempted si-joker'><span>4</span></div>
        <div href='#' className='si-wrong si-joker'><span>5</span></div>
        <div href='#' className='si-attempted'><span>6</span></div>
        <div href='#'><span>7</span></div>
        <div href='#'><span>8</span></div>
        <div href='#'><span>9</span></div>
        <div href='#'><span>10</span></div>
        <div href='#'><span>11</span></div>
        <div href='#'><span>12</span></div>
      </div>

    </>
    
  )
}

export default GameplayPagination