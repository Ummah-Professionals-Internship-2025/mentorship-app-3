from django.db import models

class Meeting(models.Model):
    title = models.CharField(max_length=100)
    