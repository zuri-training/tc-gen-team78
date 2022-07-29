from django.db import models
from django.db import models
from django.db.models import Model
from django.views.generic.list import ListView
from django.utils import timezone

# Create your models here.

class details(models.Model):
    dt1 = models.CharField(max_length=200)
    cname = models.CharField(max_length=200)
    #
