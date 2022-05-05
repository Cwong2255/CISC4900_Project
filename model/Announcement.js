const mongoose = require('mongoose')

const AnnouncementSchema = {  
    Announcement: String,
    PostDate: Date
}

module.exports = mongoose.model('Announce', AnnouncementSchema)