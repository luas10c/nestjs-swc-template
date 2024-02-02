import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Customer } from './customer.entity.js'

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  async execute(): Promise<Customer[]> {
    const customers = await this.customerRepository.find()
    return customers
  }
}
