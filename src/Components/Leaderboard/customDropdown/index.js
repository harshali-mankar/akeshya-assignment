import React from 'react'

const CustomDropdown = () => {
  return (
    <>
    {/* si-active for dropdown open/ on hover also working */}
      <div className='si-dropdown si-active--'>
        <div className='si-option-selected '>
          <div className='si-option-list si-vbm-option'>
            <span className='si-tmVs'>KKR vs DC</span>
            <span className='si-dateTm'>29th May 2022</span>
          </div>
        </div>
        <div className='si-option'>
          <div className='si-option-list si-vbm-option'>
            <span className='si-tmVs'>KKR vs DC</span>
            <span className='si-dateTm'>29th May 2022</span>
          </div>
          <div className='si-option-list si-vbm-option'>
            <span className='si-tmVs'>KKR vs DC</span>
            <span className='si-dateTm'>29th May 2022</span>
          </div>
          <div className='si-option-list si-vbm-option'>
            <span className='si-tmVs'>KKR vs DC</span>
            <span className='si-dateTm'>29th May 2022</span>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default CustomDropdown