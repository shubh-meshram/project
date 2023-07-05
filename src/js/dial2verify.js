	var attempt=1;
	var SID="";







		function initiateDial2Verify(url,token)
		{
			// Added by shlbhushan to skip dial2verify..
			//$('#check_mobile_verification').val(1);
			//$('#newcustomer').submit();
			showCodeForm(1);
			GetVerificationImage(url,token);
		
			
		}

		function showCodeForm(code)
		{
			$("#dial2verify").fadeIn();
			$(".submitbutton").val("Processing..");
			var cust_phone=$('#phone').val();
			$("#waiting_msg").text("Waiting for missed call from "+cust_phone);
		}

		function GetVerificationImage(url,token)
		{
			var cust_phone=$('#phone').val();
			//return cust_phone;
			//$.post("index.php?route=folder_name/controller_name/get_image_api&phone_number="+cust_phone,
			$.post(url+'/api/customer/get-image-api/phone_number/'+cust_phone,{ access_token: token},
				   function(data) { updateImage(data.ImageUrl,data.SessionId,url,token); }, "json");
		}

		function updateImage(ImageURL, vSID,url,token)
		{

                if ( ImageURL === "Err" || ImageURL === ""  ) { Err(); }
                else
                {
                 //$("#Image").html("Please give a missed call to <br><img src=\"http://imagestock.dial2verify.in/"+ImageURL+"\"/>");
                 $("#Image").html("Please give a missed call to <br><img src=\""+ImageURL+"\"/>");
		             SID = vSID;
		             PollStart("UnVerified",url,token);
                }
		}

		function CheckStatus(url,token)
		{
			//$.post("index.php?route=folder_name/controller_name/get_verification_status_api&SID="+SID,
			$.post(url+"/api/customer/get-verification-status-api/SID/"+SID,{access_token: token},
				   function(data) { PollStart(data.VerificationStatus,url,token); }, "json");
		}

		function PollStart(vStatus,url,token)
		{
                         attempt =attempt+1;
                         if ( attempt >= 90  ) { TimeoutCheck(); }
                         else
                         if (vStatus === "UnVerified") {
								$("#status").html("Please give a missed call in  <b><i>"+(90-attempt) +"</i></b> seconds.");
								setTimeout(CheckStatus(url,token), 1000);
                           	}
                         else if (vStatus === "VERIFIED")
                        {
			          	success();
		            	}
                        else
                        TimeoutCheck();

		}


        function Err()
        {
        	$("#status").html("Error!<br>Sorry something went wrong, Please cross check your telephone number.");
        }

		function success() {
			$("#status").text("Congrats !!! Phone Number Verified!");
			// bingo its success now update the customers customer_telephone_verified to yes
			$('#check_mobile_verification').val(1);
			$('#signup').submit();
		}

		function TimeoutCheck() {
			$("#status").text("Verification Failed!");
		}