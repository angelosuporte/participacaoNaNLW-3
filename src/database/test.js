const Database = require('./db');

Database.then(async db =>{
    //inserir dados na tabela
    await db.run(`
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
            ""
        );

    
    `)

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})
