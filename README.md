# JAWS demo

This lambda is available at 

- [https://rp8slt6081.execute-api.us-east-1.amazonaws.com/dev/greetings/hello](https://rp8slt6081.execute-api.us-east-1.amazonaws.com/dev/greetings/hello)

which is defined by this handler 

- [https://github.com/pauladam/jaws-demo/blob/master/aws_modules/greetings/hello/index.js](https://github.com/pauladam/jaws-demo/blob/master/aws_modules/greetings/hello/index.js)

# Notes

- 3rd party npm modules are trivially useable
- npm install --save
- require in from your handler and use
- Seems like perhaps compiled modules are not useable out of the box
- Avg response time seems to be around 150ms

# Deploying the lambda handler

    PaulHowe@plhw-rmbp13 ~/code/jaws-4127HwzWg ±master⚡ » jaws dash
    JAWS: Dashboard for project "jaws-4127HwzWg"
     -------------------------------------------
     Project Summary
     -------------------------------------------
        Stages:
           dev us-east-1
        Lambdas: 1
        Endpoints: 1
     -------------------------------------------
     Select Resources To Deploy
     -------------------------------------------
        greetings/hello
          L) lGreetingsHello
      >   E) /greetings/hello - GET
        - - - - -
          Deploy Selected -->

# Sample output

https://rp8slt6081.execute-api.us-east-1.amazonaws.com/dev/greetings/hello?data=foo

    {
      "event": {},
      "context": {
        "awsRequestId": "388b94f7-79a3-11e5-9328-95fcff472237",
        "invokeid": "388b94f7-79a3-11e5-9328-95fcff472237",
        "logGroupName": "/aws/lambda/dev-jaws-4127HwzWg-l-lGreetingsHello-1D7Z42XJ36KU",
        "logStreamName": "2015/10/23/[$LATEST]faa2b39080554e52b16a6031901a2826",
        "functionName": "dev-jaws-4127HwzWg-l-lGreetingsHello-1D7Z42XJ36KU",
        "memoryLimitInMB": "1024",
        "functionVersion": "$LATEST",
        "invokedFunctionArn": "arn:aws:lambda:us-east-1:121316396475:function:dev-jaws-4127HwzWg-l-lGreetingsHello-1D7Z42XJ36KU"
      },
      "context_hash": "65780932dd9b2f7a5219197c83314808",
      "time": "The time is now: 16:29:24"
    }

# Sample context object

    {
      "context": "{\"awsRequestId\":\"ca348a82-799f-11e5-b8fe-c3eb187bc9e3\",\"invokeid\":\"ca348a82-799f-11e5-b8fe-c3eb187bc9e3\",\"logGroupName\":\"/aws/lambda/dev-jaws-4127HwzWg-l-lGreetingsHello-1D7Z42XJ36KU\",\"logStreamName\":\"2015/10/23/[$LATEST]26435169553e40deaa36076eafa5524a\",\"functionName\":\"dev-jaws-4127HwzWg-l-lGreetingsHello-1D7Z42XJ36KU\",\"memoryLimitInMB\":\"1024\",\"functionVersion\":\"$LATEST\",\"invokedFunctionArn\":\"arn:aws:lambda:us-east-1:121316396475:function:dev-jaws-4127HwzWg-l-lGreetingsHello-1D7Z42XJ36KU\"}"
    }


