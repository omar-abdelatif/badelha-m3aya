import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav id='navbar'>
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">بدلها معايا</Link>
                    <button className="btn btn-primary menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <i className="fad fa-bars"></i>
                    </button>
                    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasTopLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body nav-data">
                            <form className="search">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <div className="sell">
                                <Link to="/sell" className="btn btn-outline-warning">تبديل</Link>
                                <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    أضف إعلانك هنا
                                </button>
                            </div>
                            <div className="login">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    تسجيل الدخول
                                </button>
                            </div>
                            <div className="lang">
                                <select name="" id="" className="form-control text-center">
                                    <option value="">اللغة</option>
                                    <option value="ar">Arabic</option>
                                    <option value="eng">English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">تسجيل دخول</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                                <i className='fad fa-times'></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">البريد الإلكتروني</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">كلمة المرور</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">تذكرني</label>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">تسجيل الدخول</button>
                                    <Link to='' className='btn'>نسيت كلمة السر</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;