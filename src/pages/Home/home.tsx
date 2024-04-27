import React from 'react'
import './home.css'
import { Facebook ,Twitter,Instagram,Youtube,Search,Heart,ShoppingCart,ChevronDown, Check, ArrowLeftRight, PhoneCall, Truck, Eye, MapPin, Mail, Phone, ChevronRight, ClipboardList, User, CalendarDays, CircleDollarSign} from 'lucide-react';
import carousel1 from '../../assets/image/carousel_1.jpg'
import carousel2 from '../../assets/image/carousel_2.jpg'
import cat1 from '../../assets/image/cat-1.jpg'
import cat2 from '../../assets/image/cat-2.jpg'
import cat3 from '../../assets/image/cat-3.jpg'
import cat4 from '../../assets/image/cat-4.jpg'
import cat5 from '../../assets/image/cat-5.jpg'
import cat6 from '../../assets/image/cat-6.jpg'
import offer1 from '../../assets/image/offer-1.png'
import offer2 from '../../assets/image/offer-2.png'
import product1 from '../../assets/image/product-1.jpg'
import product2 from '../../assets/image/product-2.jpg'
import product3 from '../../assets/image/product-3.jpg'
import product4 from '../../assets/image/product-4.jpg'
import product5 from '../../assets/image/product-5.jpg'
import product6 from '../../assets/image/product-6.jpg'
import product7 from '../../assets/image/product-7.jpg'
import product8 from '../../assets/image/product-8.jpg'
import product9 from '../../assets/image/product-9.jpg'
import product10 from '../../assets/image/product-10.jpg'
import product11 from '../../assets/image/product-11.jpg'
import product12 from '../../assets/image/product-12.jpg'
import product13 from '../../assets/image/product-13.jpg'
import product14 from '../../assets/image/product-14.jpg'
import product15 from '../../assets/image/product-15.jpg'
import product16 from '../../assets/image/product-16.jpg'
import { Link } from 'react-router-dom';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';



