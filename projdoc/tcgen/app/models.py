from django.db import models


# Create your models here.

class test(models.Model):
    
    name = models.CharField(max_length=200)
    cname = models.CharField(max_length=200)
    dt1 = models.TextField()
    dt2 = models.TextField()
    dt3 = models.TextField()
    dt4 = models.IntegerField()
    cloc = models.TextField()
