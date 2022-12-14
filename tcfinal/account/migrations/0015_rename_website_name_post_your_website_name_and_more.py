# Generated by Django 4.0.6 on 2022-08-13 01:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0014_post_poli_post_term_alter_post_company_address_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='website_name',
            new_name='Your_Website_Name',
        ),
        migrations.RemoveField(
            model_name='post',
            name='company_address',
        ),
        migrations.RemoveField(
            model_name='post',
            name='policy_effective_date',
        ),
        migrations.RemoveField(
            model_name='post',
            name='website_url',
        ),
        migrations.AddField(
            model_name='post',
            name='Address',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='Email',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='Phone',
            field=models.CharField(max_length=14, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='Policy_Effective_Date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='post',
            name='Your_Website_Url',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='industry',
            field=models.CharField(choices=[('Generic', 'Generic'), ('Finance', 'Finance'), ('Tech', 'Tech'), ('Entertainment', 'Entertainment'), ('Art', 'Art'), ('E-Commerce', 'E-Commerce')], max_length=13),
        ),
    ]
