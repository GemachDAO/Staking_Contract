import 'font-awesome/css/font-awesome.min.css';
import '../css/App.css';
import '../css/main.css';
import logo from '../images/logo.svg';


function MyFooter() {
return (
    <div className='social'>
    <div className="cas">
        <section className='footer'>
            <img src={logo} alt="" style={{width: 250, height: 150,}}/>
            <small>Gemach is the native token of Gemach DAO and is an instrument to coordinate the activity among its community members for participation in the unbanked Web3 movement</small>
        </section>
    </div>
    <div>
        <i className='fa fa-twitter'></i>
        <i className='fa fa-youtube'></i>
        <i className='fa fa-facebook'></i>
        <p>Copyright 2021</p>
        <br/>
        <br/>
    </div>
</div>
);
}

export { MyFooter }