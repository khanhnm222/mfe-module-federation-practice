# mfe-module-federation-practice
Below is a summary of the practices in the MFE. Because of BE code cannot run on my laptop, I will have a practice session focusing on client-side data simulation.

# Behaviours
* When the notification fragment is added to the header of Shell app
The bell icon is a fragment from Notification app

![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/20b78401-369d-49bc-a62d-834cca26618b)



* When the notification application's server is down
The Notifications app's server has stopped or crashed, the main app is still active and the Notification bell display will be framed blank 

![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/17a22803-c6df-48b9-91a9-45ad059686f2)


# Final result when clicking on the bell icon
The message "No notification for a new fragment!" sent from Notification app to Shell app using Custom Post Message method. It will then show the Fragment exposed from the Notification app by passing the attribute

![screen-capture](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/629a0eb8-6c4a-4c92-9d7e-6fbae7a008b6)



# The structure of Notification micro app

![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/46d18203-5e74-4a03-9bc1-07e739f0f449)



# NotificationButton
This is the NotificationButton component of the Notification app used to trigger get notification messages from server, and is also exposed to the outside for use by the Shell app

![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/1dbe329e-fc1f-4c7a-b51b-befd879b2f1c)



# NotificationBanner
This is the NotificationBanner component of the Notification app used to display messages, and is also exposed to the outside for use by the Shell app

![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/e7a0fc3b-61ee-447c-b8b7-5344dedac948)



# Configurations
This is a configuration of exposing fragments to other apps can use

* Remote app config of Module Federation:
![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/70c5ad3c-5a88-49e4-ae15-cdf3872993b2)
* Shell app config of Module Federation:
![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/27a5118c-ee1e-4545-a038-dd14834eb87e)
* Shell app config of remoteConfig.js module:
![image](https://github.com/khanhnm222/mfe-module-federation-practice/assets/87562013/196af7ab-3955-4dbf-b4d8-87f0b454385d)


