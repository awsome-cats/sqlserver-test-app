

import sql from 'mssql'

const dbSetting = {
    user: 'sa',
    password: '8292kenn',
    server: 'LAPTOP-DOKJ7K85',//localhostでもよい
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}


    export async function getConnection(){
        try {
         const pool = await sql.connect(dbSetting)
         return pool

        }catch(error) {
            console.error(error)
        }
     }

    export { sql }

