FROM ubuntu:latest

# Set the working directory
WORKDIR /var/www/html

# Install Apache2
RUN apt-get update && apt-get install -y apache2

# Copy website files
COPY . /var/www/html/

# Expose Apache's default port
EXPOSE 80

# Start Apache in the foreground
CMD ["apachectl", "-D", "FOREGROUND"]
