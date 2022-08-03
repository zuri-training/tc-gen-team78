from django.db import models
from django.contrib.auth.models import User
from io import BytesIO
from django.core.files import File
from .utils import render_to_pdf
from django.utils import timezone
from django.urls import reverse

# Create your models here.

Opt_choice = [
    ('Y', 'Yes'),
    ('N', 'Nes'),
]

class usercd(models.Model):
    email = models.EmailField()
    cname = models.TextField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    
    #q1 = models.CharField(max_length=3, choices=Opt_choice)
    
    def __str__(self):
        return self.cname


class savedpdf(models.Model):
    slug = models.CharField(max_length=120)
    pdf = models.FileField(upload_to='pdfs/',null=True, blank=True )


# to generate and save your pdf to your model

def generate_obj_pdf(instance_id):
    obj = savedpdf.objects.get(id=instance_id)
    context = {'instance': obj}
    pdf = render_to_pdf('tc.html', context)
    filename = "YourPDF_Order{}.pdf" %(obj.slug)
    obj.pdf.save(filename, File(BytesIO(pdf.content)))
    
    
class questions(models.Model):
    quest = models.CharField(max_length=120)
    
class useri(models.Model):
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    cname = models.CharField(max_length=100, default="yee")
    websitename = models.CharField(max_length=100, default="yees") 
    
    def __str__(self):
        return self.cname
    
    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})
     
# class answer(models.Model):
#     ans = 
#     pass

