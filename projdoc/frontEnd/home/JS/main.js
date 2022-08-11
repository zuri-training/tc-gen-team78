
    /* Preview t_c policy logic */

    let industryName = document.querySelector('#industry_name');
    let url = document.querySelector('#url');
    let urlName = document.querySelector('#url_name');
    let appName = document.querySelector('#app_name');
    let state = document.querySelector('#state');
    let email = document.querySelector('#email');
    let countryName = document.querySelector('#country_name');
    let bizType = document.querySelector('#biz_type');
    let t_c_date = document.querySelector('#t_c_date');
    let usrAccount = document.querySelector('#usr_acct');
    let usrUploads = document.querySelector('#usr_uploads');
    let usrBuy = document.querySelector('#usr_buy');
    let userSubPlan = document.querySelector('#user_sub_plan');
    let trademarks = document.querySelector('#trademarks');
    let userFeedback = document.querySelector('#feedback');
    let userPromotion = document.querySelector('#promo');
    let website = document.querySelector('#website');
    let preview = document.querySelector('.preview');
    let pPreview = document.querySelector('.p_preview');
    
 
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
            } else {
            document.getElementById("prevBtn").style.display = "inline";
        }

    /*if (n == (x.length - 1)) { */
        if (n == (x.length - 2)) {
            document.getElementById("nextBtn").innerHTML = "Preview";    
        }else if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
            } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }

    //... and run a function that will display the correct step indicator:
  
        fixStepIndicator(n)
    }

function nextPrev(n) {
  // This function will figure out which tab to display
  
  var x = document.getElementsByClassName("tab");
  
    // Exit the function if any field in the current tab is invalid:
  
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    
    x[currentTab].style.display = "none";
    
    // Increase or decrease the current tab by 1:
  
    currentTab = currentTab + n;
  
    // if you have reached the end of the form...
    if (currentTab == x.length -1) {
        if (document.forms[0].name == 'PGENFORM') {
            pPreview.innerHTML = '';
            showPolicyPreview();
        } 

    if (document.forms[0].name == 'TCGENFORM') {
            preview.innerHTML = '';
            showPreview();
        } 
       
        
    }
      
    if (currentTab >= x.length) {
    // ... the form gets submitted:
        document.getElementById("tcgenForm").submit();
        return false;
        }
  
        // Otherwise, display the correct tab:
  
        showTab(currentTab);
    }

function validateForm() {
    // This function deals with validation of the form fields
    
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
  
      // A loop that checks every input field in the current tab:
    
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        
        if (y[i].value == "") {
        // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
            }
        }
  
        // If the valid status is true, mark the step as finished and valid:
  
        if (valid) {
          document.getElementsByClassName("step")[currentTab].className += " finish";
        }
    return valid; // return the valid status
    }

    function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        
        x[n].className += " active";
    }
    

/* Previewing  logic  Begins here */


