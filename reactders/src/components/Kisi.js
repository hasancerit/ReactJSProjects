import React, { Component } from 'react'
import './comp1c.css'
import PropTypes from 'prop-types'


class Kisi extends Component {
    /*state = {
        isVisible = false;
    } State böyle de oluşturulabilir*/
    constructor(probs){
        super(probs);

        this.state = {
            isVisible : true
        }
    }

    onClickEvent = (e) => {
        console.log("Tıklandı:"+e.target);
        console.log(this);
        /*Burda this anahtar sözcüğünün, oluşturulan user nesnesini ifade etmesini ve konsola bu nesneyi
        yazmasını bekliyoruz fakat yazmaz. Çünkü neden anlamadım. 
        Override ettiğimiz metodlardan, kendi yazdığımız metodları çağırıken,
        bind etmeliyiz onClick={this.onClickEvent.bind(this)}. Parametreleri de bind ile gönderiyoruz.
        Arrow fonk. kullanırsak bind'a gerek kalmaz.*/

        this.setState({ //State Durumunu Değiştirmek için setState kullanırız.
            isVisible : !this.state.isVisible //isVisible state probunu, şuankinin tersi yap.
        })
    }

    render() {
        let {name,surname,aciklama} = this.props;
        let {isVisible:visibleState} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className = "card">
                    <div className="card-header d-flex justify-content-between"  onClick={this.onClickEvent}>
                        <h4 className = "d-inline">{name}</h4>
                        <h4 className = "d-inline">{surname}</h4>
                        {
                            name === "İsim Yok" || name === ""? 
                            <i className="fas fa-user-clock"></i>
                            :
                            <i className="fas fa-user-check"></i>  

                        }
                    </div>
                    {
                        //this.state.isVisible ?
                        visibleState ? 
                        <div className = "card-body">
                            <div className="card-text">Açıklama: {aciklama}</div>
                            <div className="card-text">{this.state.durum1}</div>
                        </div>   
                        :
                        null
                    }
                   
            </div>
        </div>
        )
    }
}

//Kisi icin static sınıflar. Bu sınıflar içeride de tanımlanabilir.
Kisi.propTypes = { //Özellikleri bu şekilde belirtebiliriz. Zorunlu mu? Length? Type? gibi özellikleri belirtmek için
    name : PropTypes.string.isRequired, //Zorunlu
    surname : PropTypes.string.isRequired,
}

Kisi.defaultProps = { //Yollanmazsa, def değerler
    name : "İsim Yok",
    surname : "Soyisim yok"
}
export default Kisi;
