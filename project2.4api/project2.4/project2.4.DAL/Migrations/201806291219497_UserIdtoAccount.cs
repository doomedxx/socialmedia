namespace project2._4.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserIdtoAccount : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "UserId", c => c.Guid(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "UserId");
        }
    }
}
