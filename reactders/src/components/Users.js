import React, { Component } from 'react'
import Kisi from './Kisi';
import UserConsumer from '../context.js'; //context api, state'e erişebilmek için consumerı


class Users extends Component {
        //render fonksiyonunda userconsumer return edecek. 
        //O userconsumer içinde istediğimiz şablonu return eden bir fonksiyon yaz.(Yani normal render'da returne deceklerimiziz artık iç fonksiyonda return edeceğiz.)
        // Fonksiyon parametersi olarak, UserProvider componentinin yolladığı value probsu olacak.
        // UserProvider bu probs içinde state'ini yollar. Biz de value parametresi ile state'e erişiriz.
    render(){
        console.log("USERS RENDER")
    return(  
            <UserConsumer>
                {
                    function(value){
                        const {users} = value;
                        return (
                            <div>  
                            {
                                users.map(user => {
                                    return(
                                        <Kisi key={user.id} id={user.id} name={user.name} surname={user.surname} aciklama={user.aciklama}/>
                                    )
                                })
                            }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}


export default Users;
