# Generated by Django 5.0.4 on 2024-05-08 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inmobiliaria_porta', '0006_vivienda_tipovivienda'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vivienda',
            name='acCentral',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='aceptaFovisste',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='aceptaInfonavit',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='alarma',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='amueblado',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='autosEst',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='autosIndep',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='cuentaAgua',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='disponibilidad',
            field=models.CharField(default='Sin especificar', max_length=100),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='hidroneumatico',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='imagen',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='numeroFrentes',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='ocultarDir',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='patioEncementado',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='persianaCortina',
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name='vivienda',
            name='proteccionVentana',
            field=models.BooleanField(),
        ),
    ]