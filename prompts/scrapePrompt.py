#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 28 18:37:52 2019

@author: lawrence
"""

# -*- coding: utf-8 -*-

# use requests module to access webpage
import requests
# use BeautifulSoup to scrape HTML from site
from bs4 import BeautifulSoup

# sample prompts embedded in webpage
url = 'https://www.trueachievements.com/a208499/quiplash-xl-back-talk-achievement'
# set timeout in case the page takes too long
response = requests.get(url, timeout=5)

content = BeautifulSoup(response.content, "html.parser")
# store all isolated quips into array called prompts
prompts = []

# identify prompts based on string identifier
arr = str(content).split("Question: ")
for phrase in arr:
    # separate questions from answers based on break tags
    index = phrase.find("<br/>")
    # get prompt without "Question: " included in string
    prompt = phrase[:index]
    # verify that answer is just text and not an HTML tag
    if '<' not in prompt and '>' not in prompt:
        prompts.append(prompt)

# check for accuracy
# for p in prompts:
#    print(p)
length = len(prompts)
# print(length)

# create file to write to
f = open("prompts.csv", 'w')
for i in range(length - 1):
    f.write(prompts[i] + ',')
# don't include comma after last prompt
f.write(prompts[length - 1])
