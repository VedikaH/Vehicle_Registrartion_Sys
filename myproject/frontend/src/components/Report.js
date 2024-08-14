import React from 'react';

import Nav1 from './Nav1';
function Report(){
    return (
        <div>
          <><Nav1/></>
        <div className="container">
          <h1>REPORT</h1>
        <form action="/action_page.php" className='btnleft'>
            <label htmlFor="birthday">From</label>
            <input type="date" id="birthday" name="birthday"/>
            <br/>
            <label htmlFor="birthday">To</label>
            <input type="date" id="birthday" name="birthday"/>
            
            
          </form>
          <br/>
          <br/>
        <div className="optselect">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option defaultValue>choose option...</option>
              <option value="0">permits</option>
              <option value="1">rc</option>
              <option value="2">license</option>
             
            </select>
          </div>
          <br/>
          <a className="btn btn-primary btnleft" href="djb" role="button">SUBMIT</a>
          <br/>
        </div>

        <br/>
          <div className="container">

            <form className="d-flex optselect">
              <input  className="form-control me-2" type="search" placeholder="lisence number" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
              <table className="table table-striped">
                
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">LISENCE NO</th>
                      <th scope="col">FULL NAME</th>
                      <th scope="col">DATE OF BIRTH</th>
                      <th scope="col">CATEGORY</th>
                      <th scope="col">OPEN/CLOSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>details</td>
                      <td>details</td>
                      <td>details</td>
                      <td>details</td>
                      <td>
                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          open
                        </button>
          
                        
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">DATA</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                ...
                              </div>
                              <div className="modal-footer"> 
                               
                                <button type="button" className="btn btn-danger">CANCEL</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div></td>
                    </tr>
                    
                    
                  </tbody>
                </table>
              
            </div>

</div>


    )


   

}
export default Report;