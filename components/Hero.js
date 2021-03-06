// import Slider from 'react-slick'

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

const list = [
    {
        image: '/static/banner.png',
        message: 'NO CORAÇÃO DA CHAPADA DOS VEADEIROS, <br/>SEU REFÚGIO ESTÁ DE PORTAS ABERTAS',
    }
]

export default () => (
    <div className="wrapper" id="home">
        {/*<Slider {...settings} className="container">*/}
            {list.map((item, key) => (
                <div key={key} className="item" style={{ backgroundImage: `url(${item.image})`, display: 'flex' }}>
                    <h2>NO CORAÇÃO DA CHAPADA DOS VEADEIROS, <br/>SEU REFÚGIO ESTÁ DE PORTAS ABERTAS</h2>
                </div>
            ))}
        {/*</Slider>*/}
        <style jsx>{`
            .wrapper {
                height: 100vh;
                width: 100%;
            }
            .container {
                height: 100%;
                width: 100%;
            }
            .item {
                width: 100%;
                background-size: cover;
                height: 100%;
                align-items: center;
                flex-flow: column;
                justify-content: center;
            }
            .item h2 {
                font-size: 80px;
                text-transform: uppercase;
                color: #fff;
                max-width: 95%;
                text-align: center;
                margin: 0 auto;
            }
            @media(max-width: 992px) {
                .item h2 {
                    font-size: 60px;
                }
            }
            @media(max-width: 768px) {
                .item h2 {
                    font-size: 50px;
                }
            }
      
        `}</style>
    </div>
)