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
class Profile(models.Model):
     user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
     bio = models.TextField()

     def __str__(self):
        return str(self.user)

class Post(models.Model):
    # current_user = models.ForeignKey(User(), null=True, on_delete=models.CASCADE)
    website_name = models.CharField(max_length=100, null=True)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    website_url = models.URLField(max_length=100, null=True, blank=True)
    company_address = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=100)
    policy_effective_date = models.CharField(max_length=100, null=True, blank=True)
    INDUSTRY_CHOICES = [('Generic', 'Generic'), ('Finance', 'Finance'), ('Tech', 'Tech'), ('Entertainment', 'Entertainment'), ('E-commerce', 'E-Commerce'),]
    industry = models.CharField(max_length=13, choices=INDUSTRY_CHOICES, default='Generic')
    #TCCHOICE = [('Terms-Condition', 'Terms-Condition'), ('Privacy-Policy', 'Privacy-Policy')]
    poli = models.BooleanField(default=False)
    term = models.BooleanField(default=False)
    Privacy = models.BooleanField(default=False) 
    Advertisment= models.BooleanField(default=False)
    gdrp_wording = models.BooleanField(default=False)
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE, related_name='publications')
    # isActiveUser = models.ForeignKey('account.login', on_delete = models.CASCADE)
    # user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
 
    def __str__(self):
        return f"{self.website_name}"

def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(slug_generator, sender=Post)