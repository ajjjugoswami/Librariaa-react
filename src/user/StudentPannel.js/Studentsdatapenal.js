import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
import './StyleDiv.css'
export default function Studentsdatapenal() {
    var [imagefetch, setimagefetch] = useState({})
    var [imagefetch1, setimagefetch1] = useState([])
    var [mmonths, setmmonths] = useState("")
    var [dayss, setdayss] = useState("")
    var [yearss, setyearss] = useState("")

    var arrays = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // Timer start------
    const [expiryTime, setExpiryTime] = useState("");
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );

    const countdownTimer = () => {

        const timeInterval = setInterval(() => {

            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    useEffect(() => {
        countdownTimer();
    });

    // Timer close---------
    useEffect(() => {
        var sessiondata = sessionStorage.getItem("roll")
        if (sessiondata == null) sessionStorage.setItem("roll", "No_data")
        else {
            Fire.child("booksissues").child(sessiondata).on("value", datas => {
                if (datas.val() !== null) {

                    setimagefetch(datas.val())
                }
            })
        }
    }, [])

    useEffect(() => {
        if (imagefetch !== {}) {
            var firedatainarr = []
            Object.keys(imagefetch).map(data => {
                firedatainarr.push(imagefetch[data])
            })
            setimagefetch1(firedatainarr)
        }
    }, [imagefetch])
    useEffect(() => {
        if (imagefetch1 !== []) {
            imagefetch1.map(datas => {
                // 
                // setmmonths(datas.months)
                // setdayss(datas.issuedatess)
                // setyearss(datas.years)
                var tomorrow = new Date(`${datas.issuedatess} ${datas.months} ${datas.years}`);
                tomorrow.setDate(tomorrow.getDate() + 90);
                var dayss = new Date(tomorrow).getDate();
                var monthss = arrays[new Date(tomorrow).getMonth()];
                var yearss = new Date(tomorrow).getFullYear();

                setExpiryTime(`${dayss} ${monthss} ${yearss} 09:10:25`)
            })
        }
    },
        [imagefetch1])

    return (
        <div class="udb-sec udb-cour">
            <h4><img src="images/icon/db2.png" alt="" /> Your books</h4>
             <div class="sdb-cours">
                <div  >
                    {
                        imagefetch1.map((datas) => {

                            return (
                                <>
                                    <div className='imagediv'>
                                        <img className='imageclass'
                                            src={datas.Book1}
                                        />
                                    </div>

                                    <div className='imagediv'>
                                        <img className='imageclass'
                                            src={datas.Book2}
                                        />
                                    </div>

                                    <div className='imagediv'>
                                        <img className='imageclass'
                                            src={datas.Book3}
                                        />
                                    </div>

                                    <div className='imagediv'>
                                        <img className='imageclass'
                                            src={datas.Book4}
                                        />
                                    </div>

                                    <div className='imagediv'>
                                        <img className='imageclass'
                                            src={datas.Book5}
                                        />
                                    </div>
                                </>
                            )
                        })
                    }

                </div>



                {/* <ul>
                    {
                        imagefetch1.map((datas) => {

                            return (
                                <>
                                    <li>
                                        <div class="list-mig-like-com com-mar-bot-30">
                                            <div class="list-mig-lc-img"> <img src={datas.Book1} alt="" /> </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list-mig-like-com com-mar-bot-30">
                                            <div class="list-mig-lc-img"> <img src={datas.Book2} alt="" /> </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list-mig-like-com com-mar-bot-30">
                                            <div class="list-mig-lc-img"> <img src={datas.Book3} alt="" /> </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list-mig-like-com com-mar-bot-30">
                                            <div class="list-mig-lc-img"> <img src={datas.Book4} alt="" /> </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="list-mig-like-com com-mar-bot-30">
                                            <div class="list-mig-lc-img"> <img src={datas.Book5} alt="" /> </div>
                                        </div>
                                    </li>

                                </>
                            )
                        })
                    }


                </ul> */}
            </div>
            <br />
            <div class="udb-sec udb-prof">
                <h4><img src="images/icon/db1.png" alt="" /> My Profile</h4>
 
                <div class="sdb-tabl-com sdb-pro-table">
                    <table class="responsive-table bordered">
                        <tbody>
                            <tr>
                                <td>Student Id</td>
                                <td>:</td>
                                <td>{sessionStorage.getItem("roll")}</td>
                            </tr>
                            {imagefetch1.map((datas) => {

                                return (<>

                                    <tr>
                                        <td>Book Issue date</td>
                                        <td>:</td>
                                        <td>{`${datas.issuedatess} ${datas.months},${datas.years}`}</td>
                                    </tr>
                                </>)
                            })}

                            {expiryTime !== false ?
                                <>
                                    <tr>
                                        <td>Book Reissue date</td>
                                        <td>:</td>
                                        <td>
                                            {`${countdownTime.countdownDays} days: 
                                            ${countdownTime.countdownHours} hours: 
                                            ${countdownTime.countdownMinutes} min: 
                                            ${countdownTime.countdownSeconds} sec`}


                                        </td>
                                    </tr>
                                </>
                                : <p>Deal has been Expired</p>}



                        </tbody>
                    </table>

                    {/* <div class="sdb-bot-edit">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <a href="#" class="waves-effect waves-light btn-large sdb-btn sdb-btn-edit"><i class="fa fa-pencil"></i> Edit my profile</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
