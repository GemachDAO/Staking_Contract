
import 'font-awesome/css/font-awesome.min.css';
import '../css/App.css';
import '../css/main.css';
import logos from '../images/meta.png'
import logoos from '../images/logo.png'


function MyHeader() {


   //Go to Stake Page 
const gotoStake = () => {
    window.location.reload();
}


   //Open and Close Side Bar
const openNav = () => {
    document.getElementById("opet").addEventListener("click", function() {
        document.getElementById("mySidebar").style.width = "50%";
                 document.getElementById("opet").style.display = "none";
                 document.getElementById("xlose").style.display = "block";
                 document.getElementById("kr-leftside2").style.display = "grid";
       
         });         
}
const closeNav = () => {
    document.getElementById("xlose").addEventListener("click", function() {
        document.getElementById("mySidebar").style.width = "0";
              document.getElementById("xlose").style.display = "none";
              document.getElementById("opet").style.display = "block";
              document.getElementById("kr-leftside2").style.display = "none";
      });
} 

return (

    <div>
        <nav>
            <div id="mySidebar" className="sidebar">
                <div id="kr-leftside2">
                    <div className="barlogo">
                        <span>
                    <img src={logoos} style={{width: 150, height: 150,}} alt=''/>    
                    </span>
                    </div>

                    <ul>
                        <li onClick={gotoStake}>
                            <i className="fa fa-circle"></i>Stake
                        </li>
                        <li>
                            <i className="fa fa-exchange"></i>Swap
                        </li>
                        <li>
                            <i className="fa fa-circle"></i>Claim Token
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="desktop">
            <div id="desktop-list">
                <div className="logo">
                    <span>
                    <img src={logoos} alt="" style={{width: 150, height: 150,}}/>
                    
                    </span>
                </div>
                <br/>

                <ul>
                    <li onClick={gotoStake}>
                        <i className="fa fa-circle"></i>Stake
                    </li>
                    <li>
                        <i className="fa fa-exchange"></i>Swap
                    </li>
                    <li>
                        <i className="fa fa-circle"></i>Claim Token
                    </li>
                </ul>

            </div>
        </div>

        <div className="navv">
            <div className='BlackB'>
                <div id="choice">
                    <div className="logo" style={{width:300}}>
                        <span>
                {/* <img src={logo} style={{height: 200, width: 200}} alt=""/></span> */

                        <h2>Gemach DAO </h2>
                        }
                        </span>

                    </div>




                    <div id="connect" className="connect-wallet">
                        <div>
                            <img src={logos} style={{width:25, height:24}} alt=''/>

                        </div>

                    </div>
                    <button id="opet" onClick={openNav} className="openbtn">&#9776;</button>
                    <button id="xlose" onClick={closeNav} className="openbtn">&times;</button>

                </div>
            </div>

        </div>
    </div>

);

}
export { MyHeader }