import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO'
import { IUpdateCompanyDTO } from '../dtos/IUpdateCompanyDTO'
import { Company } from '../entities/Company'

interface ICompanyRepository {
    create(data: ICreateCompanyDTO): Promise<void>
    findByEmail(email: string): Promise<Company>
    findById(id: string): Promise<Company>
    list(): Promise<Company[]>
    delete(id: string): Promise<void>
    update(data: IUpdateCompanyDTO): Promise<void>
}

export { ICompanyRepository }