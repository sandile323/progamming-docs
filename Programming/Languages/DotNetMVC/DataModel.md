Model is a collection of classes that define data and busniness logic. It can be used to communicate with the db and also can be used to manipulate data to implement business logic.

### Controller

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASPNETMVC_Data_Models.Models;
using Microsoft.AspNetCore.Http;

namespace ASPNETMVC_Data_Models.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            var employees = from e in GetEmployeeList()
                            orderby e.ID
                            select e;
            return View(employees);
        }

        //Get: Employee/Details/5
        public ActionResult Details(int id) 
        {
            return View();
        }
        //Get: Employee 
        public ActionResult Create()
        {
            return View(); 
        }


        //Post: Employee/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //Get: Employee/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        //Post: Employee/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }


        //Get: Employee/Delete/5
        public ActionResult Delete(int id)
        {
            return View();

        }

        //Post: Employee/De;ete 5
        [HttpPost]

        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        public List<Employee> GetEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    ID = 1,
                    Name = "Alan Hout",
                    JoiningDate = DateTime.Parse(DateTime.Today.ToString())

                },
                 new Employee
                {
                    ID = 2,
                    Name = "Alan Van Wyk",
                    JoiningDate = DateTime.Parse(DateTime.Today.ToString())

                },
                    new Employee
                {
                    ID = 3,
                    Name = "Alan Van Zyl",
                    JoiningDate = DateTime.Parse(DateTime.Today.ToString())

                },
                new Employee
                {
                    ID = 4,
                    Name = "Alan Niekerk",
                    JoiningDate = DateTime.Parse(DateTime.Today.ToString())

                },
            };
        }




    }
}

```

### Model

```c#

namespace MVCSimpleApp.Models {
   public class Employee{
      public int ID { get; set; }
      public string Name { get; set; }
      public DateTime JoiningDate { get; set; }
      public int Age { get; set; }
   }
}

```

### Default View Generated By Visual Studio

```c#
@model IEnumerable<MVCSimpleApp.Models.Employee>
@{
   Layout = null;
}

<!DOCTYPE html>
<html>
   <head>
      <meta name = "viewport" content = "width = device-width" />
      <title>Index</title>
   </head>
	
   <body>
      <p>@Html.ActionLink("Create New", "Create")</p>
         <table class = "table">
         <tr>
            <th>
               @Html.DisplayNameFor(model => model.Name)
            </th>
				
            <th>
               @Html.DisplayNameFor(model => model.JoiningDate)
            </th>
				
            <th>
               @Html.DisplayNameFor(model => model.Age)
            </th>
				
            <th></th>
         </tr>
			
         @foreach (var item in Model) {
            <tr>
               <td>
                  @Html.DisplayFor(modelItem => item.Name)
               </td>
					
               <td>
                  @Html.DisplayFor(modelItem => item.JoiningDate)
               </td>
					
               <td>
                  @Html.DisplayFor(modelItem => item.Age)
               </td>
					
               <td>
                  @Html.ActionLink("Edit", "Edit", new { id = item.ID }) |
                  @Html.ActionLink("Details", "Details", new { id = item.ID }) |
                  @Html.ActionLink("Delete", "Delete", new { id = item.ID })
               </td>
					
            </tr>
         }
			
      </table>
   </body>
</html>

```
