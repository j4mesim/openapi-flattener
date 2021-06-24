export interface OpenApi {
    openapi: string,
    info: Info
    externalDocs: ExternalDocs
    servers: ExternalDocs[]
    security: Security[]
    tags: Tag[]
    'x-tagGroups': any[]
    paths: { [id: string]: Path }
    components: any
}
interface Path{
 'get': Get
 'post': Post
 'patch': any
 'put': any
 'delete': any
}
interface Parameter {
    in: string
    name: string
    description: string
    required: boolean
    schema: Schema
}
interface Schema {
    type: string
    enum?: string[]
}

interface Tag {
    name: string
    description: string
}
interface Security {
    bearerAuth?: any[]
    apiKey?: any[]
}
interface ExternalDocs {
    description: string
    url: string
}
interface Info {
    title: string
    description: string
    version: string
    contact: Contact
    license: Contact
    'x-logo': any
}

export type Response = {
    content : {[k in ContentType] : Content}
}

export interface Content{
    schema: any
}

type ResponseCode = 200|201|204|301|400|401|403|404|409|500|501|502|503

type ContentType = 'application/json'|'application/octet'

interface Contact {
    name: string
    url: string
}
interface Get {
    tags: string[]
    summary: string
    description: string
    operationId: string
    parameters: Parameter[]
    responses: { [responses in ResponseCode]: Response }
}

interface Post {
    tags: string[]
    summary: string
    description: string
    operationId: string
    parameters: any[]
    requestBody: any
    responses: any
}
interface Patch {
    tags: string[]
    summary: string
    description: string
    operationId: string
    parameters: any[]
    requestBody: any
    responses: any
}
