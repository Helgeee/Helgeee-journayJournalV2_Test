import { Note } from "src/notes/entities/note.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Collection {
    @PrimaryGeneratedColumn( { name: 'collection_id'})
    id: number

    @Column()
    imgCollection: string

    @Column()
    title: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    //Связи к пользователю 

    @ManyToOne( () => User, (user) => user.collections)
    @JoinColumn({ name: 'user_id'})
    user: User

    //Связи к заметкам    

    @OneToMany(()=> Note,(note) => note.collection )
    notes: Note[]
}
