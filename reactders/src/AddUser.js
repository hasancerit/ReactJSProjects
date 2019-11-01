import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from './context';
var uniqid = require('uniqid');

const AnimationBox = posed.div({//Animasyoun div'imizi oluşturduk
    durum1 : {                  //1. Durum(Visible) için cssler
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    durum2 : {                  //2.Durum(Hidden) için cssler
        opacity : 0,
        applyAtEnd : {
            display : "none"
        } 
    }
});

class AddUser extends Component {
    state = {
        visible : true,
        isim : "",
        soyisim : "",
        aciklama : ""
    }

    changeVisibility = (e) => { //Formu gizleyecek veya açacak butonun onClick'i
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput  = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    userEkle = (dispatch,e) => {
            e.preventDefault(); //Form Çalıştığında sayfa yenilenmesin
            const{isim,soyisim,aciklama} = this.state;

            const newUser = {
                name : isim,
                surname : soyisim,
                aciklama : aciklama,
                id : uniqid()
            }

            dispatch({type : "KULLANICI_EKLE", payload : newUser});
            this.setState({
                isim : "",
                soyisim : "",
                aciklama : "",
                id : "" 
            })
    }

    render() {
        const isVisible = this.state.visible;
        const {isim,soyisim,aciklama} = this.state;
        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                {console.log("RENDER ÇALİSTİ")}
                                <button  onClick={this.changeVisibility} className = "btn btn-dark btn-block mb-2">{isVisible ? "Formu Gizle" : "Formu Aç"}</button>
                                <AnimationBox pose = {isVisible ? "durum1" : "durum2"}>
                                {//True ise durum1'deki css'leri çalıştır, false ise durum2'deki cssleri. (durum1 ve durum2 cssleri AnimationBox nesnesi oluşturulurken atandı)
                                }
                                <div className = "card">
                                    <div className = "card-header">
                                        <h4>Kullanıcı Ekleme</h4>
                                    </div>
                                    <div className = "card-body">
                                        <form onSubmit = {this.userEkle.bind(this,dispatch)}>
                                            <div className = "form-group">
                                                <label htmlFor = "name"> Name: </label>
                                                <input value = {isim} type="text" name="isim" id="name" onChange={this.changeInput}
                                                        placeholder = "İsmi Girin" className="form-control" />
                                            </div>
                
                                            <div className = "form-group">
                                                <label htmlFor = "soyisim"> Soyisim: </label>
                                                <input value = {soyisim} type="text" name="soyisim" id="soyisim" onChange={this.changeInput}
                                                        placeholder = "Soyisim  Girin" className="form-control" />
                                            </div>
                
                                            <div className = "form-group">
                                                <label htmlFor = "aciklama"> Açıklama: </label>
                                                <input value = {aciklama} type="text" name="aciklama" id="aciklama" onChange={this.changeInput}
                                                        placeholder = "Açıklama  Girin" className="form-control" />
                                            </div>
                
                                            <button className="btn btn-danger btn-block" type="submit"> Ekle </button>
                                        </form>
                                    </div>
                                </div>
                                </AnimationBox>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )


        
        
       
    }
}

export default AddUser;