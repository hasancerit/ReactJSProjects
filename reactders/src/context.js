import React, { Component } from 'react'  
import axios from 'axios';

const UserContext = React.createContext();
//mContext bana Provider ve Consumer oluşturmamı sağlayacak.

//Consumer dispatch'i çalıştırır. dispatch de reducer'a state ve action yollayarak çalıştır. reducer yeni state'i gönderir
const reducer = (state,action) => {
  console.log(state);
  console.log(action);
  switch(action.type){
    case "KULLANİCİ_SİL":
      return {
        ...state, //state'in içindekileri aldık.
        users : state.users.filter(user => action.payload !== user.id)
      }
    case "KULLANICI_EKLE":
      return{
        ...state,
        users : [...state.users,action.payload]
      }
    default:
      return state
  }
}

export class UserProvider extends Component { //PROVİDER
    state = { //Normalde app.js içinde olan state
       users : [],

        //Dispatch, consumer tarafından actionların gönderileceği bir fonksiyon. Disptach de reducerı çalıştırarak, state'i değiştiir
        //Consumer, action paramı ile dispatch'i çalıştırır. dispacth de reducer'ı, state ve action parametreleri ile çağırı
        dispatch : action => {
          this.setState(reducer(this.state,action))
        }

        /*
        function disptach(action){
            this.setState(reducer(this.state,action))
        }
        */
    };

    componentDidMount = async () => {
      console.log("MOUNT EDİLDİ context")
        const response = await axios.get("http://localhost:8080/getusers");
      this.setState({
        users:response.data
      })
      console.log(response);
    }
    
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


const UserConsumer = UserContext.Consumer; //CONSUMER
export default UserConsumer;
