import React from 'react'
import { Link } from 'react-router-dom'

const SocialMediaLinks = () => {
  return (
    <div>
       <section>
        <div class="icon-float">
            <ul>
                
                <li><Link to="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9050523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad=1&gclid=CjwKCAjwue6hBhBVEiwA9YTx8PzGdl89xIlFHMBDdXv_-DFEqNmiWgNXcwJfsfMhaxx7uKmQPsAQjBoCboMQAvD_BwE" class="fb1" target='-'><i class="fa fa-facebook" aria-hidden="true"></i></Link> </li>
                <li><Link to="https://support.google.com/answer/2451065?hl=en" class="gp1" target='-'><i class="fa fa-google-plus" aria-hidden="true"></i></Link> </li>
                <li><Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target='-' class="tw1"><i class="fa fa-twitter" aria-hidden="true"></i></Link> </li>
                <li><Link to="https://www.linkedin.com/home/?originalSubdomain=in" target='-' class="li1"><i class="fa fa-linkedin" aria-hidden="true"></i></Link> </li>
                <li><a href="#" class="wa1"><i class="fa fa-whatsapp" aria-hidden="true"></i></a> </li>
                <li><Link to="mailto:vcengg1995@gmail.com"  target='-'  class="sh1"><i class="fa fa-envelope-o" aria-hidden="true"></i></Link> </li>
            </ul>
        </div>
    </section>
    </div>
  )
}

export default SocialMediaLinks
