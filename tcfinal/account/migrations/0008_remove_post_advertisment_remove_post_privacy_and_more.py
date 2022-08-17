# Generated by Django 4.0.5 on 2022-07-30 11:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0007_alter_post_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='Advertisment',
        ),
        migrations.RemoveField(
            model_name='post',
            name='Privacy',
        ),
        migrations.RemoveField(
            model_name='post',
            name='country',
        ),
        migrations.RemoveField(
            model_name='post',
            name='duration',
        ),
        migrations.RemoveField(
            model_name='post',
            name='industry',
        ),
        migrations.RemoveField(
            model_name='post',
            name='name',
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='publications', to=settings.AUTH_USER_MODEL),
        ),
    ]
