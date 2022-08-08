from django import forms
from django.db import models
from django.db.models import Model
from django.views.generic.list import ListView
from django.utils import timezone



# Create your models here.

class Post(models.Model):

    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    duration = models.DurationField()
    INDUSTRY_CHOICES = [('Banking', 'Banking'), ('Finance', 'Finance'), ('Tech', 'Tech'), ('Entertainment', 'Entertainment')]
    industry = models.CharField(max_length=13, choices=INDUSTRY_CHOICES)
    Privacy = models.BooleanField(default=False) 
    Advertisment= models.BooleanField(default=False)
    # isActiveUser = models.ForeignKey('account.login', on_delete = models.CASCADE)

    def __str__(self):
        return f"{self.name}"

