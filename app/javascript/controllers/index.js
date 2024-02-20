// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

import SideMenuController from "./side_menu_controller"
application.register("side-menu", SideMenuController)
