import React, { useState,useEffect } from "react";
import InsertRows from './InsertRows'
import HomeCarosel from "./HomeCarosel";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Dashboard7()  {
    var [emp,setEmp]=useState({ ENo: 0, EName: "", EAddress: "" })
    var [emps,setEmps]=useState([])

    var [search,setSearch]=useState("")

    useEffect(()=>{select()},[])
        

    var select = () => {
        debugger
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                setEmps(data)
            }      };
        xhr.open("GET", "http://127.0.0.1:4000/emps")
        xhr.send()
        debugger
    }

  var  onTextChange = (args) => {
        var copyEmp = { ...emp }
        copyEmp[args.target.name] = args.target.value
        setEmp(  copyEmp )
    }

   var Delete = (ENo) => {
        debugger;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data.affectedRows != undefined && data.affectedRows > 0)
                    select();
            }

        }
        xhr.open("DELETE", "http://127.0.0.1:4000/emps/" + ENo)
        xhr.send()


        debugger
    }

  var  edit = (ENo) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                data.map((emp1) => {
                    if (emp1.ENo == ENo) {
                        setEmp(emp1)
                    }
                })
            }
        };
        xhr.open("GET", "http://127.0.0.1:4000/emps")
        xhr.send()
        debugger
    }

   var update = () => {
        var data5 = null;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data.affectedRows != undefined && data.affectedRows > 0) {
                    select();
                    setEmp( { ENo: 0, EName: "", EAddress: "" } );
                }
                else {
                    alert('insert unsucessfull !!!!!')
                }
            }
        };
        xhr.open("PUT", "http://127.0.0.1:4000/emps/" + emp.ENo)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(emp))
    }

   var addRecord = () => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data.affectedRows != undefined && data.affectedRows > 0) {
                    select();
                    setEmp( { ENo: 0, EName: "", EAddress: "" } );
                }
                else {
                    alert('insert unsucessfull !!!!!')
                }
            }
        }
        xhr.open("POST", "http://127.0.0.1:4000/emps")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(emp))
    }
  

        
        return (<>
            <HomeCarosel />    
            
          
         
            <section>
      <div className="container " >
        <div className="section-title">
            <center> <h2 class="display-3">Why Apna Tiffins</h2></center>
         
        </div>

        <div className="row"> 
          <div className="col-md-6 p-3 mb-2 bg-secondary bg-gradient text-dark bg-opacity-25 ">
            <div >
             
              
             <center><h6 class="display-6">Locations</h6></center> 
              <p>
                We are a solution for every query of "tiffin service near me" or "homemade food near me". We deliver your meal all over Mumbai including Andheri, Bandra, Lower Parel, Churchgate, Dadar, Nariman Point, Vile-Parle Santacruz, Goregaon, Fort, Mahalaxmi, Kurla, CST, Chembur, and many other areas.
              </p>
            </div>
          </div>
          <div className="col-md-6 p-3 mb-2 bg-primary bg-gradient text-dark bg-opacity-25">
            <div>
             <center> <h6 class="display-6">Assurance Of Fresh Ingredients</h6></center>
              
              <p>
                We procure fresh and best quality ingredients daily to prepare your meals. From vegetables to grains, from oil to spices, you can rest assured that your meal has been made from freshest ingredients. We do not use preservatives or pre-cooked gravies or artificial colours. The food that we deliver is just like the food you eat at home.
              </p>
            </div>
          </div>
          <div className="col-md-6 bg-success p-2 text-dark bg-opacity-25 ">
            <div >
            
            <center> <h6 class="display-6">Hygiene/Packaging</h6></center>
              
              <p>
                Apna Tiffins never compromises on cleanliness and hygiene. We take safety measures at every step with zero risk of contamination right until the food reaches you. Our kitchen is cleaned and disinfected twice a day along with regular pest-control treatments. Our food is packed in disposable, BPA-free, microwave-friendly containers.
              </p>
            </div>
          </div>
          <div className="col-md-6 p-3 mb-2 bg-danger bg-gradient text-dark bg-opacity-25">
            <div >
              <center><h6 class="display-6">Our USP: "Make Your Own Meal</h6></center>
              

              <p>
                You need not eat what you don't like. Customize your meal according to your preference using our exclusively designed E-menu feature. Even if you are a picky eater, we care for your food preferences and deliver only what you want to eat. If not, then the fixed meals are there to save you. Always!
              </p>
            </div>
          </div>

          <div className="col-md-6 p-3 mb-2 bg-warning bg-gradient text-dark bg-opacity-25">
            <div >
              <center><h6 class="display-6">Easy Ordering/Cancellation</h6></center>
              
              <p>
                We are fully online! Place your orders, modify/cancel them and renew your monthly subscriptions through our website or through our mobile app (available on iOS and Android). Any refunds on cancelled orders are credited to your Apna Tiffins Wallet to be utilized for your next order!
              </p>
            </div>
          </div>
          <div className="col-md-6 p-3 mb-2 bg-info bg-gradient text-dark bg-opacity-25  ">
            <div >
              
              <center><h6 class="display-6">Dietician-designed Meals</h6></center>
              
              <p>
                We know you miss home-cooked food! To satisfy that craving our certified dietician has designed nutritious meals for you which are skillfully executed by our experienced chefs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br></br>
    <section className="home-testimonial">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center testimonial-pos">
          <div className="col-md-12 pt-4 d-flex justify-content-center">
            <h3>Testimonials</h3>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            
          </div>
        </div>
        <section className="home-testimonial-bottom">
          <div className="container testimonial-inner">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 style-3">
                <div className="tour-item">
                  <div className="tour-desc bg-white">
                    <div className="tour-text color-grey-3 text-center">&ldquo; "Apna Tiffins is brilliantly conceived and diligently executed project of providing office goers and professionals home-like food at work place. I make my own meal on the website. Tiffin food is no longer boring."&rdquo;</div>
                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={require('./image/t2.jpg')} height={"200 px"}alt="" /></div>
                    <div className="link-name d-flex justify-content-center">Sourabh Satpaise</div>
                    <div className="link-position d-flex justify-content-center">Student</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 style-3">
                <div className="tour-item">
                  <div className="tour-desc bg-white">
                    <div className="tour-text color-grey-3 text-center">&ldquo;"I found out about Apna Tiffins on the internet and was impressed with their concept of customised meals. I need good healthy food at my shoot. It’s not possible to carry so much food from home for the entire day. Apna Tiffins has a great variety of healthy food. It’s hygienic and really of great taste. They’re so prompt with their response. Kudos to the team."&rdquo;</div>
                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={require('./image/t.jpg')} height={"200 px"} alt="" /></div>
                    <div className="link-name d-flex justify-content-center">Yash Kawale</div>
                    <div className="link-position d-flex justify-content-center">Student</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 style-3">
                <div className="tour-item">
                  <div className="tour-desc bg-white">
                    <div className="tour-text color-grey-3 text-center">&ldquo; "What I like about Apna Tiffins is its simplicity. Their meals are simple, not oily or spicy and yet tasty. Plus you don't have to commit to a monthly plan. It's a great option for someone like me who returns home late at night and does not always have the time to prepare a meal."&rdquo;</div>
                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={require('./image/t3.jpg')} height={"200 px"} alt="" /></div>
                    <div className="link-name d-flex justify-content-center">Balbir</div>
                    <div className="link-position d-flex justify-content-center">Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
            </>  
            );}

export default Dashboard7;


