const mongoose = require('mongoose')

const AnnouncementSchema = {  
    Announcement: String,
    PostDate: {
        type: Date,
        default: Date.now
    }
}

module.exports = mongoose.model('Announce', AnnouncementSchema)