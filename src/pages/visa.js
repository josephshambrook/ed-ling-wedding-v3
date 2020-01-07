import React from 'react';
import MainLayout from '../layouts/Main';
import Banner from '../components/Banner/Banner';

const VisaPage = () => (
  <MainLayout>
    <div className="container">
      <h1>Chinese Visa Application Guidance</h1>

      <div className="alert alert-tiffany mt-4 mb-4" role="alert">Disclaimer: The following document is intended for general guidance only. It is the user's responsibility to remain up to date with any changes issued by the Peoples Republic of China and the authors cannot be held liable for any losses that may be incurred as a result of following this guide.</div>

      <h2>Preparing for Application</h2>

      <ul className="list-spacing">
        <li>Each applicant's passport must be valid for <strong>at least 6 months</strong> at the time of applying for the visa, as well as at least <strong>2 blank pages</strong>.</li>
        <li>Applications are processed individually through <a href="http://www.visaforchina.org">www.visaforchina.org</a>, the official Chinese UK visa agency</li>
        <li>The visa will be valid for 2 years, for multiple trips and will cost each applicant <strong>&pound;151</strong></li>
        <li>Applications can be submitted up to 3 months before the outbound travel date</li>
        <li>The application process, including receiving the visa, can take around 2 weeks, but this depends on the time of year</li>
        <li>A range of specific details are required to be submitted during the application process (see the guidance below). It is advised to read this guidance through before beginning the application, so an applicant can have the information to hand when completing an application. Please note that an application can be saved and re-opened at a later time.</li>
        <li>It is possible to request an express service, at an extra cost. This will eliminate 1 day between the interview and the return of the applicant's passport.</li>
      </ul>

      <p>It is possible to apply for a group visa. For further information, please see <a href="http://www.visaforchina.org">www.visaforchina.org</a>, or contact Edward Shambrook.</p>

      <hr className="mt-5 mb-5" />

      <h2>Application Process</h2>

      <div className="alert alert-tiffany mt-4 mb-4" role="alert">Please note: there are multiple captchas (security checks) throughout the application process. Due to the precision required to complete these, it is advised to complete the application on a computer, rather than tablet or phone.</div>

      <ol className="list-spacing">
        <li>On the initial website (<a href="http://www.visaforchina.org">www.visaforchina.org</a>), select the relevant country (e.g. UK), and to the immediate right, select the closest geographical location, as this will give you more relevant information to your application.</li>

        <li>On the landing page, under "Quick Access", click "Visa".</li>

        <li>On the bottom right of the next page, select "New Application Form".</li>

        <li>Upon beginning a new application, a unique application number will be allocated. It is advised to make a physical note of this, as this is used to save and re-open an application.</li>

        <li>Applicants must input the following information to complete the application:</li>

        <ul>
          <li>The visa type required is Tourist (L)</li>
          <li>The only options for length and number of trips for a Tourist Visa, is <strong>2 year multiple trip</strong></li>
          <li><strong>Unique information which applicants are required to have to hand:</strong></li>
          <ul>
            <li>The applicant's passport</li>
            <li>Information about previous travel, particularly specific details about travel to China, and travel for which there are passport stamps</li>
            <li>Inbound flight booking information (note: this must be a return trip)</li>
            <li>Hotel booking information in China (note: there must be a <strong>confirmed</strong> hotel reservation for all nights in China between the inbound and outbound flight dates)</li>
            <li>Parents addresses and date of birth (if applicable)</li>
            <li>Children's date of birth (if applicable)</li>
            <li>A digital picture of the applicant (The requirements match most UK passport requirements, but this can be taken on a phone and uploaded)</li>
          </ul>
        </ul>

        <li>Submit the application.</li>

        <li>Applicants <strong>must</strong> book an interview. Multiple applications can be submitted simultaneously for the same interview, but <strong>all</strong> applicants <strong>must</strong> attend the visa application centre.</li>

        <ul>
          <li>Note: an applicant's passport will be handed over to the Chinese authorities following a successful interview, to issue the visa. As this can take around 2 weeks, it is not advised schedule an interview for a period when an applicant's passport may be required.</li>
        </ul>
      </ol>

      <hr className="mt-5 mb-5" />

      <h2>Attending the interview</h2>

      <p>When attending the interview,<strong> all</strong> applicants <strong>must</strong> bring:</p>

      <ul>
        <li>Passport</li>
        <li>Printed application form</li>
        <li>Printed flight bookings</li>
        <li>Printed hotel reservation(s)</li>

        <ul>
          <li>Note: even when travelling together, each applicant must bring a <strong>unique</strong> copy of documents (b-d)</li>
        </ul>

        <li>Debit card to pay application fee (credit cards are not accepted)</li>
      </ul>

      <p>The interview can be expected to take 60 minutes, depending on the time of year.</p>

      <p>Upon arrival, an initial check of documents (a-d) will be completed. Following a successful check of documentation, applicants will be interviewed. During the interview, an employee will take each applicant's fingerprints, and go over the application form.</p>

      <p>Following a successful interview, applicants will be requested payment for the application and visa. Applicants who choose to return to collect their passport will receive a receipt. For an extra cost, applicants can request recorded delivery.</p>
    </div>
  </MainLayout>
);

export default VisaPage;