export default function home() {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">

          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href=''>TTYC</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark"href=''>Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark"href=''>Support</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className='d-inline-flex align-items-center'>
              <a className="text-dark px-2" href=''></a>
              <Facebook className="fab fa-facebook-f" />
              <a className="text-dark px-2" href=''></a>
              <Twitter className="fab fa-Twitter"/>
              <a className="text-dark px-2" href=''></a>
              <Instagram className="fab fa-instagram" />
              <a className="text-dark pl-2" href=''></a>
              <Youtube className="fab fa-youtube" />
            </div>
          </div>
         </div>
         <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="text-decoration-none" href=''>
              <h1 className='m-0 display-5 font-weight-semi-bold'>
                <span className="text-primary font-weight-bold border px-3 mr-1">K</span>
              TTYC
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder='Search for products'/>
                <div className='input-group-append'>
                  <span className='input-group-text bg-transparent text-primary'>
                  <Search className='fa fa-search' />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a className="btn border" href=''>
            <Heart className="fas fa-heart text-primary"/>
            <span className="badge">0</span>
            </a>
            <a className="btn border" href=''>
            <ShoppingCart className="fas fa-shopping-cart text-primary"/>
            <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className='row border-top px-xl-5'>
          <div className="col-lg-3 d-none d-lg-block">
          <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: 65, marginTop: -1, padding: "0 30px" }}>
              <h6 className="m-0">Categories</h6>
              <ChevronDown className='fa fa-angle-down text-dark'/>
            </a>
            <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
              <div className="navbar-nav w-100 overflow-hidden">
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    Cosmetics
                    <ChevronDown className="fa fa-angle-down float-right mt-1"/>
                  </a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a href='' className="dropdown-item">Perfume</a>
                    <a href='' className="dropdown-item">Makeup</a>
                    <a href='' className="dropdown-item">Skin Care</a>
                  </div>
                </div>
                <a href='' className="nav-item nav-link">Electronics</a>
                <a href='' className="nav-item nav-link">Food</a>
                <a href='' className="nav-item nav-link">House</a>
                <a href='' className="nav-item nav-link">Book</a>
                <a href='' className="nav-item nav-link">Car</a>
                <a href='' className="nav-item nav-link">International Goods</a>
                <a href='' className="nav-item nav-link">Fashion</a>
                <a href='' className="nav-item nav-link">Pet</a>
                <a href='' className="nav-item nav-link">Shoes</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href='' className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">K</span>
                  "TTYC"
                </h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <a href='' className="nav-item nav-link active">Home</a>
                  <a href='' className="nav-item nav-link">Shop</a>
                  <a href='' className="nav-item nav-link">Shop Detail</a>
                  <div className="nav-item dropdown">
                    <a href='#' className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href='' className="dropdown-item"> Shopping Cart</a>
                      <a href='' className="dropdown-item"> Checkout</a>
                    </div>
                  </div>
                  <a href='' className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <Link to="/Login" className="nav-item nav-link">Login</Link>
                  <Link to="/SignUp" className="nav-item nav-link">Register</Link>
                </div>
              </div>
            </nav>

            <div id="header-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carousel1} className="img-fluid" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3">
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">Makeup</h3>
                      <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={carousel2} className="img-fluid" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3">
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                      <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                    </div>
                  </div>
                </div>

              </div>
              <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-dark">
                  <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
              </a>
              <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-dark">
                  <span className="carousel-control-next-icon mb-n2"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
              <Check className="icon-felx"/>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" >
              <Truck  className="icon-felx" />
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
            <ArrowLeftRight className="icon-felx" />
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
            <PhoneCall className="icon-felx" />
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
              <p className="text-right">10 Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
                <img src={cat1} className="img-fluid" alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Shoes</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
              <p className="text-right">15 Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
                <img src={cat2} className="img-fluid" alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Perfume</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
              <p className="text-right">20 Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
              <img src={cat3} className="img-fluid" alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Furniture</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
              <p className="text-right">25 Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
              <img src={cat4} className="img-fluid" alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Laptop</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
              <p className="text-right">30 Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
              <img src={cat5} className="img-fluid" alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Bags</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
              <p className="text-right">35 Products</p>
              <a href="" className="cat-img position-relative overflow-hidden mb-3">
              <img src={cat6} className="img-fluid" alt="" />
              </a>
              <h5 className="font-weight-semi-bold m-0">Camera</h5>
            </div>
          </div>
        </div>
      </div>


    
    <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5"> 
                    <img src={offer1} alt="" />
                    <div className="position-relative">
                        <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                    <img src={offer2} alt="" />
                    <div className="position-relative">
                        <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 


    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Products</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img src={product1} className="img-fluid w-100" alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Smart folding study table</h6>
              <div className="d-flex justify-content-center">
                <h6>100.000Đ</h6><h6 className="text-muted ml-2"><del>150.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product2} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Sneakers</h6>
              <div className="d-flex justify-content-center">
                <h6>450.000Đ</h6><h6 className="text-muted ml-2"><del>500.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product3} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Crossbody bag</h6>
              <div className="d-flex justify-content-center">
                <h6>150.000Đ</h6><h6 className="text-muted ml-2"><del>200.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product4} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">CANON EOS CAMERA</h6>
              <div className="d-flex justify-content-center">
                <h6>25.000.000Đ</h6><h6 className="text-muted ml-2"><del>27.000.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product5} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Simple facial cleanser</h6>
              <div className="d-flex justify-content-center">
                <h6>100.000Đ</h6><h6 className="text-muted ml-2"><del>130.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product6} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Backpack</h6>
              <div className="d-flex justify-content-center">
                <h6>200.000Đ</h6><h6 className="text-muted ml-2"><del>250.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product7} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Channel perfume</h6>
              <div className="d-flex justify-content-center">
                <h6>1.000.000Đ</h6><h6 className="text-muted ml-2"><del>1.200.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product8} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Strappy sandals</h6>
              <div className="d-flex justify-content-center">
                <h6>90.000Đ</h6><h6 className="text-muted ml-2"><del>120.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="container-fluid bg-secondary my-5">
      <div className="row justify-content-md-center py-5 px-xl-5">
        <div className="col-md-6 col-12 py-5">
          <div className="text-center mb-2 pb-2">
            <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
            <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
          </div>
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here"/>
              <div className="input-group-append">
                <button className="btn btn-primary px-4">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">New product</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product9} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>100.000Đ</h6><h6 className="text-muted ml-2"><del>150.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product10} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>2.000.000Đ</h6><h6 className="text-muted ml-2"><del>2.500.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product11} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>100.000Đ</h6><h6 className="text-muted ml-2"><del>120.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product12} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>50.000Đ</h6><h6 className="text-muted ml-2"><del>60.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product13} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>100.000Đ</h6><h6 className="text-muted ml-2"><del>120.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product14} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>500.000Đ</h6><h6 className="text-muted ml-2"><del>550.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product15} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>30.000Đ</h6><h6 className="text-muted ml-2"><del>50.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product16} alt=""/>
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>80.000Đ</h6><h6 className="text-muted ml-2"><del>100.000Đ</del></h6>
              </div>
            </div>
            <div className="card-center d-flex justify-content bg-light border">
              <p className="btn btn-sm left-right text-dark p-0"><User className="fas fa-user text-primary mr-1" style={{ width: "20px", height: "20px" }}/>100/500</p>
              <p className="btn btn-sm left-right text-dark p-0"><CalendarDays className="fas fa-calendar text-primary mr-1" style={{ width: "20px", height: "20px" }} />30/04/2024</p>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="" className="btn btn-sm text-dark p-0"><Eye className="fas fa-eye text-primary mr-1" style={{ width: "20px", height: "20px" }} />View Detail</a>
              <a href="" className="btn btn-sm text-dark p-0"><ClipboardList className="fas fa-shopping-cart text-primary mr-1"style={{ width: "20px", height: "19px" }} />PreOrder</a>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <a href="" className="text-decoration-none">
                    <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">K</span>TTYC</h1>
                </a>
                <p>The commercial floor concentrates the greatest demand</p>
                <p className="mb-2"><MapPin  className="fa fa-map-marker-alt text-primary mr-3"/>222 Tran Cao Van, Da Nang</p>
                <p className="mb-2"><Mail className="fa fa-envelope text-primary mr-3" />ttyc@example.com</p>
                <p className="mb-0"><Phone className="fa fa-phone-alt text-primary mr-3" />+846 2818 750</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="index.html"><ChevronRight className="fa fa-angle-right mr-2" />Home</a>
                            <a className="text-dark mb-2" href="shop.html"><ChevronRight className="fa fa-angle-right mr-2" />Our Shop</a>
                            <a className="text-dark mb-2" href="detail.html"><ChevronRight className="fa fa-angle-right mr-2" />Shop Detail</a>
                            <a className="text-dark mb-2" href="cart.html"><ChevronRight className="fa fa-angle-right mr-2" />Shopping Cart</a>
                            <a className="text-dark mb-2" href="checkout.html"><ChevronRight className="fa fa-angle-right mr-2" />Checkout</a>
                            <a className="text-dark" href="contact.html"><ChevronRight className="fa fa-angle-right mr-2" />Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="index.html"><ChevronRight className="fa fa-angle-right mr-2" />Home</a>
                            <a className="text-dark mb-2" href="shop.html"><ChevronRight className="fa fa-angle-right mr-2" />Our Shop</a>
                            <a className="text-dark mb-2" href="detail.html"><ChevronRight className="fa fa-angle-right mr-2" />Shop Detail</a>
                            <a className="text-dark mb-2" href="cart.html"><ChevronRight className="fa fa-angle-right mr-2" />Shopping Cart</a>
                            <a className="text-dark mb-2" href="checkout.html"><ChevronRight className="fa fa-angle-right mr-2" />Checkout</a>
                            <a className="text-dark" href="contact.html"><ChevronRight className="fa fa-angle-right mr-2" />Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Your Name"  />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 py-4" placeholder="Your Email"  />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-dark">
                    &copy; <a className="text-dark font-weight-semi-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
                    by ThuyKieu Distributed By TTYC
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt=""/>
            </div>
        </div>
    </div>
    
    </div>
  )
}
