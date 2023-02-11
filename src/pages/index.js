import * as React from 'react'
import LayoutPage from '../components/layout'
import Seo from '../components/seo'


const IndexPage = () => {
  return(
    <>
      <LayoutPage pageTitle="Home Page">
        <img src='https://scontent.frgn4-1.fna.fbcdn.net/v/t45.1600-4/320749078_23852767164840395_40015064554036359_n.png?stp=cp0_dst-jpg_q90_s1080x2048_spS444&_nc_cat=102&ccb=1-7&_nc_sid=68ce8d&_nc_ohc=gDMo6wdYLTwAX_D_2nB&tn=OdKeMpnzunYWg-sr&_nc_ht=scontent.frgn4-1.fna&oh=00_AfD1q4itnTAl9rz0RDw0j-koZ8IJl5fvnUfMF5dbZKSqZQ&oe=63EB6C49' alt='mypic' width='90%' />
        <br /><br />
        <p>Home Page</p><br />
      </LayoutPage>
    </>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage