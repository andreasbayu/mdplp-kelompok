import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../views/Login'
import Register from '../views/Register'

import Beranda from '../views/Beranda'
import Statistik from '../views/Statistik'
import BuatSoal from '../views/BuatSoal'
import DefaultLayout from '../layout/DefaultLayout'

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/user/:path?'>
          <DefaultLayout>
            <Switch>
              <Route exact path='/user/' component={Beranda}/>
              <Route exact path='/user/beranda' component={Beranda}/>
              <Route path='/user/buatsoal' component={BuatSoal}/>
              <Route path='/user/statistik' component={Statistik}/>
              <Route component={() => (<div className="text-lg font-bold text-center mt-20">404</div>)} exact path='/*'/>
            </Switch>
          </DefaultLayout>
        </Route>
        <Router>
          <Switch>
            <Route path='/' component={Login} exact/>
            <Route component={() => (<div className="text-lg font-bold text-center mt-20">Opps Halaman Tidak Ditemukan</div>)} exact path='/*'/>
          </Switch>
        </Router>
      </Switch>
    </Router>
  )
} 

export default Routers