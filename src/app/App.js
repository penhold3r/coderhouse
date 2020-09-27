import angular from 'angular'

import 'angular-route'
import routerConfig from './routes/routes.config'

import currencyConfig from './utils/currency'

import AppController from './controllers/app.controller'

import HeaderComponent from './components/HeaderComponent/header.component'
import ExpertsSliderComponent from './components/ExpertsSliderComponent/experts-slider.component'
import PricingDetailsComponent from './components/PricingDetailsComponent/pricing-details.component'

// styles
import '../styles/index.scss'
//fonts
import '../fonts/fonts.css'
// icons
import 'remixicon/fonts/remixicon.css'

const App = angular.module('App', ['ngRoute'])

App.config(routerConfig)
App.config(currencyConfig)

App.controller('AppController', AppController)

App.component('mainHeader', HeaderComponent)
App.component('expertsSlider', ExpertsSliderComponent)
App.component('pricingDetails', PricingDetailsComponent)
