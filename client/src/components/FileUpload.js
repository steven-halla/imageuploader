import React , { Fragment } from 'react'

export const FileUpload = () => {
  return (
   <Fragment>
     <form action="">
       <div className="custom-file">
         <input type="file" className="custom-file-input" id="customFile"/>
           <label className="custom-file-label" htmlFor="customFile">Choose file</label>
       </div>
     </form>
   </Fragment>
  )
}
