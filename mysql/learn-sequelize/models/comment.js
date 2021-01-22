const Sequelize = require("sequelize")

class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            comment:{
                type:Sequelize.STRING(100),
                allowNull : false
            },
            create_at : {
                type:Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
            }
        
        },{
            sequelize,
            timestamps:false,
            modelName:"Comment",
            tableName: "comments",
            paranoid: false,
            charset: "utf8mb4",
            collate:"utf8mb4_general_ci"
        })
    }
    static associate(db){
        db.Comment.belongsTo(db.User, {foreignKey:"commenter", targetKey:"id"}) // User.id를 target으로 하는 외래키 commenter 받아오기
    }
}

module.exports = Comment