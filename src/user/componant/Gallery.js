import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
export default function Gallery() {
    var [all, setall] = useState({})


    useEffect(() => {
        Fire.child("galery").on("value", datas => {
            setall(datas.val())
        })
    }, [])
    return (
        <div>
            <section>
                <div class="head-2">
                    <div class="container">
                        <div class="head-2-inn head-2-inn-padd-top">
                            <h1>Photo Gallery</h1>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="ed-res-bg">
                    <div class="container com-sp pad-bot-70 ed-res-bg">
                        <div class="row">
                            <div class="cor about-sp h-gal ed-pho-gal">
                                <ul>
                                     

                                    {
                                        Object.keys(all).map((datas) => {
                                            return (
                                                <>
                                                    <a href={all[datas].img} target={"_blank"}><li><img class="materialboxed" data-caption="Education master image captions" src={all[datas].img} alt=""/>
                                                    </li></a>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
