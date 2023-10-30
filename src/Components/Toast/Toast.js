import React,{useContext} from 'react'
import productsContext from "../../contexts/productsContext"

export default function Toast() {
    const contextData = useContext(productsContext)
  return (
      <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
          <div className={`toast ${contextData.isShowToast && 'show' } align-items-center text-white bg-primary`}> {/* add show class to show toast */}
              <div className='d-flex justify-content-between align-items-center'>
                  <button type='button' className='btn-close btn-close-wsite ms-3' onClick={()=>contextData.setIsShowToast(false)}></button>
                  <div className='toast-body'>محصول با موفقیت به سبد اضافه شد</div>
              </div>
          </div>
      </div>
  )
}
