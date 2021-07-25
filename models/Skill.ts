export interface Skill {
  metadata: Metadata
  sys: LogoSys
  fields: SkillFields
}

export interface SkillFields {
  name: string
  logo: Logo
  countExperience: number
  skillType: SkillType
}

export interface Logo {
  metadata: Metadata
  sys: LogoSys
  fields: LogoFields
}

export interface LogoFields {
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
  image: Image
}

export interface Image {
  width: number
  height: number
}

export interface Metadata {
  tags: any[]
}

export interface LogoSys {
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

export interface SkillType {
  metadata: Metadata
  sys: LogoSys
  fields: SkillTypeFields
}

export interface SkillTypeFields {
  name: string
}
