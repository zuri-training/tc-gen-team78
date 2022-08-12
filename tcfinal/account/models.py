from django.db import models
from django.contrib.auth.models import User, auth
from django import forms
from django.db import models
from django.db.models import Model
from django.views.generic.list import ListView
from django.utils import timezone
from django.db.models.signals import pre_save
from tcdem.utils import unique_slug_generator
from datetime import date
from django.utils.timezone import now


# Create your models here.


# Create your models here.
class Profile(models.Model):
     user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
     bio = models.TextField()

     def __str__(self):
        return str(self.user)

class Post(models.Model):
    # current_user = models.ForeignKey(User(), null=True, on_delete=models.CASCADE)
    Your_Website_Name = models.CharField(max_length=100, null=True)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    Your_Website_Url = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100)
    Policy_Effective_Date = models.DateField(auto_now_add=False, default=date.today)
    Address = models.CharField(max_length=100, null=True)
    INDUSTRY_CHOICES = [('Banking', 'Banking'), ('Finance', 'Finance'), ('Tech', 'Tech'), ('Entertainment', 'Entertainment'), ('Art', 'Art'), ('E-Commerce', 'E-Commerce')]
    industry = models.CharField(max_length=13, choices=INDUSTRY_CHOICES)
    Privacy = models.BooleanField(default=False) 

    Advertisment= models.BooleanField(default=False)
    gdrp_wording = models.BooleanField(default=False)
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name='publications')
    # isActiveUser = models.ForeignKey('account.login', on_delete = models.CASCADE)
    # user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
 
    def __str__(self):
        return f"{self.Your_Website_Name}"

def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(slug_generator, sender=Post)