#  What is ChatGPT?
- Most people have spoken with a chatbot at least once in their lives. Chatbots are all around us, such as Amazon's Alexa, Apple's Siri, or even a textbox on your computer screen. 
- ChatGPT is a Chatbot (hence the name “Chat”) which is a computer program that uses artificial intelligence to conduct an online conversation
- ChatGPT uses the large language model, currently GPT-4 which is why it is called “ChatGPT”

#  What is a Large Language Model? 
- Chatbots like ChatGPT use a large language model to generate humanlike dialogue 
- A large language model is a computer program that learns to predict which words usually follow which. For example, let’s say a large language model is given a sentence “Once upon a ___". The word it would learn is most likely to follow next is “time”.

#  How was ChatGPT made?
<img align="center" src="./images/GPT2.png">

- This is a diagram of the machine learning process. We start with a dataset. We then feed that dataset to a learning algorithm which finds patterns in the data it sees. Finally, the patterns are encoded in a “model”, which makes predictions about new data it sees that’s outside its original dataset.

# # #Dataset
- ChatGPT is fed chunks words, paragraphs and sentences from BILLIONS of sources on the internet:
- - articles, magazines, scientific papers,
- - Twitter
- - Wikipedia
- - Blogs. 

- It learns to create new sentences and paragraphs from all these examples of language online.

# # # Learning Algorithm 
- The first step in learning is called “Language Modeling”. Here, ChatGPT is basically just learning how language works in a very basic way by looking at those billions of webpages and documents, getting a sense of how words flow from sentence to sentence, paragraph to paragraph, etc.
- Then, we get ChatGPT to learn the patterns of conversations. Before, it saw text of all kinds - now, we give it data that is specifically made up of texting conversations, comment threads, etc. that real people have had.  We feed it the first part of the conversation. Then, we ask it for a prediction of what the next text/comment should be
- Finally, to talk to humans even better, ChatGPT is trained AGAIN using a process called Reinforcement Learning. First, ChatGPT gives several possible responses to a text from a human; Then, that human rates the responses from most relevant to least relevant response. ChatGPT learns to reward patterns of language it sees in the most likely response, and de-prioritize patterns in the least likely one. This makes the model better at generating dialogue in the future. 

# # # Prediction
- After all of that training, with: 
1. Dataset - BILLIONS of web pages
2. Learning
- 1. Which words follow which
- 2. Understanding Conversation Patterns. (I.e., which texts follow which)
- 3. Conversation Practice with Human Feedback
- We have… ChatGPT!

# ChatGPT Limitations
- It can be incorrect. In this example, you can see that it got a math question wrong: 
<img align="center" src="./images/GPT3">

- It does not have as much creative capacity as humans. While ChatGPT can generate text based on patterns and structures it has learned from its training data, it does not have the ability to create original ideas or engage in creative problem-solving in the same way that humans can. 
 
 - It doesn’t know recent events. ChatGPT sometimes would not be correct on recent events, since that is not included in the dataset. 
<img align="center" src="./images/GPT4">


- Some responses from ChatGPT can reflect algorithmic bias based on the dataset it has been trained on or the people who wrote the original algorithms and have provided feedback.  For example, when asked about prominent scientists in history, the response is scientists that are exclusively from Europe or North America, and primarily men (8 out of 10). 
<img align="center" src="./images/GPT5">

- Sometimes, ChatGPT may "Hallucinate" an answer. It would predict an incorrect answer based on its training data, this could be in the form of telling "real" stories about non-existing people, or in this case, answering a question about a common riddle wrong when the riddle was altered slightly, 
<img align="center" src="./images/gptH1">

# Plant-GPT Connection
- Now, how do we link GPT to our plant and how can it benefit us? Here's a brief explaination: 
<img align="center" src="./images/GPT6">

- First, you have a lonely plant that is incapable of expressing it’s feelings. When you decide to give it a voice, you would start by 
adding a sensor to its soil.
- This sensor detects temperature, humidity, and moisture levels in your plant’s soil. To store this data 
somewhere, you connect the sensor to a microbit. Now, you have data on your plant but you can’t see it yet so you’ll then connect the microbit that’s storing all your plant’s data to App Inventor, which will display your data in charts on your app in front of you.
- Although your plants stats are now in front of you, you may not be able to interpret whether your plant is in good condition or not,
here’s where app inventor sends the plant’s data to chatgpt, which interprets the stats for you and writes a brief on what they
mean. 
- Chatgpt now sends the brief to app inventor which displays it on your screen, and app inventor will send the brief to the
Microbit which now displays either a happy face or sad face accordingly




