#to triple encode my email <3
#encoding presvents being scraped online, i have too many spam investment emails in my inbox already.. 
#3x for fun

import base64

#mailto: opens email application 
email = 'mailto:m@palerm.ca'

# Encoding X3
encoded_email =  base64.b64encode(base64.b64encode(base64.b64encode(email.encode('utf-8'))))

print(encoded_email)

#Decoding X3
decoded_email=   base64.b64decode(base64.b64decode(base64.b64decode(encoded_email))).decode('utf-8')

print(decoded_email)
