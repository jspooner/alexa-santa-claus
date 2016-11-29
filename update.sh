


find ./src -name "*.js" -print | zip -j Archive -@

aws lambda update-function-code --function-name Santa-Claus-Skill \
  --zip-file fileb://./Archive.zip \
  --profile jspooner \
  --region us-east-1


# aws s3 cp src/Archive.zip s3://jspooner-code/hello-world/ --profile jspooner
# aws lambda update-function-code --function-name arn:aws:lambda:us-east-1:792000556867:function:helloWorld \
#   --s3-bucket jspooner-code \
#   --s3-key hello-world/Archive.zip \
#   --profile jspooner \
#   --region us-east-1

  
