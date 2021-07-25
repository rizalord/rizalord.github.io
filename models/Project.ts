export interface Project {
  metadata: Metadata
  sys: ImageSys
  fields: ProjectFields
}

export interface ProjectFields {
  title: string
  image: FieldsImage
  description: string
  tags: string[]
}

export interface FieldsImage {
  metadata: Metadata
  sys: ImageSys
  fields: ImageFields
}

export interface ImageFields {
  title: string
  description: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: DetailsImage
}

export interface DetailsImage {
  width: number
  height: number
}

export interface Metadata {
  tags: any[]
}

export interface ImageSys {
  space: ContentType
  id: string
  type: string
  createdAt: Date
  updatedAt: Date
  environment: ContentType
  revision: number
  locale: string
  contentType?: ContentType
}

export interface ContentType {
  sys: ContentTypeSys
}

export interface ContentTypeSys {
  id: string
  type: string
  linkType: string
}
