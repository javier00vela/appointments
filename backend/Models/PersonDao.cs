using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace Models
{
    public class PersonDao
    {
         private string connectionString = "Server=127.0.0.1;Port=3306;Database=medical;Uid=root;password=;";


        public List<Office> GetAll(){
            try
            {
                using (MySqlConnection conexion = new MySqlConnection(connectionString))
                {
                    conexion.Open();
                    MySqlCommand cmd = new MySqlCommand();
                    cmd.Connection = conexion;
                    cmd.CommandText = $"select * from person";
                    List<Office> officeList = new List<Office>();
                    Office office = new Office();
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            office.id_officce = Convert.ToInt32(reader["id_office"]);
                            office.numberOffice = Convert.ToInt32(reader["number_office"]);
                            officeList.Add(office);
                        }
                    }
                    return officeList;

                }

            }
            catch (Exception e )
            {
                return new List<Office>();
            }
        } 

    }
}
