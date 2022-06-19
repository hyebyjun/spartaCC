import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

# client = MongoClient(
#     'mongodb+srv://test:sparta@cluster0.rf8ug.mongodb.net/?retryWrites=true&w=majority')
# db = client.dbsparta

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(
    'https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20210701', headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')
print(soup)

# songs = soup.select('#old_content > table > tbody > tr')
# print(songs)

# for song in songs:
#     a_tag = movie.select_one('td.title > div > a')
#     if a_tag is not None:  # img 태그의 alt 속성값을 가져오기
#         rank = movie.select_one('td:nth-child(1) > img')['alt']
#         title = a_tag.text  # a 태그 사이의 텍스트를 가져오기
#         star = movie.select_one('td.point').text  # td 태그 사이의 텍스트를 가져오기
#         doc = {
#             'title': title,
#             'rank': rank,
#             'star': star
#         }
