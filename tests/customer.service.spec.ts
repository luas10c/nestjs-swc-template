import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Customer } from '#/customer/customer.entity'

import { CustomerService } from '#/customer/customer.service'

async function sut() {
  const moduleRef = await Test.createTestingModule({
    providers: [
      CustomerService,
      {
        provide: getRepositoryToken(Customer),
        useClass: Repository
      }
    ]
  }).compile()

  const customerService = moduleRef.get<CustomerService>(CustomerService)
  const customerRepository = moduleRef.get<Repository<Customer>>(
    getRepositoryToken(Customer)
  )

  return {
    customerRepository,
    customerService
  }
}

it('should return an customers list', async function () {
  const { customerRepository, customerService } = await sut()

  jest
    .spyOn(customerRepository, 'find')
    .mockResolvedValue([{ id: '1', name: 'John' }])

  await expect(customerService.execute()).resolves.toEqual(
    expect.arrayContaining([{ id: '1', name: 'John' }])
  )
})
