import React from 'react';
import MainLayout from '../layouts/Main';
import Banner from '../components/Banner/Banner';

const VisaPage = () => (
  <MainLayout>
    <div className="container">
      <h1>Getting a Chinese Visa</h1>

      <p>The following notes are a general guide to getting a Chinese Visa. Please check latest requirements in case they have changed.</p>

      <p>First off all make sure your passport has at least 6 months before expiry and 2 facing blank pages.</p>

      <p>Go to website <a href="www.visaforchina.org">www.visaforchina.org</a>. This is the official UK Chinese visa agency, there are a number of other agencies you can go to but they will cost more and you go through exactly the same process. The exception is a group visa. According to some web sites this is a cheaper option for 2 travellers or more but I have not used it so can’t say anything about how you go about it. I did enquire a couple of years ago and they needed a lot more time to arrange it. Be careful as the visa rules have changed recently.</p>

      <p>For UK citizens the default Chinese tourist visa appears to be 2 year multi-trip and costs £151 per traveller. You can apply up to 3 months before the date of travel and it took less than 2 weeks to get the visa from the initial application. This was in December, it may be busier at other times.</p>

      <p>There is an express service at extra cost but it only saves 1 day between the interview and picking up or receiving your passport back with the visa. Note they take your passport and keep it at the interview so you won’t be able to go anywhere until you get it back.</p>

      <h2>Steps</h2>

      <p>First of all, go to the web site <a href="www.visaforchina.org">www.visaforchina.org</a> and click on Visa here:</p>

      <img src="/visa_01.png" alt="Screenshot showing where the visa button is" className="mb-4" />

      <p>Then at bottom right click on New Application Form:</p>

      <img src="/visa_02.png" alt="Screenshot showing where the New Application Form button is" className="mb-4" />

      <p>At various points you have to do this weird jigsaw security thing. You pick up the piece with the mouse and slide it to the right until it matches the hole. You may find that you can’t do that on a touch screen phone or tablet so will have to use a PC.</p>

      <p>Then fill out the application form. It will take some time and you will need:</p>

      <ul>
        <li>Passport details</li>
        <li>Your flight bookings for the initial visit. Must be a return trip.</li>
        <li>Hotel booking details for the initial visit. You MUST have a confirmed hotel reservation for each night in China between the inbound and outbound flight dates.</li>
        <li>Other information like Parents and children’s date of birth</li>
        <li>A digital picture of the applicant. You can take it with a phone and crop it to the right size in the form but it must be against a white background, in good light so no shadows on face and hair pulled back off the face. If it rejects the photo try taking it again.</li>
      </ul>

      <p>Make a note of the application number (copy/paste somewhere) as soon as you start the form, you will need it if you save and close the form and go back to finish it.</p>

      <p>Some hints for the form:</p>

      <ul>
        <li>You want a tourist (L) visa </li>
        <li>It will ask for how long you want the visa to last and single, two or multiple trips but there does not seem to be any choice other than a 2 year multiple trip for tourists.</li>
        <li>It will ask for every country you have visited in the last 5 years. I made sure that I listed every one for which I had a stamp in my passport and others I could remember but I don’t think they have a way of checking.</li>
        <li>If you have visited China previously it will want to know exactly what city and county you stayed in. I had to dig out old hotel bookings.</li>
        <li>It asked for Parents addresses so I clicked “not applicable” and put “Parent deceased” in the box.</li>
      </ul>

      <p>Once you have finished the form you can make a booking for the interview. You can do several forms and make one interview but EVERY applicant MUST go to the visa application centre and take with them:</p>

      <ul>
        <li>Their passport</li>
        <li>A print out of the application form</li>
        <li>A print of the flight booking and hotel reservations. You MUST have a print of each for EVERY applicant, even if you are travelling together.</li>
        <li>A DEBIT card to pay the visa fee</li>
      </ul>

      <p>When you get to the visa centre go to the reception just inside the door and they will do an initial check that you have all the documentation. You will then be given a ticket to wait for an interview. They will go through the form in detail and take your fingerprints during the interview.</p>
      <p>You will then be directed to another area to pay. They will give you a receipt if you are coming back to collect, or you can pay extra to have your passport with the visa posted to you recorded delivery.</p>
      <p>The whole process took less than an hour when we went but may be busier at other times of year.</p>
      <p>When returning to the visa centre to pick up the passport with visa go to reception again who will give you a queue ticket. I went in at lunchtime and was out within 15 minutes.</p>
    </div>
  </MainLayout>
);

export default VisaPage;
