# Website:  Portfolio

## Functional Specification

Kao Thao
Last Updated: July 5, 2016

### Overview

Portfolio is a single page website sharing with people NOT who I am, but what I am.

**This website is not, by any stretch of the imagination, complete.**  However, the content in it should relay all that you need to know to determine the skills I have obtained in the last 5 months here at Geekwise Academy.  The actual look and feel will be developed over time and the input of graphic designs will change as the future get closer to the present.

### Scenarios

In designing this website, it helps to imagine a few real life stories of how actual or stereotypical characters would apply my website.  Let's look at two scenarios.

##### Scenario 1:  The Employer Donald.

Donald is a super busy executive.  He is the president of a small, but important company that custom designs websites for small businesses throughout California.  He will spend only about two minutes discovering who or what I am.  In the two minutes he is giving me, he should be able to discern how easy it is to follow the design of the website.  Scrolling down, he will see the projects animate in to display and as he hovers over it, the images will appear like it's popping out to be clickable and it is!  So he clicks on it and he is linked view that whole particular project.  Impressed, he view all three.  He soon realizes that 10 minutes have gone by.

##### Scenario 2:  The Employer's Tech Guy, Cisco.

Cisco is a young adult (aka: teenager) in high school.  He goes to a lousy high school, but he's pretty smart.  Why?  Because he codes after school while other kids his age are joining sport activities or just hanging out (aka: vandalizing).  He works for Donald (character from scenario 1).  He gets excited when his boss assigns him to review other web developers for recruitment.  When he looks at my website he will want to see code.  He will want to break my site, which he will because it's not 100% complete.  However, he will find my parallax effect intriguing and fun to observe, especially know it was done totally in vanilla Javascript.  Also, because the site was done in pure HTML and CSS, he will be impressed and will want to call me for an interview.  He'll be even more impressed when he finds out I am older than his father and had just learned how to code in 5 months.  

### Non Goals

This website will *not* include the following features:

- More than one page
- Passwords
- Sliders
- Videos

### Portfolio Website Flowchart

![](http://i.imgur.com/OjHBghJ.png)

## Screen by Screen Specification

The Portfolio website consists of a few different screens.  Each screen will look and feel like any modernized website designed by experienced developers.  Look and layout are important features of any website.  Here are the images of the screen size mock ups (desktop, tablet, & phone size):

### Desktop

![](http://i.imgur.com/pIDqmEk.png)

### Tablet

![](http://i.imgur.com/RTUf5RO.png)


### Phone

![](http://i.imgur.com/NBprAme.png)

![](http://i.imgur.com/GU4X7nP.png?2)

![](http://i.imgur.com/RTCIYqT.png?3)

![](http://i.imgur.com/XbTH0q1.png?2)

## Home Page

Displayed when the website is opened or refreshed, the **Home Page** serves three purposes:

1. Allow users to navigate to particular sections of the page
2. Allow users to experience the fixed navigation bar when scrolling to a specific point
3. Allow users to experience the parallax effect

The **Home Page** will look like this:

![](http://i.imgur.com/tBPHoQt.png)

The home page will display the hero image with the navigation bar, which includes items:  Home, About, Projects, and Contacts.  Each item, when clicked, will navigate the user to the section containing its contents.  The navigation bar will be fixed at the top when it touches the top of the window screen while scrolling (all done via Javascript).  

This page also features the parallax effect when scrolling.  Smaller dots will be sliding downwards while bigger blurry dots in the foreground will be sliding upwards.  My name will also be sliding upward but slower to give more animation.  The parallax effect works because the image background of this page is fixed to its container.

## About Page

The **About Page** contains three specific topics describing what I am:

1. Background
2. Education
3. Professional Goals

This section of the page describes what it took for me to become a web developer and what I can do for employers who hire me.

## Projects Page

The **Projects Page** is for the purpose of demonstrating my ability, skills and knowledge of web developing.  It will contain images and a short description of three projects completed throughout my education process at Geekwise Academy, Fresno CA.  They are:

1. Dustybuns
2. Geekwise
3. Addressbook

The image below shows the three images of these projects and what the section should look like when completed (noticed the fixed navigation bar).

![](http://i.imgur.com/ZGLS3Rt.png)

When scrolling to this section, the user will experience these images sliding in from the right appearing from opacity zero to opacity (.7) in CSS and a transition of one second.  Opacity is at (.7) because when the user hovers over each image, its opacity changes to (1), and a shadow gives the illusion of the image popping up, teaching the user that it is clickable.

## Contact Page

The **Contact Page** is purposed to invited viewers, particularly prospective employers, to contact me via 4 different sources of:

1. Phone
2. Email
3. Facebook
4. Twitter

This section of the page contains the footer.  Here is an image of what the **Contact Page** looks like.

![](http://i.imgur.com/Sdux9bb.png)

You will notice there is nothing else but the icons.  When hover over each icon, the color will change, indicating to the user it is clickable, linking them to contact me.  No other contents here to help viewers focus just on contacting me.

You will also see the footer section on this page.  Nothing special about the footer, except the fact that there is a bouncing white ball (static in the image), with a chevron symbol inside of it pointing upwards.  This will guide the user to click on it to move the screen upwards.  When clicked, it will take the user back to the **Home Page**.

# This is THE END of Documentation

