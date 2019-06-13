import axios from 'axios'
const http = axios.create({ baseURL: `http://localhost:4000/` });


export default class {

    catchError(error) {
        switch (error.response.status) {

            case 401:
                  new Error('Ocurrio un problema')
                break

            case 500:
                  new Error('Error iterno en el servidor.')
                break
            case 422:
                switch (error.response.data.code) {
                    case 123:
                          new Error('Credenciales incorrectas.')
                        break
                    default:
                          new Error('Codigo de error de datos no especificado.')
                        break
                }
                break
            default:
                  new Error('Codigo de error de servidor no especificado.')
                break
        }
    }

    getApertura() {
        return http.get("/abc")
            .then(response => response)
            .catch(this.catchError)
    }



}