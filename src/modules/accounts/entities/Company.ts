import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('company')
class Company {

    @PrimaryColumn()
    id: string
    
    @Column()
    name: string
    
    @Column()
    cnpj: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Company }