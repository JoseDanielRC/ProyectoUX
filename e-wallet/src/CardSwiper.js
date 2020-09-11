import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Cards.css';
class CardSwiper extends Component {
    /*componentDidMount() {
        this.swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    render() {
        return (
            <body>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" src="https://th.bing.com/th/id/OIP.Ja7QRmPDTN9mIKEzRL2sxAHaGH?pid=Api&rs=1">
                            <img src="https://th.bing.com/th/id/OIP.Ja7QRmPDTN9mIKEzRL2sxAHaGH?pid=Api&rs=1" />
                        </div>
                        <div class="swiper-slide" src="https://th.bing.com/th/id/OIP.Ja7QRmPDTN9mIKEzRL2sxAHaGH?pid=Api&rs=1">
                            <img src="https://th.bing.com/th/id/OIP.Ja7QRmPDTN9mIKEzRL2sxAHaGH?pid=Api&rs=1" />
                        </div>
                        
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <script src="../package/swiper-bundle.min.js"></script>
            </body>
        );
    }*/
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "30vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }
    static get CARD_STYLE() {
        return {
            height: '200px',
            width: '400px',
            paddingTop: '80px',
            textAlign: 'center',
            background: 'white',
            color: '#FFF',
            fontSize: '12px',
            textTransform: 'uppercase',
            borderRadius: '10px',
            'font-weight': 'bold'
        };
    }

    render() {
        return (
            /* <div style={CardSwiper.CONTAINER_STYLE}>
                 <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
                     <div style={CardSwiper.CARD_STYLE}>
                         <img style={{ 'width': '400px', 'height': '200px', position: 'relative', bottom: '80px' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                         </img>
                     </div>
                     <div style={CardSwiper.CARD_STYLE}><img style={{ 'width': '400px', 'height': '200px', position: 'relative', bottom: '80px' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                     </img></div>
                     <div style={CardSwiper.CARD_STYLE}><img style={{ 'width': '400px', 'height': '200px', position: 'relative', bottom: '80px' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                     </img></div>
                     <div style={CardSwiper.CARD_STYLE}><img style={{ 'width': '400px', 'height': '200px', position: 'relative', bottom: '80px' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                     </img></div>
                     <div style={CardSwiper.CARD_STYLE}><img style={{ 'width': '400px', 'height': '200px', position: 'relative', bottom: '80px' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                     </img></div>
                 </ReactCardCarousel>
             </div>*/
            <div class="carousel slide" data-ride="carousel" style={CardSwiper.CONTAINER_STYLE}>
                <Carousel width="400px" style={{ margin: -1 }} showArrows={true} showThumbs={false} showStatus={false}>
                    <div>
                        <img style={{ 'width': '400px', 'height': '200px', position: 'relative' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                        </img>
                        <p className="legend">Tarjeta 1</p>
                    </div>
                    <div>
                        <img style={{ 'width': '400px', 'height': '200px', position: 'relative' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                        </img>
                        <p className="legend">Tarjeta 2</p>
                    </div>
                    <div>
                        <img style={{ 'width': '400px', 'height': '200px', position: 'relative' }} src="https://purepng.com/public/uploads/thumbnail/purepng.com-credit-cardobjectsdiamond-ringcardobjectbankcreditatmdebit-631522323297evisb.png" >
                        </img>
                        <p className="legend">Tarjeta 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}
export default CardSwiper;