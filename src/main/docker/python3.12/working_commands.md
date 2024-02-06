```bash
docker run -p 8001:80 --name allentyler -d --rm csgrader_python_3_12
cd $CSGRADER_WORKING_DIR/submissions
docker cp allentyler_1632353_90498224_allen_tyler_assignment1.zip allentyler:/submission/submission.zip
docker exec allentyler unzip submission.zip

# move the files out of the directory created from unzipping the archive
docker exec allentyler bash -c 'for dir in $(find /submission/ -mindepth 1 -maxdepth 1 -type d); do mv "$dir"/* /submission/; rmdir "$dir"; done'
# Running the server.py file
docker exec allentyler python server.py
# Visit localhost:8001

# Stop the container when done
docker stop allentyler
```