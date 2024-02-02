import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({
  name: 'tb_customers'
})
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string
}
