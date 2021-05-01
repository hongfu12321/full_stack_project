import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import path from "path";
import { MikroORM } from "@mikro-orm/core"


export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'postgres',
    debug: !__prod__,
// } as const;
// Funny thing about Typescript, if you don't cast it to const, every element in class would show as string.
} as Parameters<typeof MikroORM.init>[0];
// Tell typescript more specific type of object
