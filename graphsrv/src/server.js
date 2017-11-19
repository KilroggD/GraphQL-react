import express from 'express';
import schema from './schema';
import graphqlHTTP from 'express-graphql';
const port = 3001;

const app = express();
const dev = process.env.NODE_ENV === 'development';

app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const server = app.listen(port, () => {
    console.log(`\n\nExpress listen at http://localhost:${port} \n`);
});
