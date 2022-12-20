import re
import wget
import os
import json

import urllib.request

fl = open('champlist.json', 'w')

print('Removing previous rectangle/square photo files...')
# remove all the .png files from champrec and champsquare directory
dirnamerec = '../assets/champrec'
dirnamesq = '../assets/champsquare'

     

print('Getting the latest league of legends version')
# Get latest version in ddrangon
with urllib.request.urlopen('https://ddragon.leagueoflegends.com/api/versions.json') as response:
   html = response.read()
latestversion = json.loads(html)[0]
print('... the latest version is ' + latestversion)

print('Getting the champion names')
# Get the champion names
with urllib.request.urlopen('http://ddragon.leagueoflegends.com/cdn/'+latestversion+'/data/en_US/champion.json') as response:
   html = response.read()
championjson = json.loads(html)
champlist =championjson["data"].keys()
lenchamp = len(champlist)
champstr = 'var champ = [\n'
for idx, elem in enumerate(champlist):
   fl.write('{\n')
   fl.write('\t "id": '+str(idx+1)+',\n')
   fl.write('\t "title": "'+elem+'",\n')
   fl.write('\t "path": "assets/champsquare/'+elem+'.png",\n')
   fl.write('},\n')


#    champstr = champstr + "{title:'" + elem + "', path:'assets/champsquare/"+elem+".png'}"
#    if idx != lenchamp -1:
#       champstr = champstr + ',\n'

# champstr = champstr + "];"

# fl.write(str(champstr))
print('Champion name is ...')
print(champlist)


if False:
   # Remove the dir which contains .jpg and .png files
   test = os.listdir(dirnamerec)
   for item in test:
      if item.endswith(".jpg"):
         os.remove(os.path.join(dirnamerec, item))
   test = os.listdir(dirnamesq)
   for item in test:
      if item.endswith(".png"):
         os.remove(os.path.join(dirnamesq, item))   


   print('Downloading all squre/png files ...')
   # get squre pics in ../assets/champsquare directory
   for champ in champlist:
      url = 'http://ddragon.leagueoflegends.com/cdn/'+latestversion+'/img/champion/'+champ+'.png'
      image_filename = wget.download(url, out = '../assets/champsquare')

   # get rect pics in ../assets/champrec directory
   for champ in champlist:
      url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+champ+'_0.jpg'
      image_filename = wget.download(url, out = '../assets/champrec')

   print('Done to download photo files!')