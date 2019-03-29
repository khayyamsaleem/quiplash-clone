#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 28 18:37:52 2019

@author: lawrence
"""

# -*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import requests

url = 'https://www.trueachievements.com/a208499/quiplash-xl-back-talk-achievement'
response = requests.get(url, timeout = 5)

content = BeautifulSoup(response.content, "html.parser")
prompts = []

arr = str(content).split("Question: ")
for phrase in arr:
    index = phrase.find("<br/>")
    prompts.append(phrase[:index])

for p in prompts:
    print(p)
length = len(prompts)
print(length)
