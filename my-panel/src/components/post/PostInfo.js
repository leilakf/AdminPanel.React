import React from 'react'

export const PostInfo = ({ info }) => {
  return (
    <div className="col-md-4 p-3">
      <div className="card" >
        <div className="card-header bg-primary text-white pb-2  card-title " style={{ textAlign: "left" }}>
          {info.title}</div>
        <div className="card-body d-flex d-flex justify-content-between  " style={{ height: "100px", textAlign: "left" }}>
          <p>
            {info.body}
          </p>
        </div>
        <div className="card-footer d-flex">
          <button className=' btn-outline-primary  btn btn-outline-primary btn-lg btn-block mt-3'>کامنت</button>
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Link with href
            </a>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
