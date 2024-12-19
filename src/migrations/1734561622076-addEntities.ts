import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEntities1734561622076 implements MigrationInterface {
    name = 'AddEntities1734561622076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "full_name" character varying NOT NULL, "bio" character varying, "profile_image" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
