import react from "react";
import { button, navbar, collapse, navbar-toggler, navbar-toggler-icon,import { ReactComponent } from "*.svg";
}
from "./bootstrap";

class navset extends React {
render{}
<nav class="navbar navbar-expand-sm navbar-dark sticky-top">
        <div class="container"><a class="navbar-brand" href="#" title="Image from clipart.email"><img src="https://cdn.clipart.email/b6cf98d40ef7ebc50b5c71d270e5dbe0_images-for-rooster-silhouette-clip-art-rooster-silhouette-png-_880-907.jpeg" alt="Silhouette Transparent Background Rooster Clipart" class="img-fluid img-thumbnail" height="50" width="50" /></a>
            <button class="navbar-toggler ml-auto img-thumbnail" type="button" data-toggle="collapse" data-target="#farmNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="farmNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item-active"><a class="nav-link" href="#"><i class="fa fa-home fa-lg text-white"></i>Home</a></li>
                <li class="nav-item"><a class="nav-link" href="OurFarm.html"><i class="fa fa-info fa-lg text-white"></i>About</a></li>
                <!--<li class="nav-item"><a class="nav-link" href="Sales"><i class="fa fa-list fa-lg text-white">Sales</i> </a></li>-->
                <li class="nav-item"><a class="nav-link" href="Animals.html"><i class="fa fa-address-card fa-lg text-white"></i>Animals</a></li>
                <li class="nav-item"><a class="nav-link" href="contactFarm.html"><i class="fa fa-address-card fa-lg text-white"></i>Contact Us</a></li>
                </ul>
                <span class="navbar-text ml-auto">
                    <a role="button" data-toggle="modal" data-target="#loginModal">
                        <i class="fa fa-sign-in"></i> Login
                    </a>
                </span>
            </div>
        </div>
    </nav>
    <div id="loginModal" class="modal fade" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Login</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label class="sr-only" for="loginEmail">Email address</label>
                                    <input type="email" class="form-control form-control-sm" id="loginEmail" placeholder="Enter email">
                                </div>
                                <div class="form-group col-12">
                                    <label class="sr-only" for="loginPassword">Password</label>
                                    <input type="password" class="form-control form-control-sm" id="loginPassword" placeholder="Password">
                                </div>
                                <div class="col">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox">
                                        <label class="form-check-label"> Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}