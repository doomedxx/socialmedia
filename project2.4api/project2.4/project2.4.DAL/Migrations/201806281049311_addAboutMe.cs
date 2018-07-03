namespace project2._4.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addAboutMe : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProfileInfoes", "AboutMe", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProfileInfoes", "AboutMe");
        }
    }
}