function showPreview() {
          let aside = document.createElement('aside');
          aside.innerHTML = '';
          aside.innerHTML =`
                 <p>
                    <strong>TERMS  AND CONDITIONS</strong></p>
    
                   <p>  Last updated: <span class = span_emp>${t_c_date.value} </span></p>
     
                    <p>
                        1.<strong>Introduction</strong></p>
                    <p>
                        Welcome to <strong><span class = span_emp>${urlName.value} </span></strong> (“Company”, “we”, “our”, “us”)!</p>
                    <p>
                        These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at <b><span class = span_emp>${url.value}</span></b>
                        (together or individually “Service”) operated by <strong><span class = span_emp>${urlName.value}</span></strong>.</p>
         
                    <p>
                        Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your
                        use of our web pages.</p>
     
                   <p>
                        Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood
                        Agreements, and agree to be bound of them.</p>

                    <p>
                        If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at
                        <strong><span class = span_emp>${email.value}</span></strong> so we can try to find a solution. These Terms apply to all visitors,
                        users and others who wish to access or use Service.</p>
         
                    <p>
                        2.<strong>Communications</strong></p>
         
                    <p>
                        By  using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However,
                        you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at
                        <strong><span class = span_emp>${email.value}</span>.</strong></p>
         
         <p>
             3. <strong>Contests, Sweepstakes and Promotions</strong></p>
         
         <p>
             Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed by
             rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as
             well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.</p>
         
         <p>
             4. <strong>Content</strong></p>
         
         <p>
             Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other
             material (“Content”). You are responsible for Content that you post on or through Service, including its legality, reliability, and
             appropriateness.</p>
         
         <p>
             By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to
             use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or
             through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person
             or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
     
         <p>
             You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting
             those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However,
             by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and
             distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to
             other users of Service, who may also use your Content subject to these Terms.</p>
         
         <p>
         <span class = span_emp>${urlName.value} </span> has the right but not the obligation to monitor and edit all Content provided by users.</p>
     
         <p>
             In addition, Content found on or through this Service are the property of Rapido Companies or used with permission. You may not distribute,
             modify, transmit, reuse, download, repost, copy, or use said Content,whether in whole or in part, for commercial purposes or for personal
             gain, without express advance written permission from us.</p>
         
         <p>
             5.<strong>Prohibited Uses</strong></p>
     
         <p>
             You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
     
         <p>
            <ul> 
                <li>
                    In any way that violates any applicable national or international law or regulation.
                </li>
                <li>
                    For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or
                     otherwise.
                </li>
                <li>
                    To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain
                     letter,” “spam,” or any other similar solicitation.
                </li>
                <li>
                    To impersonate or attempt to impersonate Company, a Company employee,another user, or any other person or entity.
                </li>
                <li>
                    In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with
                     any unlawful, illegal, fraudulent, or harmful purpose or activity.</p>
                </li>
                <li>
                    To engage in any other conduct that restricts or inhibits anyones use or enjoyment of Service, or which, as determined by us, may harm
                     or offend Company or users of Service or expose them to liability.
                </li>
            </ul>
        </p>
        <p>
          Additionally, you agree not to:</p>
         <ul>
             <li>
                 Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other partys use of Service,
                     including their ability to engage in real time activities through Service.
             </li>   
             <li>
                Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying
             any of the material on Service.
             </li> 
             <li>
                Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior
                  written consent.
             </li>
             <li>
                Use any device, software, or routine that interferes with the proper working of Service.
             </li>
             <li>
                Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.
             </li>
             <li>
                 Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored,
             or any server, computer, or database connected to Service.
             </li>
             <li>
                 Attack Service via a denial-of-service attack or a distributed denial-of-service attack.
             </li>
             <li>
                Take any action that may damage or falsify Company rating.
             </li>
             <li>
                 Otherwise attempt to interfere with the proper working of Service.
             </li>
         </ul>
        </p>      
         <p>
         6. <strong>Analytics</strong></p>
         <p>
             We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
     
         <p>
             7. <strong>No Use By Minors</strong></p>
     
         <p> 
             Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and
             represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement
             and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the
             access and usage of Service.</p>
         
         <p>
             8. <strong>Accounts</strong></p>
         
         <p>
             When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate,
             complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your
             account on Service.</p>
     
         <p>
             You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access
             to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account
             and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming
             aware of any breach of security or unauthorized use of your account.</p>
         
         <p>
             You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is
             subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any
             name that is offensive, vulgar or obscene.</p>
         
         <p>
             We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</p>
         
         <p>
             9. <strong>Intellectual Property</strong></p>
     
         <p>
             Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property
             of <span class = span_emp>${urlName.value} </span> and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our
             trademarks may not be used in connection with any product or service without the prior written consent of <span class = span_emp>${urlName.value} </span> Companies.</p>
         
         
        <secton class = "cRights">
         <p>
             10. <strong>Copyright Policy</strong></p>
         
         <p>
             We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on
             the copyright or other intellectual property rights (“Infringement”) of any person or entity.</p>
         
         <p>
             If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that
             constitutes copyright infringement, please submit your claim via email to <span class = span_emp>${email.value} </span>, with the subject line: “Copyright
             Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and
             Procedure for Copyright Infringement Claims”</p>
         
         <p>
             You may be held accountable for damages (including costs and attorneys fees) for misrepresentation or bad-faith claims on the infringement
             of any Content found on and/or through Service on your copyright.</p>
         </section>
         <p>
             11. <strong>DMCA Notice and Procedure for Copyright Infringement Claims</strong></p>
     
         <p>
             You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the
             following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
         
         <p>
            <ul class = 'preview-list'>
               <li>
                an electronic or physical signature of the person authorized to act on behalf of the owner of the copyrights interest;
               </li>
               <li>
                a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location
               where the copyrighted work exists or a copy of the copyrighted work;
               </li>
               <li>
                identification of the URL or other specific location on Service where the material that you claim is infringing is located;
               </li>
               <li>
                 your address, telephone number, and email address;
               </li>
               <li>
                a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or
               the law;
               </li>
               <li>
                 a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright
               owner or authorized to act on the copyright owners behalf.
               </li>
            </ul>
            </p>
         <p>
             You can contact our Copyright Agent via email at <span class = span_emp>${email.value}</span>.</p>
     
         <p>
             12. <strong>Error Reporting and Feedback</strong></p>
         
         <p>
             You may provide us either directly at <span class = span_emp>${email.value}</span> or via third party sites and tools with information and feedback concerning
             errors, suggestions for improvements, ideas, problems, complaints,and other matters related to our Service (“Feedback”). You
             acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or
             interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain
             confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of
             confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to
             applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable,
             unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in
             any manner and for any purpose.</p>
     
         <p>
             13. <strong>Links To Other Web Sites</strong></p>
         
         <p>
             Our Service may contain links to third party web sites or services that are not owned or controlled by Rapido Companies.</p>
         
         <p>
         <span class = span_emp>${urlName.value} </span> has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites
             or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
         
         <p>
             For example, the outlined <a href="https://zuriteam.com/terms-and-conditions/"><u>Terms
             of Use</u></a> have been created using <a href="https://zuriteam.com/"><u>Zuriteam</u></a>,
             a free web application for generating high-quality legal documents. Zuriteam <a href="https://zuriteam.com/terms-and-conditions/"><u>Terms
             and Conditions generator</u></a>is an easy-to-use free tool for creating an excellent standard Terms
             of Service template for a website, blog, e-commerce store or app.</p>
     
         <p>
             YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
             ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH
             THIRD PARTY WEB SITES OR SERVICES.</p>
     
         <p>
             WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.</p>
         
         <p>
             14. <strong>Disclaimer Of Warranty</strong></p>
         
         <p>
             THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF
             ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU
             EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.</p>
         
         <p>
             NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
             RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED
             WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE
             ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE
             ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE
             MEET YOUR NEEDS OR EXPECTATIONS.</p>
     
         <p>
             COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY
             WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</p>
         
         <p>
             THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
     
         <p>
             15. <strong>Limitation Of Liability</strong></p>
     
         <p>
             EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL,
             INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION
             AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF
             CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY
             CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL
             LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS
             PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS
             AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE
             EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>
     
         <p>
             16. <strong>Termination</strong></p>
     
         <p>
             We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole
             discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.</p>
     
         <p>
             If you wish to terminate your account, you may simply discontinue using Service.</p>
         
         <p>
             All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership
             provisions, warranty disclaimers, indemnity and limitations of liability.</p>
         
         <p>
             17. <strong>Governing Law</strong></p>
     
         <p>
             These Terms shall be governed and construed in accordance with the laws of <b><span class = span_emp>${countryName.value}</span>,</b>
             which governing law applies to agreement without regard to its conflict of law provisions.</p>
     
         <p>
             Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms
             is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms
             constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between
             us regarding Service.</p>
     
         <p>
             18. <strong>Changes To Service</strong></p>
     
         <p>
             We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without
             notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to
             time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.</p>
         
         <p>
             19. <strong>Amendments To Terms</strong></p>
         
         <p>
             We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.</p>
         
         <p>
             Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to
             check this page frequently so you are aware of any changes, as they are binding on you.</p>
     
         <p>
             By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not
             agree to the new terms, you are no longer authorized to use Service.</p>
     
         <p>
             20. <strong>Waiver And Severability</strong></p>
     
         <p>
             No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or
             a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a
             waiver of such right or provision.</p>
     
         <p>
             If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for
             any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will
             continue in full force and effect.</p>
         
         <p>
             21.<strong>Acknowledgement</strong></p>
     
         <p>
             BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.</p>
     
         <p>
             22. <strong>Contact Us</strong></p>
     
         <p>
             Please send your feedback, comments, requests for technical support by email: <b><span class = span_emp>${email.value}</span></b>.</p>
     
         <p>
             These <a href="https://zuriteam.com/terms-and-conditions/"><u>Terms of Service</u></a> were created for <b><span class = span_emp>${url.value}</span></b>
             by <a href="https://zuriream.com/"><u>Team 78TC Gen</u></a> on :<span class = span_emp>${t_c_date.value}</span>.</p>
     `;
        preview.appendChild(aside); 
      };


     /* Preview of privacy policy */  
    
     let url_name =document.querySelector('#url_name');
    
     function showPolicyPreview() {
        let aside = document.createElement('aside');
            aside.innerHTML = '';
            aside.innerHTML =`
        <p><strong>PRIVACY POLICY</strong></p>
        <p>Effective date:<span class = span_emp> ${t_c_date.value} </span></p>
     
        <p>1. <strong>Introduction</strong></p>
     
        <p>Welcome to <strong><span class = span_emp>${url_name.value}</span></strong>.</p>
     
        <p>
            <strong><span class = span_emp>${url_name.value}</span></strong> (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates <strong><span class = span_emp>${url.value}</span></strong> (hereinafter referred to as <strong>&ldquo;Service&rdquo;</strong>).
        </p>
        <p>
            Our Privacy Policy governs your visit to <strong><span class = span_emp>${url.value}</span></strong>, and explains how we collect, safeguard and disclose information that results from your use of our Service.</p>
        <p>
            We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
        <p>
            Our Terms and Conditions (<strong>&ldquo;Terms&rdquo;</strong>) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (<strong>&ldquo;agreement&rdquo;</strong>).</p>
     
        <p>
            2. <strong>Definitions</strong>
        </p>

        <p>
            <strong>SERVICE</strong> means the $url} website operated by <span class = span_emp>${url_name.value}</span>.
        </p>
        
        <p>
            <strong>PERSONAL DATA</strong> means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).
        </p>
        <p>
            <strong>USAGE DATA</strong> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).</p>
        <p>
            <strong>COOKIES</strong> are small files stored on your device (computer or mobile device).</p>
        <p>
            <strong>DATA CONTROLLER</strong> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
        <p>
            <strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
        <p>
            <strong>DATA SUBJECT</strong> is any living individual who is the subject of Personal Data.</p>
        <p>
            <strong>THE USER</strong> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>
        <p>
            3. <strong>Information Collection and Use</strong></p>
        <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.</p>
        <p>
            4. <strong>Types of Data Collected</strong></p>
        <p>
            <strong>Personal Data</strong></p>
        <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (<strong>&ldquo;Personal Data&rdquo;</strong>). Personally identifiable information may include, but is not limited to:</p>
        <p>
           <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, Country, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
           </ul> 
        </p>
        <p>
            We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</p>
        <p>
            <strong>Usage Data</strong></p>
        <p>
            We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (<strong>&ldquo;Usage Data&rdquo;</strong>).</p>
        <p>
            This Usage Data may include information such as your computer&rsquo;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        <p>
            When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.</p>
        <p>
            <strong>Tracking Cookies Data</strong></p>
        <p>
            We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
        <p>
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>
        <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
        <p>
            Examples of Cookies we use:</p>
        <p>
            <ul>
                <li>
                    <strong>Session Cookies:</strong> We use Session Cookies to operate our Service.
                </li>
                <li>
                    <strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.
                </li>
                <li>
                    <strong>Security Cookies:</strong> We use Security Cookies for security purposes.
                </li>
                <li>
                    <strong>Advertising Cookies:</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.
                </li>
            </ul>
        </p> 
        <p>
            <strong>Other Data</strong></p>
        <p>
            While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, <a href="https://policymaker.io/non-disclosure-agreement/"><span data-darkreader-inline-color=""><u>NDA agreements</u></span></a>, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.</p>
        <p>
            5. <strong>Use of Data</strong></p>
        <p>
        <span class = span_emp> ${url_name.value}</span> uses the collected data for various purposes:</p>
        <p>
            <ul>
                <li>
                    to provide and maintain our Service;
                </li>
                <li>
                    to notify you about changes to our Service;
                </li>
                <li>
                    to allow you to participate in interactive features of our Service when you choose to do so;            
                </li>
                <li>
                    to provide customer support;
                </li> 
                <l>
                    to gather analysis or valuable information so that we can improve our Service;
                </l>
                <li>
                    to monitor the usage of our Service;
                </li>
                <li>
                    to detect, prevent and address technical issues;
                </li>
                <li>
                    to fulfil any other purpose for which you provide it;
                </li>
                <li>
                    to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;
                </li>
                <li>
                    to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;
                </li>
                <li>
                    to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;
                </li>
                <li>
                    in any other way we may describe when you provide the information;
                </li>
                <li>
                    for any other purpose with your consent.
                </li>
            </ul>
        </p>
        
            6. <strong>Retention of Data</strong></p>
        <p>
            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
        <p>
            We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>
        <p>
            7. <strong>Transfer of Data</strong></p>
        <p>
            Your information, including Personal Data, may be transferred to &ndash; and maintained on &ndash; computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
        <p>
            If you are located outside <strong><span class = span_emp>${countryName.value}</span></strong> and choose to provide information to us, please note that we transfer the data, including Personal Data, to Nigeria and process it there.</p>
        <p>
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <p>
        <span class = span_emp>${url_name.value}</span>will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
        <p>
            8. <strong>Disclosure of Data</strong></p>
        <p>
            We may disclose personal information that we collect, or you provide:</p>
        <p>
            <ul>
                <li>
                   <strong>Business Transaction.</strong>
                </li>
                <li>
                    <p>
                    If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</p>
                    <strong>Other cases. We may disclose your information also:</strong></p>
                    <ul>
                        <li>
                            to our subsidiaries and affiliates;
                        </li>
                        <li>
                            to contractors, service providers, and other third parties we use to support our business;
                        </li>
                        <li>
                            to fulfill the purpose for which you provide it;
                        </li>
                        <li>
                            for the purpose of including your company&rsquo;s logo on our website;
                        </li>
                        <li>
                            for any other purpose disclosed by us when you provide the information;
                        </li>
                        <li>
                            with your consent in any other cases;
                        </li>
                        <li>
                            if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.
                        </li>
                    </ul>
                </li>
            </ul>
        </p>
        <p>
            9. <strong>Security of Data</strong>
        </p>
        <p>
            The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
        <p>
            10. <strong>Your Data Protection Rights Under General Data Protection Regulation (GDPR) </strong>
        </p>
        <p>
            If you are a resident of the <span>African</span> Union (<span>A</span>U) and <span>African</span> Economic Area (<span>A</span>EA),
             you have certain data protection rights, covered by GDPR.
            </p>
        <p>
            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
        </p>
        <p>
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <strong><span class = span_emp>${email.value}</span></strong>.
        </p>
        <p>
            In certain circumstances, you have the following data protection rights:
        </p>
        <p>
            <ul>
                <li> the right to access, update or to delete the information we have on you; </li>
                <li> the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete; </li>            
                <li> the right to object. You have the right to object to our processing of your Personal Data;</li>
                <li> the right of restriction. You have the right to request that we restrict the processing of your personal information;</li>
                <li> the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>
                <li> the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;</li>
            </ul>
        </p>
        <p>
            Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.</p>
        <p>
            You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the<span > African</span> Economic Area (<span >A</span>EA).</p>
        <p>
            1<span>1</span>. <strong>Service Providers</strong></p>
        <p>
            We may employ third party companies and individuals to facilitate our Service (<strong>&ldquo;Service Providers&rdquo;</strong>), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.</p>
        <p>
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        <p>
            1<span >2</span>. <strong>Analytics</strong></p>
        <p>
            We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
        <p>
            1<span >3</span>. <strong>CI/CD tools</strong></p>
        <p>
            We may use third-party Service Providers to automate the development process of our Service.</p>
        <p>
            1<span >4</span>. <strong>Behavioral Remarketing</strong></p>
        <p>
            We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.</p>
        <p>
            1<span >5</span>. <strong>Links to Other Sites</strong></p>
        <p>
            Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party&rsquo;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
        <p>
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
        <p>
            For example, the outlined <a href="${url.value}"><span data-darkreader-inline-color=""><u>privacy policy</u></span></a> has been made using <a href="$url"><span data-darkreader-inline-color=""><u><span class = span_emp>${app_name.value}</span></u></span></a>, a free tool that
            helps create high-quality legal documents.<span class = span_emp> ${url_name.value}</span>&rsquo;s <a href="${url.value}/privacy-policy/"><span data-darkreader-inline-color=""><u>privacy policy generator</u></span></a> is an easy-to-use tool for creating a <a href="${url.value}/blog-privacy-policy/">
            <span data-darkreader-inline-color=""><u>privacy policy for blog</u></span></a>, website, e-commerce store or mobile app.</p>
        <p>
            1<span >6</span>. <strong>Children&rsquo;s Privacy</strong></p>
        <p>
            Our Services are not intended for use by children under the age of 18 (<strong>&ldquo;Child&rdquo;</strong> or <strong>&ldquo;Children&rdquo;</strong>).</p>
        <p>
            We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without 
            verification of parental consent, we take steps to remove that information from our servers.</p>
        <p>
            1<span >7</span>. <strong>Changes to This Privacy Policy</strong></p>
        <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p>
            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update &ldquo;effective date&rdquo; at the top of this Privacy Policy.</p>
        <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        <p>
            <span >18</span>. <strong>Contact Us</strong></p>
        <p>
            If you have any questions about this Privacy Policy, please contact us by email: <strong><span class = span_emp>${email.value}</span></strong>.</p>
        <p>
            This <a href="${url.value}/privacy-policy/"><span data-darkreader-inline-color=""><u>Privacy Policy</u></span></a> was created for <strong><span class = span_emp>${url_name.value}</span></strong> 
            by <a href="${url.value}/"><span data-darkreader-inline-color=""><u>${url_name.value}</u></span></a> on <span class = span_emp>${t_c_date.value}</span>.</p>
        `
        pPreview.appendChild(aside);
    }
    