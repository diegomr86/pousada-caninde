import Slider from 'react-slick'
import PhoneIcon from 'react-icons/lib/md/phone-iphone'
import FbIcon from 'react-icons/lib/fa/facebook'
import InstaIcon from 'react-icons/lib/fa/instagram'
import MarkerIcon from 'react-icons/lib/fa/map-marker'
import WhatsappIcon from 'react-icons/lib/fa/whatsapp'
import EnvelopeIcon from 'react-icons/lib/fa/envelope'
import Input from './Input'
import Button from './Button'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const list = [
    { name: 'Mohammed Alabsi - Bahrein / Oriente Médio', 
      link: 'https://www.facebook.com/mohammed.alabsi.18', 
      comment: 'I am from small island in the Arabian gulf region, I have been to many countries with a different adventures but the trip to chapada was the best tour in my life and of course the tour guide Helio Almeida was the reason of this success tour, the waterfalls were amazing, walking for more than 10 km was full of Challenges. you can imagine to to walk 5 km and find the huge waterfall and swim in the cold water.'
    },
    { name: 'Márcia Cristina - Vila Velha / ES', 
      link: 'https://www.facebook.com/profile.php?id=1334755197&ref=br_rs', 
      comment: 'Foi minha primeira viagem sozinha, e eu estava bem apreensiva por isso! Mas escolher a <a href="http://www.tourchapada.com/" target="_blank">Tour Chapada</a> fez toda a diferença, me senti "em casa"! Tive a felicidade de encontrar um grupo de pessoas maravilhosas, com as quais me diverti muiiito! O Helio Ameida é uma pessoa super interessante! Com um jeito simples ele presta um excelente serviço, deixando a impressão de que vc foi recebido por um amigo! O guia Alex Moreira também contribuiu para o sucesso do passeio! Amigo, prestativo e garantiu lindas fotos! (Aliás, isto foi incrível! Você aproveita o passeio, enquanto eles garantem os melhores registros! Muito bom!). Quanto ao lugar, é perfeito! Fui no período chuvoso, mas até a chuva fez com que o passeio se tornasse mais gostoso e excitante! Energia revigorada para a agitação do dia a dia! Saí de <a href="http://www.viladesaojorge.com/" target="_blank">São Jorge</a> com vontade de voltar! Vida longa para a <a href="http://www.tourchapada.com/" target="_blank">Tour Chapada</a>! Sucesso!'
    },
    { name: 'Cristiane Sales - Jacareí / SP', 
      link: 'https://www.facebook.com/cristiane.sales.969?ref=ts&fref=ts', 
      comment: 'Uma semana incrível de aventuras pela Chapada. A cada dia, novas trilhas a serem exploradas com um maravilhoso e revigorante banho nas belas cachoeiras como recompensa.Ao cair da noite , o céu nos revestia com um manto estrelado que a muito tempo não via.Não há palavras para descrever está experiência, somente indo e sentindo.Agradecimento a <a href="http://www.tourchapada.com/" target="_blank">Tour Chapada</a> por me proporcionar este maravilhoso passeio, sabendo atender a todos e pela liberdade me dada para ir além. '
    },
    { name: 'Marina Lopes - Fortaleza / Ceará', 
      link: 'https://www.facebook.com/mar.lops.1', 
      comment: 'Com o intuito de otimizar o pouco tempo que teria para conhecer a Chapada dos Veadeiros resolvi pela primeira vez contratar os serviços de uma agência de turismo. A ideia de ficar presa a um pacote fechado com um grupo desconhecido me exasperou um pouco. Mas grande foi minha surpresa e acho que isso se deve ao profissionalismo da agência escolhida. Hélio e o guia Alex são extremamente atenciosos, pacientes e compromissados com o grupo. O roteiro é bem elaborado, proporcionando uma bela visão desse lugar mágico. Minha imensa gratidão, <a href="http://www.tourchapada.com/" target="_blank">Tour Chapada</a>. Bons ventos nesse navegar e até mais. '
    },
    { name: 'Vivian Moutinho – Rio de Janeiro / RJ', 
      link: 'https://www.facebook.com/vivian.moutinho', 
      comment: 'A experiência de conhecer a chapada por si só é maravilhosa. Agora, conhecer do lado de quem sabe tudo de lá e faz de tudo pra te dar a melhor experiência da vida é SENSACIONAL. Isso que o Hélio e a <a href="http://www.tourchapada.com/" target="_blank">Tour Chapada</a> me proporcionaram: uma experiência sensacional. Os melhores guias, que faziam daquelas trilhas enorme um passeio maravilhoso onde a gente ia rindo do início ao fim. Da primeira parada ao city tour em Brasilia, tudo foi perfeito! Hélio, seremos pra sempre gratos e voltaremos em breve!'
    },
    { name: 'Adrian Adkison - São Francisco / Califórnia', 
      link: 'https://goo.gl/photos/dD749d7PFbH5hfmw9', 
      comment: 'This trip was incredible. None of the photos I saw before coming did this place justice. Not only is everyday filled with incredible hikes, the small towns themselves are super charming and even have some nightlife. Saturday had an awesome forró event. Helio is really what made the trip though. This guys is such an expert on animals, plants, and trails throughout the Chapada. Aside from that he is extremely kind and caring guide.'
    },
    { name: 'Rachel Meneguelli - Anchieta / ES', 
      link: 'https://www.facebook.com/rachel.meneguellitannure', 
      comment: '"Depois de pesquisar a possibilidade do passeio pela internet, enviei um e-mail pelo próprio site e a resposta veio em seguida. Fizemos toda negociação por e-mail. Eu viajei sozinha, o Hélio esclareceu todas as minhas dúvidas. O Hélio e os demais guias (o João e o Caio que estavam conosco) são muito atenciosos não só durante as trilhas, mas também na <a href="http://www.viladesaojorge.com/" target="_blank">Vila de São Jorge</a>, que é muito simpática.  Foi uma viagem maravilhosa pelo que vi e pelas pessoas que conheci. Bons caminhos!"'
    }   
]

