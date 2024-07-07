import { Entity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity()
export class User {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isAdm: boolean

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}