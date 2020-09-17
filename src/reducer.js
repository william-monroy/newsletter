function extraer_dominio(email) {
    var email = email;
    var email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(email);
    var [,nombre,servidor,dominio] = email_analizado;
    console.log('Nombre del usuario: ' + nombre);
    console.log('Servidor de Correo: ' + servidor);
    console.log('Dominio: ' + dominio);
    return servidor;
}

export const initialState = {
    user:null,
};

export const actionTypes = {
    SET_USER: "SET_USER",    
}

const reducer = (state,action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            if (extraer_dominio(action.user.email)=='itesm'){
                return {
                    ...state,
                    user: action.user,
                };
            }else{
                alert('Ingresa con tu correo Institucional');
                return state;
            }
        default:
            return state;
    }
};

export default reducer;