export default ({ handleChange, handleSubmit, name, email, comment }) => (
    <div className="wrapper" id="contact">
        <div className="container">
            <div className="box">
                <h3>O que dizem sobre nós</h3>
                <Slider {...settings} className="slider">
                    {list.map((item, key) => (
                        <p key={key}>
                            <span dangerouslySetInnerHTML={{__html: item.comment}} />
                            <br/>
                            <br/>
                            <a href={item.link} target="_blank">{item.name}</a>
                        </p>
                    ))}
                </Slider>
                <div className="list">
                    <div className="item">
                        <PhoneIcon size={20} color={'#000'} />
                        <span>(62) 3455-1060</span>
                    </div>
                    <div className="item">
                        <WhatsappIcon size={20} color={'#000'} />
                        <span>(61) 9 9968-4720 / (61) 9 8165-4082 / (61) 9 9994-1236</span>
                    </div>
                    <div className="item">
                        <EnvelopeIcon size={20} color={'#000'} />
                        <a href="mailto:pousadacaninde@gmail.com"><span>pousadacaninde@gmail.com</span></a>
                    </div>
                    <div className="item">
                        <FbIcon size={20} color={'#000'} />
                        <a href="https://www.facebook.com/pousadacanindesaojorge/" target="_blank">facebook.com/pousadacanindesaojorge</a>
                    </div>
                    <div className="item">
                        <InstaIcon size={20} color={'#000'} />
                        <a href="https://www.instagram.com/pousadacaninde/">instagram.com/pousadacaninde</a>
                    </div>
                    <div className="item">
                        <MarkerIcon size={20} color={'#000'} />
                        <span>Rua 12, Qd 6 Lt 13, São Jorge / Alto Paraíso - GO</span>
                    </div>
                </div>
            </div>
            <div className="box contact">
                <h3>Solicite um Orçamento</h3>
                <Input onChange={handleChange} placeholder={name} name="name"/>
                <Input onChange={handleChange} placeholder={email} name="email"/>
                <Input type='textarea' onChange={handleChange} placeholder={comment} name="comment" />
                <Button onClick={handleSubmit}>
                    Enviar
                </Button>
            </div>
        </div>
        <div className="footer">
            <hr />
            <br />
            <br />
            <span>© 2017 Desenvolvido por <b>Mtx Web Art</b></span>
        </div>
        <style jsx>{`
            .wrapper {
                padding: 30px 0 50px;
                text-align: center;
                box-shadow: 0 4px 4px rgba(0,0,0,0.8);
                z-index: 1;
            }
            .wrapper h3 {
                text-transform: uppercase;
                width: 100%;
            }
            .container {
                padding-bottom: 50px;
            }
            .box {
                margin: 0 auto;
                max-width: 80%;
            }
            .slider p {
                text-align: center;
                max-width: 80%;
            }
            .list {
                height: 220px;
                margin-top: 30px;
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .item {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                max-width: 100%;
            }
            .item > * {
                margin-left: 15px;
                font-weight: 300;
            }
            .contact {
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .footer {
                padding-top: 30px;
                margin: 0 auto;
                width: 80%;
            }

            .container {
                display: flex;
                align-items: center;
                flex-flow: row nowrap;
                justify-content: space-between;
            }
            .box {
                width: 45%;  
                height: 700px; 
                margin: auto;                 
            }
            .box.contact{
                height: 500px; 
                margin-top: 0;
            }
            @media(max-width: 1024px) {
                .item > * {
                    margin-left: 3px;
                }
                .container {
                    display: block;
                }
                .box {
                    width: 98%;  
                }
                .list {
                    text-align: left;
                }
            }
        `}</style>
    </div>
)