FROM python:3.12-slim

# install unzip to unzip the submission
RUN apt-get update && apt-get install -y \
    unzip \
    nginx

# Set the working directory in the container
WORKDIR /submission

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/sites-available/default

# Copy the start_services script into the container
COPY start_services.sh /start_services.sh

RUN chmod +x /start_services.sh

# Use the script as the entrypoint
CMD ["/start_services.sh"]