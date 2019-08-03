
//amazon alexa sdk package for handling requests and responses
const Alexa = require('ask-sdk-core');
//amazon date parser to parse AMAZON.DATES to javascipt Date() format
const AmazonDateParser = require('amazon-date-parser');

//global permission for alexa to set reminders
const PERMISSIONS = ['alexa::alerts:reminders:skill:readwrite'];

//Users Timetable for the classes or lectures
const TIMETABLE = [
	{
		"8:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		 "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"15:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		
	},
	{
		"8:00": {
		  "class title":"Operating Systems Tutorial",
		  "room no":"D313",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"15:00": {
		  "class title":"Computer Architecture Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"Theory of Computation Lecture",
		  "room no":"F106",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"Foundation of Data Science Lecture",
		  "room no":"F106",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		
	},
	{
		"8:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"Principles of Programming Language Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"Operating Systems Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"Human Computer Interaction Lecture",
		  "room no":"F107",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"Neural Network and Fuzzy Logic Lecture",
		  "room no":"F108",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		  "class title":"Principle of Programming Language Tutorial",
		  "room no":"TBA",
		  "alertToken":"",
		},
		"15:00": {
		 "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
	
	},
	{
		"8:00": {
		  "class title":"Theory of Computation Tutorial",
		  "room no":"F106",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"Computer Architecture Lab",
		  "room no":"D313",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"15:00": {
		  "class title":"Computer Architecture Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"Theory of Computation Lecture",
		  "room no":"F106",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"Foundation of Data Science Lecture",
		  "room no":"F106",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
	},
	{
		"8:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"Principles of Programming Language Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"Operating Systems Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"Human Computer Interaction Lecture",
		  "room no":"F107",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"Neural Network and Fuzzy Logic Lecture",
		  "room no":"F108",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"15:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
	
	},
	{
		"8:00": {
		  "class title":"Computer Architecture Tutorial",
		  "room no":"F204",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"15:00": {
		  "class title":"Computer Architecture Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"Theory of Computation Lecture",
		  "room no":"F106",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"Foundation of Data Science Lecture",
		  "room no":"F106",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
	},
	{
		"8:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"9:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"10:00": {
		  "class title":"Operating Systems Lecture",
		  "room no":"F105",
		  "alertToken":"",
		},
		"11:00": {
		  "class title":"Human Computer Interaction Lecture",
		  "room no":"F107",
		  "alertToken":"",
		},
		"12:00": {
		  "class title":"Neural Network and Fuzzy Logic Lecture",
		  "room no":"F108",
		  "alertToken":"",
		},
		"13:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"14:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"15:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"16:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"17:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
		"18:00": {
		  "class title":"",
		  "room no":"",
		  "alertToken":"",
		},
	},
]

const SKILL_NAME = "class reminder";
const enData = {
  translation: {
    LAUNCH_MESSAGE: 'Welcome to the '+ SKILL_NAME +', How can I Help!',
    WHAT_DO_YOU_WANT: 'What would you like to do?',
    NOTIFY_MISSING_PERMISSIONS: 'Please enable Reminder permissions in the Amazon Alexa app using the card I\'ve sent to your Alexa app.',
    HELP_MESSAGE: 'You can use this skill by asking something like: create a reminder, update timetable?',
    HELP_REPROMPT: 'What can I help you with?',
    FALLBACK_MESSAGE: 'The class reminder skill can\'t help you with that.  It can help you to manage your lectures schedule and set, update or delete reminder for the them. What can I help you with?',
    FALLBACK_REPROMPT: 'What can I help you with?',
    REMINDER_CREATED: 'Reminders for the lectures has been created',
    ERROR_MESSAGE: 'Sorry, an unexpected error occurred.',
    UNSUPPORTED_DEVICE: 'Sorry, this device doesn\'t support reminders.',
    STOP_MESSAGE: 'Bye! Thanks for using the Class Reminder!',
    NO_REMINDER: 'OK, I won\'t remind you.',
    INVALID_CREATE_REQUEST: 'I was unable to create the requested reminder. Please try to create a new reminder.',
    INVALID_DELETE_REQUEST: 'I was unable to delete the requested reminder. Please try again! ',
  }
};
const day =  [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const LaunchRequestIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(enData.translation.LAUNCH_MESSAGE)
      .reprompt(enData.translation.LAUNCH_MESSAGE)
      .getResponse();
  }
};

const CreateReminderIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' && request.intent.name === 'CreateReminderIntent';
  },
  async handle(handlerInput) {
    const requestEnvelope = handlerInput.requestEnvelope;
    const subject = requestEnvelope.request.intent.slot.subject.value.trim();
    const date = new AmazonDateParser(requestEnvelope.request.intent.slot.date.value);
    const startDate = new Date(date.startDate);
    const endDate = new Date(date.endDate);
    const type = requestEnvelope.request.intent.slot.type.value.trim();
    
    if(subject && type && date){
    	//constraints before requesting api to set reminder
    	if((startDate.getDate()!==endDate.getDate()) && (startDate.getMonth()!==endDate.getMonth()) && (startDate.getFullYear()!==endDate.getFullYear())){
    		return handlerInput.responseBuilder
    			.speak("I am unable to set reminder for the given date. Try again by setting alarm for a particular date.")
    			.getResponse();
    	}
    	if(startDate.getTime()<=(new Date()).getTime()){
    		return handlerInput.responseBuilder
    			.speak("Cannot set the reminder for a date before current date. Please try again!")
    			.getResponse();
    	}
    	let time,detail;
    	for(const [x,y] in TIMETABLE[startDate.getDay()]){
    		if(y.classTitle==subject){
    			time = x;
    			detail = y;
    			break;
    		}
    	}
    	if(!(time && detail)){
    		return handlerInput.responseBuilder
    			.speak("You dont have any "+subject+" "+type+" on "+day(startDate.getDay()))
    			.getResponse();
    	}
    	// check for confirmation.  if not confirmed, delegate
    	switch (requestEnvelope.request.intent.confirmationStatus) {
      	case 'CONFIRMED':
        	// intent is confirmed, so continue
        	console.log('Alexa confirmed intent, so clear to create reminder');
        	break;
      	case 'DENIED':
        	// intent was explicitly not confirmed, so skip creating the reminder
        	console.log('Alexa disconfirmed the intent; not creating reminder');
      		return handlerInput.responseBuilder
          	.speak(`${enData.translation.NO_REMINDER} ${enData.translation.WHAT_DO_YOU_WANT}`)
          	.reprompt(enData.translation.WHAT_DO_YOU_WANT)
          	.getResponse();
      	case 'NONE':
    		default:
        	console.log('delegate back to Alexa to get confirmation');
        	return handlerInput.responseBuilder
          	.addDelegateDirective()
          	.getResponse();
    	}
    	//gloabal permission to Alexa for barging in between for the reminder.
    	const permission = requestEnvelope.context.System.user.permissions;
    	if (!(permission && permission.consentToken)) {
      	return handlerInput.responseBuilder
        	.speak(enData.translation.NOTIFY_MISSING_PERMISSIONS)
        	.withAskForPermissionsConsentCard(PERMISSIONS)
        	.getResponse();
    	}
    	try{
      	const client = handlerInput.serviceClientFactory.getReminderManagementServiceClient();
      	
        const reminderTime = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate(),parseInt(time.slice(0,2)),parseInt(time.slice(3,5)));
        const reminderRequest = {
        requestTime: reminderTime.toISOString().slice(0,-1),
        trigger: {
          type: 'SCHEDULED_ABSOLUTE',
          scheduledTime:'',
          timeZoneId: 'Asia/Kolkata',
          recurrence : {  freq : "WEEKLY",}
        },
        alertInfo: {
          spokenInfo: {
            content: [{
              locale: 'en-IN',
              text: 'Hurry! You have '+detail.classTitle+' '+type+' after ten minutes.',
            }],
          },
        },
        pushNotification: {
          status: 'ENABLED',
        },
      };
      reminderTime.setTime(reminderTime.getTime()-10*1000*60);
      reminderRequest.trigger.scheduledTime = reminderTime.toISOString().slice(0,-1);
      console.log('sending request', reminderRequest);
      let reminderResponse = await client.createReminder(reminderRequest);
      console.log(JSON.stringify(reminderResponse));
      
    	}catch (error) {
      	if (error.name !== 'ServiceError') {
        	console.log(`error: ${error.stack}`);
        	const response = handlerInput.responseBuilder
          	              .speak(enData.translation.ERROR_MESSAGE)
            	            .getResponse();
        	return response;
      	}
      	throw error;
    	}

    	return handlerInput.responseBuilder
      	.speak(enData.translation.REMINDER_CREATED)
      	.getResponse();
    }
    
    return handlerInput.responseBuilder
    	.speak(enData.translation.INVALID_CREATE_REQUEST)
    	.getResponse();
  }
};

const DeleteReminderIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' && request.intent.name === 'DeleteReminderIntent';
  },
  handle(handlerInput){
    const requestEnvelope = handlerInput.requestEnvelope;
    const subject = requestEnvelope.request.intent.slot.subject.value.trim();
    const date = new AmazonDateParser(requestEnvelope.request.intent.slot.date.value);
    const startDate = new Date(date.startDate);
    const endDate = new Date(date.endDate);
    const type = requestEnvelope.request.intent.slot.type.value.trim();
    
    if(subject && date && type){
    	
    }
    return handlerInput.responseBuilder
    	.speak(endDateINVALID_DELETE_REQUEST);
    	.getResponse();
  }
}

const HelpIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(enData.translation.HELP_MESSAGE)
      .reprompt(enData.translation.HELP_REPROMPT)
      .getResponse();
  },
};

const FallbackIntentHandler = {
  // The FallbackIntent can only be sent in those locales which support it,
  // so this handler will always be skipped in locales where it is not supported.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(enData.translation.FALLBACK_MESSAGE)
      .reprompt(enData.translation.FALLBACK_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(enData.translation.STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    switch (error.statusCode) {
      case 400:
        return  handlerInput.responseBuilder
          .speak("Wrong data in JSON file!")
          .getResponse();
      case 401:
        return handlerInput.responseBuilder
          .speak(enData.translation.NOTIFY_MISSING_PERMISSIONS)
          .withAskForPermissionsConsentCard(PERMISSIONS)
          .getResponse();
      case 403:
        return handlerInput.responseBuilder
          .speak(`${enData.translation.UNSUPPORTED_DEVICE} ${enData.translation.WHAT_DO_YOU_WANT}`)
          .reprompt(enData.translation.WHAT_DO_YOU_WANT)
          .getResponse();
      default:
        return handlerInput.responseBuilder
          .speak(enData.translation.ERROR_MESSAGE)
          .getResponse();
    }
  },
};

const RequestLog = {
  async process(handlerInput) {
    console.log(`REQUEST ENVELOPE = ${JSON.stringify(handlerInput.requestEnvelope)}`);
  },
};

const ResponseLog = {
  process(handlerInput) {
    console.log(`RESPONSE = ${JSON.stringify(handlerInput.responseBuilder.getResponse())}`);
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
          .addRequestHandlers(
            LaunchRequestIntentHandler,
            HelpIntentHandler,
            ExitHandler,
            FallbackIntentHandler,
            SessionEndedRequestHandler,
            CreateReminderIntentHandler,
            DeleteReminderIntentHandler,
          )
          .addRequestInterceptors(RequestLog)
          .addResponseInterceptors(ResponseLog)
          .addErrorHandlers(ErrorHandler)
          .withApiClient(new Alexa.DefaultApiClient())
          .lambda();
    