import angular from 'angular'

import 'angular-route'
import routerConfig from './routes/routes.config'

import AppController from './controllers/app.controller'

import HeaderComponent from './components/HeaderComponent/header.component'
import ExpertsSliderComponent from './components/ExpertsSliderComponent/experts-slider.component'

// styles
import '../styles/index.scss'
//fonts
import '../fonts/fonts.css'
// icons
import 'remixicon/fonts/remixicon.css'

const App = angular.module('App', ['ngRoute'])

App.config(routerConfig)

App.controller('AppController', AppController)

App.component('mainHeader', HeaderComponent)
App.component('expertsSlider', ExpertsSliderComponent)
