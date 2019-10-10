import React from 'react'

import Banner from '../../components/homepage/banner/banner.component'
import Main from '../../components/homepage/main/main.component'
import Cta from '../../components/homepage/cta/cta.component'
import Footer from '../../components/homepage/footer/footer.component'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Main />
      <Cta />
      <Footer />
    </div>
  );
}

export default HomePage