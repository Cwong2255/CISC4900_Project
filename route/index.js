const { resolveInclude } = require('ejs')
const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()

//indicate the home page
router.get('/',(req, res) => {
  res.render('home')
})

//direct to "registration.ejs"
router.get('/registration', (req, res) => {
  res.render('registration')
})

//direct to "login.ejs"
router.get('/login', (req, res) => {
    res.render('login')
})

//direct to "home_prof.ejs"
router.get('/home_prof', (req, res) => {
  res.render('home_prof')
})

//direct to "home.ejs"
router.get('/home', (req, res) => {
  res.render('home')
})

//send request form
const Request = require ('../model/Student_req')

router.post("/request", (req, res) => {

    let newReq = new Request ({
        lastName: req.body.student_lname,
        firstName: req.body.student_fname,
        ID: req.body.student_id,
        Level: req.body.student_level,
        Major: req.body.student_major,
        Email: req.body.student_email,
    });

    newReq.save();
    res.redirect('registration')
    
})

//Professor Login
router.post("/home_prof", (req, res) => {
    if ((req.body.profid == "cisc4900webdesign") && (req.body.profpass == "spring2022term")){
        res.render("home_prof");
    } else {
        res.redirect("login")
    }
})


//direct to "reg_prof.ejs"
/*const Request = require ('../model/Student_req')*/
router.get('/reg_prof', (req, res) => {
    //send the form "request" to "reg_prof.ejs"
    Request.find({}, function(err, requests) {
        res.render('reg_prof', {
         requestList: requests
        })
    })
})


// add a student
const Student = require ('../model/Student')


router.post("/reg_student", (req, res) => {

    let newStu = new Student ({
      lastName: req.body.student_lasname,
      firstName: req.body.student_firname,
      ID: req.body.student_eid,
      Orientation: "",
      Intake_Survey: "",
      Attestation: "",
      Form_1: "",
      Attestation: "",
      Waiver: "",
      Project_Proposal: "",
      Form_2: "",
      Interim_Report: "",
      Interim_Supervisor_Evaluation: "",
      Final_Report: "",
      Final_Presentation: ""
      
    });

    newStu.save();
    res.redirect('reg_prof')
    
})

//direct to "submission_check.ejs"
/*const Student = require ('../model/Student')*/
router.get('/submission_check', (req, res) => {
  //send the form "student" to "submission_check.ejs"
  Student.find({}, function(err, Student) {
      res.render('submission_check', {
        studentList: Student
      })
  })
})

//Student Login
router.post('/login', async (req, res) => {
    Student.findOne({ lastName: req.body.userLast, ID: req.body.userEid }, (err, user) => {
        if(err) {
          console.log(err);
        } else if(!user) {
          console.log("User doesn't exit!")
        } else {
          res.render('home_student', {
            lname: req.body.userLast,
            stuID: req.body.userEid
        })
        }
    })     
  });


//Update information from "Student"
router.post('/change', async (req, res) => {

   if (req.body.assign_name == 'orientation') {
      Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
            Orientation: req.body.date
      }}, { returnOriginal: false }).then((update) => {
        update.save();
      })
      res.redirect('submission_check')
  } else if (req.body.assign_name == 'intake_survey') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Intake_Survey: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'attestation') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Attestation: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'form_1') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Form_1: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'waiver') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Waiver: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'project_proposal') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Project_Proposal: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'form_2') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Form_2: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'interim_report') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Interim_Report: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'interim_supervisor_evaluation') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Interim_Supervisor_Evaluation: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'final_report') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Finla_Report: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  } else if (req.body.assign_name == 'final_presentation') {
    Student.findOneAndUpdate({ID: req.body.student_emid}, {$set: {
          Final_Presentation: req.body.date
    }}, { returnOriginal: false }).then((update) => {
      update.save();
    })
    res.redirect('submission_check')
  }

})

module.exports = router
