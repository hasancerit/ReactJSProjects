import React, { Component } from 'react'
import './comp1c.css'
import PropTypes from 'prop-types'

class Kisi extends Component {
    render() {
        let {name,surname} = this.props;
        return (
            <div>
                <ul>
                    <li> Adı: {name} </li>
                    <li> Soyadı: {surname} </li>
                </ul>
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
