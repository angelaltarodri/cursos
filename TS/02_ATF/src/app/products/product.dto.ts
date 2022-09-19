import {Product} from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example = Pick <Product, 'color' | 'description'> // lo contrario del Omit

export interface UpdateProductDto extends Partial<CreateProductDto> { //ya no Partial del Product sino del CreateProductDto, para que id o createdAt, datos sensibles, no sean modificables
}

type example2 = Required<Product> //vuelve todo obligatorio, incluido size que estaba con '?'

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // readonly tags: ReadonlyArray<string>
}

type example3 = Readonly<Product> //todos los parametros se vuelven de solo lectura
