FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
# CMD ["sh", "-c", "python manage.py makemigrations", "python manage.py migration", "python manage.py runserver"]
COPY . /code/

