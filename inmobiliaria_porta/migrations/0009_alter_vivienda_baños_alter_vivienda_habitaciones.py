# Generated by Django 5.0.4 on 2024-05-08 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inmobiliaria_porta', '0008_vivienda_baños_vivienda_habitaciones'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vivienda',
            name='baños',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='habitaciones',
            field=models.IntegerField(default=0),
        ),
    ]
