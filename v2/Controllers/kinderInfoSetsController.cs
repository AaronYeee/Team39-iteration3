using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using v2.Models;

namespace v2.Controllers
{
    public class kinderInfoSetsController : Controller
    {
        private Model1 db = new Model1();

        // GET: kinderInfoSets

       
        
       
        
        
       
        public ActionResult Index(string[] listValues,string search)
        {

            if (listValues == null && search==null)
            {
                var a = "3000";
                var kindergartens = db.kinderInfoSets.Where(r => ((r.PostCode).Contains(a)) == true);
                return View(kindergartens.ToList());
            }
            
            else if(listValues != null&&( listValues[0] != "")&& search == null)
           {
                List<kinderInfoSet> kinderList = new List<kinderInfoSet>();

                string[] list_a = listValues[0].Split(',');
                   
                 for(int i=0; i<list_a.Length;i++) {
                    var b = list_a[i];
                    kinderList.AddRange(db.kinderInfoSets.Where(r => ((r.Name).Contains(b)) == true));

                }


                return View(kinderList.ToList());
            }

          


            else if (listValues == null && (search !="") && search != null)
            {
                var a = search;
                var kindergartens = db.kinderInfoSets.Where(r => ((r.PostCode.Replace(" ", "")).Contains(a)) == true || ((r.Suburb.Replace(" ", "")).Contains(a)) == true);
                return View(kindergartens.ToList());
            }
            else {
                var a = "3000";
                var kindergartens = db.kinderInfoSets.Where(r => ((r.PostCode).Contains(a)) == true);
                return View(kindergartens.ToList());

            }
            

        }





      
        public ActionResult kinder_table(string postcode)
        {
            var a = postcode;//postcode;
            var kindergartens = db.kinderInfoSets.Where(r => ((r.PostCode).Contains(a)) == true);
            return PartialView( kindergartens.ToList());

            
        }

        public ActionResult mapCH()
        {
            
            return PartialView();


        }
        

            public ActionResult mapAfrican()
        {

            return PartialView();


        }

        public ActionResult mapUS()
        {

            return PartialView();


        }
        public ActionResult mapBrit()
        {

            return PartialView();


        }

        public ActionResult mapGermany()
        {

            return PartialView();


        }
        public ActionResult mapIndia()
        {

            return PartialView();


        }
        public ActionResult mapIndonesia()
        {

            return PartialView();


        }
        public ActionResult mapMalyasia()
        {

            return PartialView();


        }

        public ActionResult mapOther()
        {

            return PartialView();


        }

        public ActionResult mapPhil()
        {

            return PartialView();


        }
        public ActionResult mapSingapore()
        {

            return PartialView();


        }

        public ActionResult mapVietnam()
        {

            return PartialView();


        }
        public ActionResult mapSri_Lankan()
        {

            return PartialView();


        }



        




        public ActionResult Update_table()
        {
            
            var a = "MELBOURNE";
            var kindergartens = db.kinderInfoSets.Where(r => ((r.Suburb).Contains(a)) == true);
            
            return View(kindergartens.ToList());
       

        }


        // GET: kinderInfoSets/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            kinderInfoSet kinderInfoSet = db.kinderInfoSets.Find(id);
            if (kinderInfoSet == null)
            {
                return HttpNotFound();
            }
            return View(kinderInfoSet);
        }

        // GET: kinderInfoSets/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: kinderInfoSets/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Type,PostCode,Suburb,Email,Rating,Address,Location")] kinderInfoSet kinderInfoSet)
        {
            if (ModelState.IsValid)
            {
                db.kinderInfoSets.Add(kinderInfoSet);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(kinderInfoSet);
        }

        // GET: kinderInfoSets/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            kinderInfoSet kinderInfoSet = db.kinderInfoSets.Find(id);
            if (kinderInfoSet == null)
            {
                return HttpNotFound();
            }
            return View(kinderInfoSet);
        }

        // POST: kinderInfoSets/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Type,PostCode,Suburb,Email,Rating,Address,Location")] kinderInfoSet kinderInfoSet)
        {
            if (ModelState.IsValid)
            {
                db.Entry(kinderInfoSet).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(kinderInfoSet);
        }

        // GET: kinderInfoSets/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            kinderInfoSet kinderInfoSet = db.kinderInfoSets.Find(id);
            if (kinderInfoSet == null)
            {
                return HttpNotFound();
            }
            return View(kinderInfoSet);
        }

        // POST: kinderInfoSets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            kinderInfoSet kinderInfoSet = db.kinderInfoSets.Find(id);
            db.kinderInfoSets.Remove(kinderInfoSet);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
