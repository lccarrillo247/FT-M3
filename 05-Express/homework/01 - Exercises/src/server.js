const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

let id = 1;

// server.get("/", function(req, res) {
// res.send("Servidor escuchando...");
// });

server.post("/posts", (req, res) => {
    const {author, title, contents} = req.body;
    if (author && title && contents) {
        const Publicación = {
            author: author,
            title: title,
            contents: contents,
            id: id++
        }
        publications.push(Publicación);
        res.status(200).json(Publicación);
    } else {
    res.status(404).json({
        error: "No se recibieron los parámetros necesarios para crear la publicación"
    })
    }
})

server.get("/posts", (req, res) => {
    const {author, title} = req.query;    
    if (author && title) {
    const publicationsFiltered = publications.filter(
        (publication) => publication.author === author && publication.title === title
    );
    if(publicationsFiltered.length) {
        res.status(200).json(publicationsFiltered);
    } else {
        res.status(404).json({
            error: "No existe ninguna publicación con dicho título y autor indicado"
        })
    }
    }
})

server.get("/posts/:author", (req, res) => {
    const {author} = req.params;
    if (author) {
        const authorPublications = publications.filter(
            (pub) => pub.author === author
        );
        if (authorPublications.length) {
            res.status(200).json(authorPublications);
        } else {
            res.status(404).json({
                error: "No existe ninguna publicación del autor indicado"
            })
        }
    }
})

server.put("/posts/:id", (req, res) => {
    const {id} = req.params;
    const {title, contents} = req.body;
    if (id && title && contents) {
        const specificPublication = publications.filter( // También se puede con .find
            (pub) => pub.id === Number(id)
        );
        if (specificPublication.length) {
            specificPublication.title = title; // specificPublication = {...specificPublication, title, contents}
            specificPublication.contents = contents;
            res.status(200).json(specificPublication);
        } else {
            res.status(404).json({
                error: "No se recibió el id correcto necesario para modificar la publicación"
            })
        }
    } else {
        res.status(404).json({
            error: "No se recibieron los parámetros necesarios para modificar la publicación"
        })
    }
})

server.delete("/posts/:id", (req, res) => {
    const {id} = req.params
    if (id) {
        let deletePublication = publications.filter(
            (pub) => pub.id === Number(id)
        )
        if (deletePublication.length) {
            publications = publications.filter(
                (pub) => pub.id !== Number(id)
            )
            res.status(200).json({
                success: true
            })
        } else {
            res.status(404).json({
                error: "No se recibió el id correcto necesario para eliminar la publicación"
            })
        }
    } else {
        res.status(404).json({
            error: "No se recibió el id de la publicación a eliminar"
        })
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
