# Generated by Django 5.0.4 on 2024-05-08 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inmobiliaria_porta', '0007_alter_vivienda_accentral_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='vivienda',
            name='baños',
            field=models.IntegerField(default='Sin especificar'),
        ),
        migrations.AddField(
            model_name='vivienda',
            name='habitaciones',
            field=models.IntegerField(default='Sin especificar'),
        ),
    ]
