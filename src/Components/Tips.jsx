import React from "react";

const Tips = () => {
  return (
    <>
      <div className="tips ">
      <h1 className="title-text tips-h1 pb-3" style={{ textAlign: "center" }}>
      Welcome to Techniques to Reduce Electricity Bill
        </h1>
        <h2 className="title-text tips-h2 pt-3" style={{ textAlign: "center" }}>
         Tips to Reduce Your Electricity Bill
        </h2>
        <div className="tips__inner ">
          <div className="m-5  ">
           
            <div className="col-sm-12 col-md-12 col-xl-7 col-xxl-7 d-flex justify-content-center flex-column ">
            
            <ul>
              <li className="sub-b-text "><b>Switch to LED Bulbs:</b >  LED bulbs are
                energy-efficient and last longer than traditional incandescent
                bulbs. They use significantly less electricity for the same
                amount of light.</li>
                </ul>

                <ul>
              <li className="sub-b-text "><b>Unplug Devices: </b>Even when turned off, many devices consume a small amount of electricity phantom or standby power. Unplug chargers, electronics, and appliances when not in use, or use power strips to easily cut off power to multiple devices..</li>
            </ul>

            <ul>
              <li className="sub-b-text"> <b> Seal Leaks:</b> Insulate your home
                properly to prevent drafts and leaks, which can lead to energy
                loss. This will help your heating and cooling systems work more
                efficiently.</li>    
            </ul>
            
            <ul>
              <li className="sub-b-text"><b>Cook Efficiently:</b> Use lids when cooking to retain heat, cook with appropriate pot sizes, and consider using a microwave or toaster oven for smaller meals as they use less energy than a full-sized oven.</li>    
            </ul>

            <ul>
              <li className="sub-b-text"><b>Maximize Natural Light:</b> During the
                day, open curtains and blinds to let in natural light. This
                reduces the need for artificial lighting and can also provide
                some warmth during colder months.</li>    
            </ul>
          </div>

           
          </div>

          
          </div>
        </div>

        <div className="row w-100 tips-bones">
          <div className="col-sm-12 col-md-12 col-xl-7 col-xxl-7 d-flex justify-content-center flex-column ">
            <h2 className="sub-b-text">Bones Tips</h2>
            <ul>
              <li className="sub-b-text ">Check the reading meter weekly once and use this Calculator for calculating a weekly payable amount it may be very useful to you know your eb bill without consulting others</li>
              <li className="sub-b-text ">Chart is clearly describe the units and its rate this helps you to reduce your eb bill. This chart aware you the usage of electricity. With the help of this chart you itself know the amount according to the units you consumed</li>
            </ul>
          </div>
         
        </div>

        <div className="tips-save p-2">
          <h2 className="sub-b-text ">Start Saving Today</h2>
          <p className="sub-text" style={{textAlign:'center'}}>Implement these strategies and make use of our tools to see a noticeable difference in your electricity bill. Every small change adds up to significant savings over time. Let's work together to make your home more energy-efficient and your bills more manageable.</p>
        </div>
      
    </>
  );
};

export default Tips;