const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

    lastName: String,
    firstName: String,
    ID: String,
    Orientation: String,
    Intake_Survey: String,
    Attestation: String,
    Form_1: String,
    Attestation: String,
    Waiver: String,
    Project_Proposal: String,
    Form_2: String,
    Interim_Report: String,
    Interim_Supervisor_Evaluation: String,
    Final_Report: String,
    Final_Presentation: String

})

module.exports = mongoose.model('Students', StudentSchema)