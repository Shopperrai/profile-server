const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID='652663810077-n4sdjkqur0fes6f2mtm9jfhaqsa0l8ls.apps.googleusercontent.com'
const CLEINT_SECRET='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'
const AUTHGMAIL='abhishekverma3459@gmail.com'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04ls4uB-qpKk6CgYIARAAGAQSNwF-L9IrX3TfZkG_ENnaroFshYeeJ3v7_O9wdYs38PaND_JOGK2NqwZg2U5TgOdgFvNJRv1d_u8'
const sendingTime = Date.now().toString;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(
  recipientName,
  senderName,
  ReciverEmail,
  subject,
  text,
  OfficalEmailAuth = AUTHGMAIL
) {
  try {
    if (!oAuth2Client.credentials || oAuth2Client.isTokenExpiring()) {
      try {
        // Fetch a new access token using the refresh token
        const { tokens } = await oAuth2Client.refreshAccessToken();
        oAuth2Client.setCredentials(tokens);
      } catch (error) {
        // If there is an error refreshing the access token, handle it appropriately
        console.error("Error refreshing access token:", error.message);
        throw new Error("Unable to refresh access token.");
      }
    }

    // const accessToken = 'ya29.a0AbVbY6OlCltMuq4IxAHgsjLw-Nim07CWSKZcolezw4xZ5-EU6egKP1tytUgxqcCoHo7pUiRcxKaSKzef_ZagpDpCjSiMya564HUtrCkIqHp-Ngbjq3pBHmtcwgMt9ZngejEvlgs9TQOz1o7VhySuDVuLRKni5yoaCgYKARcSARISFQFWKvPlqlAKerZGOxniLlNqhc8nXw0166'
    const accessToken = oAuth2Client.credentials.access_token;
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: AUTHGMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: `"${senderName}" <${OfficalEmailAuth}>`,
      to: ReciverEmail, // Replace with the recipient's email address
      subject: subject,
      text: text,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>Hi Shopper AI Members Thanks For Subscibing Our NewsLetter${sendingTime}</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
      <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]--><!--[if !mso]><!-- -->
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"><!--<![endif]-->
      <style type="text/css">
      #outlook a {
      padding:0;
      }
      .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
      }
      .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
      }
      @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center!important } h2 { font-size:24px!important; text-align:center!important } h3 { font-size:20px!important; text-align:center!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:center!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:center!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:center!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
      </style>
      </head>
      <body style="width:100%;font-family:'Josefin Sans', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#E8F1CE"><!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#e8f1ce"></v:fill>
      </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#E8F1CE">
      <tr>
      <td valign="top" style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
      <tr>
      <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;color:#29510F;font-size:14px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#29510F;font-size:14px" href="https://viewstripo.email">View online</a></p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
      <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_b82f8758f348b527f77b532eff464b177eefdbe6b2d2c73e86ff27ca0ad357aa/images/paper_palette.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="50" title="Logo"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr>
      <td align="left" style="padding:20px;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
      <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#829553" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#829553" role="presentation">
      <tr>
      <td align="center" style="padding:0;Margin:0;position:relative"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#29510F;font-size:14px"><img class="adapt-img" src="https://xpgbrz.stripocdn.email/content/guids/bannerImgGuid/images/image16885445016186276.png" alt title width="560" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-bottom:5px"><h1 style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:40px;font-style:normal;font-weight:bold;color:#29510f">30% OFF</h1></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#29510f">SALE ENDS IN</h3></td>
      </tr>
      <tr>
      <td align="center" style="padding:20px;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#29510F;font-size:14px"><img class="adapt-img" alt width="311" src="https://cdt-timer.stripocdn.email/api/v1/images/-l-C7B3L2yPaihvM5aAK9cbqmnN6l7S7MYZ_wpJSvjk?l=1690548329904" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:40px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
      style="height:49px; v-text-anchor:middle; width:214px" arcsize="0%" stroke="f" fillcolor="#29510f">
      <w:anchorlock></w:anchorlock>
      <center style='color:#829553; font-family:"Josefin Sans", helvetica, arial, sans-serif; font-size:20px; font-weight:700; line-height:20px; mso-text-raise:1px'>SHOP NOW</center>
      </v:roundrect></a>
      <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2CB543;background:#29510F;border-width:0px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#829553;font-size:20px;display:inline-block;background:#29510F;border-radius:0px;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:24px;width:auto;text-align:center;padding:15px 40px 10px 40px;mso-padding-alt:0;mso-border-alt:10px solid #29510F">SHOP NOW</a></span><!--<![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#29510F">You may like</h2></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#29510F;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_b82f8758f348b527f77b532eff464b177eefdbe6b2d2c73e86ff27ca0ad357aa/images/deecopperandwildyf61jhxnmyounsplash_1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="174" class="p_image"></a></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h3 class="p_name" style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#29510F">Pencils</h3></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0"><p class="p_price" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;color:#29510F;font-size:14px">$1,99</p></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
      style="height:34px; v-text-anchor:middle; width:163px" arcsize="0%" strokecolor="#829553" strokeweight="1px" fillcolor="#ffffff">
      <w:anchorlock></w:anchorlock>
      <center style='color:#829553; font-family:"Josefin Sans", helvetica, arial, sans-serif; font-size:12px; font-weight:700; line-height:12px; mso-text-raise:1px'>SHOP NOW</center>
      </v:roundrect></a>
      <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#829553;background:#ffffff;border-width:1px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1688398672082" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#829553;font-size:16px;display:inline-block;background:#ffffff;border-radius:0px;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 25px 5px;mso-padding-alt:0;mso-border-alt:10px solid #29510F">SHOP NOW</a></span><!--<![endif]--></td>
      </tr>
      </table></td>
      <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
      </tr>
      </table><!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#29510F;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_b82f8758f348b527f77b532eff464b177eefdbe6b2d2c73e86ff27ca0ad357aa/images/yellowcactusmtnn8ifry6yunsplash_1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="173" class="p_image"></a></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h3 class="p_name" style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#29510F">Notebooks</h3></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0"><p class="p_price" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;color:#29510F;font-size:14px">$2,99</p></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
      style="height:34px; v-text-anchor:middle; width:163px" arcsize="0%" strokecolor="#829553" strokeweight="1px" fillcolor="#ffffff">
      <w:anchorlock></w:anchorlock>
      <center style='color:#829553; font-family:"Josefin Sans", helvetica, arial, sans-serif; font-size:12px; font-weight:700; line-height:12px; mso-text-raise:1px'>SHOP NOW</center>
      </v:roundrect></a>
      <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#829553;background:#ffffff;border-width:1px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1688398689226" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#829553;font-size:16px;display:inline-block;background:#ffffff;border-radius:0px;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 25px 5px;mso-padding-alt:0;mso-border-alt:10px solid #29510F">SHOP NOW</a></span><!--<![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
      <tr>
      <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:173px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#29510F;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_b82f8758f348b527f77b532eff464b177eefdbe6b2d2c73e86ff27ca0ad357aa/images/kasturiroybyy9hndox0kunsplash_1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="173" class="p_image"></a></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h3 class="p_name" style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#29510F">Bookmarks</h3></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0"><p class="p_price" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;color:#29510F;font-size:14px">$0,99</p></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
      style="height:34px; v-text-anchor:middle; width:163px" arcsize="0%" strokecolor="#829553" strokeweight="1px" fillcolor="#ffffff">
      <w:anchorlock></w:anchorlock>
      <center style='color:#829553; font-family:"Josefin Sans", helvetica, arial, sans-serif; font-size:12px; font-weight:700; line-height:12px; mso-text-raise:1px'>SHOP NOW</center>
      </v:roundrect></a>
      <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#829553;background:#ffffff;border-width:1px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1688398645486" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#829553;font-size:16px;display:inline-block;background:#ffffff;border-radius:0px;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 25px 5px;mso-padding-alt:0;mso-border-alt:10px solid #29510F">SHOP NOW</a></span><!--<![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td></tr></table><![endif]--></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:40px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
      style="height:49px; v-text-anchor:middle; width:204px" arcsize="0%" stroke="f" fillcolor="#29510f">
      <w:anchorlock></w:anchorlock>
      <center style='color:#ffffff; font-family:"Josefin Sans", helvetica, arial, sans-serif; font-size:20px; font-weight:700; line-height:20px; mso-text-raise:1px'>SEE MORE</center>
      </v:roundrect></a>
      <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2CB543;background:#29510F;border-width:0px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ffffff;font-size:20px;display:inline-block;background:#29510F;border-radius:0px;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-weight:bold;font-style:normal;line-height:24px;width:auto;text-align:center;padding:15px 40px 10px 40px;mso-padding-alt:0;mso-border-alt:10px solid #29510F">SEE MORE</a></span><!--<![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#29510F;width:600px">
      <tr>
      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
      <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:174px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">Our Address</h3></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px">7865 Old Cape, Owl, Britsh Columbia</p></td>
      </tr>
      </table></td>
      <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
      </tr>
      </table><!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
      <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:173px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">Our Contacts</h3></td>
      </tr>
      <tr>
      <td style="padding:0;Margin:0">
      <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr class="links-images-left">
      <td align="LEFT" valign="top" width="100%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:15px;padding-bottom:10px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'Josefin Sans', helvetica, arial, sans-serif;color:#ffffff;font-size:14px;font-weight:normal"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_143a01d4a40cccdd2690f558b0e67d98b2766da303163f2f549b23da5f92663d/images/svg_u1v.png" alt="123-456-789" title="123-456-789" align="absmiddle" width="30" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-right:5px;vertical-align:middle;font-size:12px">123-456-789</a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:173px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#ffffff">Follow Us</h3></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
      <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Ig" title="Instagram" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/assets/img/social-icons/logo-white/twitter-logo-white.png" alt="Tw" title="Twitter" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="https://xpgbrz.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" title="Facebook" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td></tr></table><![endif]--></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
      <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px">
      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td style="padding:0;Margin:0;border-bottom:1px dotted #ffffff;background:none;height:1px;width:100%;margin:0px"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
      <tr>
      <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;font-size:0px"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_b82f8758f348b527f77b532eff464b177eefdbe6b2d2c73e86ff27ca0ad357aa/images/paper_palette_wpC.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="25"></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
      <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:270px">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="right" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:14px" href="">Unsubscribe</a></p></td>
      </tr>
      </table></td>
      </tr>
      </table><!--[if mso]></td></tr></table><![endif]--></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#29510F;width:600px">
      <tr>
      <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
      <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" style="padding:0;Margin:0;width:560px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=paper_palette&utm_content=stationery_items" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://xpgbrz.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      </div>
      </body>
      </html>
      
      `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
// // example use case
// const recipientName = "Verma"; // Replace with the recipient's name
// const senderName = "Abhishek"; // Replace with your name
// const ReciverEmail = "abhishekverman3459@gmail.com";
// const OfficalEmailAuth = AUTHGMAIL;
// const subject = "Hello from Gmail using API";
// const text = `Hello ${recipientName},\n\nThis is a dynamic email sent using the Backend. Feel free to customize the content as needed.\n\nBest regards,\n${senderName}`;

// sendMail(recipientName, senderName, ReciverEmail, subject, text)
//   .then((result) => console.log("Email sent...", result))
//   .catch((error) => console.log("error:" + error.message));

module.exports = sendMail;
