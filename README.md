# Sending-email-with-Firebase-Cloud-Function

The idea behind this sample is that whenever any victim traveling by train lodge a complaint(via mobile app) about any crime,   firebase database will get triggered and complete information about the crime+victim will be sent  to the authorities.  


# Sample Database Structure:    

### /firebase-project-123     
### .../reports        
### ....../userId        
### ........./reportId             
### ............/crimeInfo                
...............berthNumber               
...............coachNumber               
...............coachType               
...............crimeType                
...............lastStation               
...............nextStation               
...............trainNumber               
...............trainName            
### ............/userInfo               
...............message                
...............userContact               
...............userEmail              
...............userName
