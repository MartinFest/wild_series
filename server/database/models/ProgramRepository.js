const AbstractRepository = require("./AbstractRepository");


class ProgramRepository extends AbstractRepository {
    constructor() {
        super({ table: "program" });
    }

    async readAll() {
        // Execute the SQL SELECT query to retrieve all programs from the "category" table
        const [rows] = await this.database.query(`select * from ${this.table}`);
    
        // Return the array of categories
        return rows;
      }
    }
    module.exports = ProgramRepository;