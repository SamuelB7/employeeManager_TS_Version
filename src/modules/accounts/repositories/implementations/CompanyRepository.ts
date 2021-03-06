import { getRepository, Repository } from "typeorm";
import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { IUpdateCompanyDTO } from "../../dtos/IUpdateCompanyDTO";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../ICompanyRepository";



class CompanyRepository implements ICompanyRepository {
    private repository: Repository<Company>

    constructor() {
        this.repository = getRepository(Company)
    }

    async create ({name, cnpj, email, password}: ICreateCompanyDTO): Promise<void> {
        const user = await this.repository.create({
            name,
            cnpj,
            email,
            password
        })
        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<Company> {
        const company = await this.repository.findOne({email})
        return company
    }

    async findById(id: string): Promise<Company> {
        const company = await this.repository.findOne(id)
        return company
    }

    async list(): Promise<Company[]> {
        const companies = await this.repository.find()
        return companies
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    async update({id, name, cnpj, email, password}: IUpdateCompanyDTO): Promise<void> {
        await this.repository.update(id, {name, cnpj, email, password})
    }
}

export { CompanyRepository }
