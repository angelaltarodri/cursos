export interface BaseModel {
  readonly id: string; //read only
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export type Id = BaseModel['id']
