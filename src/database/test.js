const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{
    //inserir dados na tabela
    await saveOrphanage.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends

        )VALUES (
            "aqui não foi definido"
        );

    
    `)

    //consultar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)


    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
})
