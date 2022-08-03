from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import savedpdf
from io import BytesIO
from django.core.files import File
from .utils import render_to_pdf

@receiver(post_save, sender=savedpdf)
def generate_obj_pdf(sender, instance_id, **kwargs):
    obj = savedpdf.objects.get(id=instance_id)
    context = {'instance': obj}
    pdf = render_to_pdf('tc.html', context)
    filename = "YourPDF_Order{}.pdf" %(obj.slug)
    obj.pdf.save(filename, File(BytesIO(pdf.content)))