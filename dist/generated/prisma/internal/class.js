import * as runtime from "@prisma/client/runtime/client";
const config = {
    "previewFeatures": [],
    "clientVersion": "7.4.1",
    "engineVersion": "55ae170b1ced7fc6ed07a15f110549408c501bb3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id             String   @id @default(uuid())\n  name           String\n  email          String   @unique\n  phoneNumber    String\n  franchiseeName String\n  gstin          String\n  password       String\n  createdAt      DateTime @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"franchiseeName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gstin\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"email\",\"phoneNumber\",\"franchiseeName\",\"gstin\",\"password\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\"]"),
    graph: "KQkQCxoAACIAMBsAAAQAEBwAACIAMB0BAAAAAR4BACMAIR8BAAAAASABACMAISEBACMAISIBACMAISMBACMAISRAACQAIQEAAAABACABAAAAAQAgCxoAACIAMBsAAAQAEBwAACIAMB0BACMAIR4BACMAIR8BACMAISABACMAISEBACMAISIBACMAISMBACMAISRAACQAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAIHQEAAAABHgEAAAABHwEAAAABIAEAAAABIQEAAAABIgEAAAABIwEAAAABJEAAAAABAQgAAAkAIAgdAQAAAAEeAQAAAAEfAQAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjAQAAAAEkQAAAAAEBCAAACwAwAQgAAAsAMAgdAQAoACEeAQAoACEfAQAoACEgAQAoACEhAQAoACEiAQAoACEjAQAoACEkQAApACECAAAAAQAgCAAADgAgCB0BACgAIR4BACgAIR8BACgAISABACgAISEBACgAISIBACgAISMBACgAISRAACkAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgAxUAACUAIBYAACcAIBcAACYAIAsaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAbACEhAQAbACEiAQAbACEjAQAbACEkQAAcACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAsaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAbACEhAQAbACEiAQAbACEjAQAbACEkQAAcACEOFQAAHgAgFgAAIQAgFwAAIQAgJQEAAAABJgEAAAAEJwEAAAAEKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAIAAhLQEAAAABLgEAAAABLwEAAAABCxUAAB4AIBYAAB8AIBcAAB8AICVAAAAAASZAAAAABCdAAAAABChAAAAAASlAAAAAASpAAAAAAStAAAAAASxAAB0AIQsVAAAeACAWAAAfACAXAAAfACAlQAAAAAEmQAAAAAQnQAAAAAQoQAAAAAEpQAAAAAEqQAAAAAErQAAAAAEsQAAdACEIJQIAAAABJgIAAAAEJwIAAAAEKAIAAAABKQIAAAABKgIAAAABKwIAAAABLAIAHgAhCCVAAAAAASZAAAAABCdAAAAABChAAAAAASlAAAAAASpAAAAAAStAAAAAASxAAB8AIQ4VAAAeACAWAAAhACAXAAAhACAlAQAAAAEmAQAAAAQnAQAAAAQoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAgACEtAQAAAAEuAQAAAAEvAQAAAAELJQEAAAABJgEAAAAEJwEAAAAEKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAIQAhLQEAAAABLgEAAAABLwEAAAABCxoAACIAMBsAAAQAEBwAACIAMB0BACMAIR4BACMAIR8BACMAISABACMAISEBACMAISIBACMAISMBACMAISRAACQAIQslAQAAAAEmAQAAAAQnAQAAAAQoAQAAAAEpAQAAAAEqAQAAAAErAQAAAAEsAQAhACEtAQAAAAEuAQAAAAEvAQAAAAEIJUAAAAABJkAAAAAEJ0AAAAAEKEAAAAABKUAAAAABKkAAAAABK0AAAAABLEAAHwAhAAAAATABAAAAAQEwQAAAAAEAAAAAAxUABhYABxcACAAAAAMVAAYWAAcXAAgBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIYGAUZGQk"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
export function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map