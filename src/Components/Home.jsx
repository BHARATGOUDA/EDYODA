import React, { useState } from 'react'
import abc from "./home.module.css"
const Home = () => {
        let[value,setValue]=useState("₹149")
        let btn=(e)=>{
                  if (e.target.value=="option1") {
                    setValue("₹99")
                  }
                  if (e.target.value=="option2") {
                    setValue("₹179")

                  }
                  if (e.target.value=="option3") {
                    setValue("₹149")
                  }
                  if (e.target.value=="option4") {
                    setValue("₹99")
                  }
        }
  return (
    <div id={abc.box}>
        <section className={abc.nav}>
            <article className={abc.container}>
                <div className={abc.leftcontaint}>
                    <div className={abc.logo}>
                            EDYODA
                    </div>
                        <div className={abc.courses}>
                                <p>Courses</p>
                                <div className={abc.icon}>
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                        </div>
                            <div className={abc.programs}>
                                        <p>Programs</p>
                                        <div className={abc.icon}>
                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                <div className={abc.rightcontaint}>
                        <div className={abc.search}>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /><span class="material-symbols-outlined">search</span>
                        </div>
                        <div className={abc.login}>
                           <p>Log in</p>         
                        </div>
                        <div className={abc.join}>
                                    <p>JOIN NOW</p>
                        </div>
                </div>
            </article>
        </section>
        <section className={abc.container1}> 

                    <div className={abc.main}>
                        <div className={abc.header}>
                            <div className={abc.frame125}>
                                <p>Access curated courses worth</p>
                            </div>
                            <div className={abc.frame124}>
                                <p>₹ 18,500</p>
                                <div className={abc.bar}>
                                </div>
                                <div className={abc.frame12589}>
                                    <p>at just</p>
                                </div>
                                <div className={abc.frame12590}>
                                    <p>₹ 99</p>
                                </div>
                                <div className={abc.frame12591}>
                                    <p>per year!</p>
                                </div>
                            </div>
                        </div>
                        <div className={abc.pointer1}>
                                <div className={abc.icon}>
                                 
                                </div>
                                <div className={abc.text1}>
                                    <p>100+</p>
                                    <p className={abc.hii}>Job relevant courses</p>
                                </div>
                        </div>
                        <div className={abc.pointer2}>
                            <div className={abc.icon2}>
                            </div>
                            <div className={abc.text2}>
                                <p>20,000+</p>
                                <p className={abc.hii2}>Hours of content</p>
                            </div>
                        </div>
                        <div className={abc.pointer3}>
                            <div className={abc.icon3}>
                            </div>
                            <div className={abc.text3}>
                                <p>Exclusive</p>
                                <p className={abc.hii3}>webinar access</p>
                            </div>
                        </div>
                        <div className={abc.pointer4}>
                            <div className={abc.icon4}>
                            </div>
                            <div className={abc.text4}>
                                <p>Scholarship worth</p>
                                <p className={abc.hii4}>₹94,500</p>
                            </div>
                        </div>
                        <div className={abc.pointer5}>
                            <div className={abc.icon5}>
                            </div>
                            <div className={abc.text5}>
                                <p>Ad Free</p>
                                <p className={abc.hii5}>Learning experience</p>
                            </div>
                        </div>
                    </div>

                    <div className={abc.form}>

                        <div className={abc.progress}>
                            <div className={abc.stage1}>
                                <div className={abc.icon1}>
                                    <div className={abc.one}>1</div>
                                </div>
                                <p>Sign Up</p>
                            </div>
                            <div className={abc.stage2}>
                                <div className={abc.icon2}>
                                    <div className={abc.two}>2</div>
                                </div>
                                <p>Subscribe</p>
                            </div>
                        </div>
                        <div className={abc.formheader}>
                            <p>Select your subscription plan</p>
                        </div>
                        <div className={abc.input}>
                                <div className={abc.field1}>
                                            <div className={abc.radio}>
                                                    <input type="radio" value="option1" name='ps' className={abc.vector1} checked={value==='option1'} onChange={btn}/>  
                                                </div>
                                            <div className={abc.container}>
                                                <p>12 Months Subscription</p>
                                                <div className={abc.righttext}>
                                                    <div className={abc.top}>
                                                        <p className={abc.a}>Total</p>
                                                        <p className={abc.b}>₹99</p>
                                                    </div>
                                                    <div className={abc.bottom}>
                                                        <p className={abc.pqr}>₹8</p>
                                                        <p className={abc.rqp}>/mo</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={abc.tag}>
                                                <p>Offer expired</p>
                                            </div>
                                </div>
                                <div className={abc.field2}>
                                    <div className={abc.radio}>
                                                    <input className={abc.vector2} type="radio" value="option2" name='ps' checked={value==='option2'} onChange={btn} />  
                                                </div>
                                            <div className={abc.container}>
                                                <p>12 Months Subscription</p>
                                                <div className={abc.righttext}>
                                                    <div className={abc.top}>
                                                        <p className={abc.a}>Total</p>
                                                        <p className={abc.b}>₹179</p>
                                                    </div>
                                                    <div className={abc.bottom}>
                                                        <p className={abc.pqr}>₹15</p>
                                                        <p className={abc.rqp}>/mo</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={abc.tag}>
                                                <p>Recommended</p>
                                            </div>

                                </div>
                                <div className={abc.field3}>
                                    <div className={abc.radio}>
                                                    <input className={abc.vector3} type="radio" value="option3" name='ps' checked={value==='option3'} onChange={btn}/>  
                                                </div>
                                            <div className={abc.container}>
                                                <p>6 Months Subscription</p>
                                                <div className={abc.righttext}>
                                                    <div className={abc.top}>
                                                        <p className={abc.a}>Total</p>
                                                        <p className={abc.b}>₹149</p>
                                                    </div>
                                                    <div className={abc.bottom}>
                                                        <p className={abc.pqr}>₹25</p>
                                                        <p className={abc.rqp}>/mo</p>
                                                    </div>
                                                </div>
                                            </div>

                                </div>
                                <div className={abc.field4}>
                                    <div className={abc.radio}>
                                                    <input className={abc.vector4} type="radio" value="option4" name='ps' checked={value==='option4'} onChange={btn} />  
                                                </div>
                                            <div className={abc.container}>
                                                <p>3 Months Subscription</p>
                                                <div className={abc.righttext}>
                                                    <div className={abc.top}>
                                                        <p className={abc.a}>Total</p>
                                                        <p className={abc.b}>₹99</p>
                                                    </div>
                                                    <div className={abc.bottom}>
                                                        <p className={abc.pqr}>₹33</p>
                                                        <p className={abc.rqp}>/mo</p>
                                                    </div>
                                                </div>
                                            </div>

                                </div>
                        </div>
                        <div className={abc.summary}>
                            <div className={abc.textcontainer}>
                                <p className={abc.lmo}>Subcription Fee</p>
                                <p className={abc.oml}>₹18,500</p>
                            </div>
                            <div className={abc.Alert}>
                                <div className={abc.header}>
                                    <p className={abc.text1}>Limited time offer </p>
                                    <p className={abc.text2}>- ₹18,401</p>
                                </div>
                                <div className={abc.body}>
                                    <div className={abc.text}>

                                    </div>
                                    <p>Offer valid till 25th MArch 2023</p>
                                </div>
                            </div>
                            <div className={abc.textcontainer1}>
                                <div className={abc.left}>
                                    <p>Total (Incl. of 18% GST)</p>
                                </div>
                                <div className={abc.right}>
                                    <p>{value}</p>
                                </div>
                            </div>
                        </div>
                        <div className={abc.button}>
                            <div className={abc.primary}>
                                <p>CANCEl</p>
                            </div>
                            <div className={abc.secondary}>
                                <p>PROCEED TO PAY</p>
                            </div>
                        </div>
                        <div className={abc.xyz}>
                                <div className={abc.razorpay}>
                                </div>
                        </div>

                    </div>
        </section>
    </div>
  )
}

export default Home