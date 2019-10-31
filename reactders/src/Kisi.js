import React, { Component } from 'react'
import './comp1c.css'
import PropTypes from 'prop-types'
import UserConsumer from './context.js'; //context api, state'e erişebilmek için consumerı



class Kisi extends Component {
    state = {
        isVisible : true
    } 

    onClickEvent = (e) => {
        console.log("Tıklandı:"+e.target);
        console.log(this);
        /*Burda this anahtar sözcüğünün, oluşturulan user nesnesini ifade etmesini ve konsola bu nesneyi
        yazmasını bekliyoruz fakat yazmaz. Çünkü onClick = this.onClickEvent dediğimizde, React sanki 
        sınıf dışından, onClick adlı bir değişkene metod atıyormuş gibi atama yapar ve this artık nesneyi göstermez.
        
        bind etmeliyiz onClick={this.onClickEvent.bind(this)}. Parametreleri de bind ile gönderiyoruz.
        Arrow fonk. kullanırsak bind'a gerek kalmaz.*/

        this.setState({ //State Durumunu Değiştirmek için setState kullanırız.
            isVisible : !this.state.isVisible, //isVisible state probunu, şuankinin tersi yap.
        })
    }

    onDeleteUser = (dispatch,e) =>{
        const id = this.props.id;
        dispatch({type:"KULLANİCİ_SİL", payload : id})
        //Dispatch'e action yolladık, eylem ve uygulanacak state
        //State değişeceği zaman consumer sadece bunu yapar, Provider'dan aldığı dispatch'e, parametre olarak acion vererek çalıştırır
    }

    render(){
        let {name,surname,aciklama} = this.props;
        let {isVisible:visibleState} = this.state;

        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        
                        return (
                            <div className="col-md-8 mb-4">
                                <div className = "card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 onClick={this.onClickEvent} className = "d-inline">{name}</h4>
                                        <h4 className = "d-inline">{surname}</h4>
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="fas fa-user-clock"></i>
                                        {//Burdaki bind'ın amacı this'i bağlamak değil, parametre göndermek.
                                        }
                                    </div>
                                    {
                                        //this.state.isVisible ?
                                        visibleState ? 
                                        <div className = "card-body">
                                            <div className="card-text">Açıklama: {aciklama}</div>
                                        </div>   
                                        :
                                        null
                                    }
                                   
                            </div>
                        </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

//Kisi icin static sınıflar. Bu sınıflar içeride de tanımlanabilir.
Kisi.propTypes = { //Özellikleri bu şekilde belirtebiliriz. Zorunlu mu? Length? Type? gibi özellikleri belirtmek için
    name : PropTypes.string.isRequired, //Zorunlu
    surname : PropTypes.string.isRequired,
    aciklama : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired
}

Kisi.defaultProps = { //Yollanmazsa, def değerler
    name : "İsim Yok",
    surname : "Soyisim yok",
    aciklama : "Aciklama Yok",
    id : 0
}
export default Kisi;
