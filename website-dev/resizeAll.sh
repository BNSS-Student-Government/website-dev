cd public/assets/members-photos
for i in *.JPG;
  do name=`echo "$i" | cut -d'.' -f1`
  echo "$name"
  ffmpeg -i "$i" -vf scale="480:-1" "../members-photos-480p/${name}.jpg"
done