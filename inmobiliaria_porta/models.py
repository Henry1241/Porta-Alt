from django.db import models

# Create your models here.
class empleados(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.TextField()

class viviendas(models.Model):
    id = models.AutoField(primary_key=True)
    fechaInicio = models.TextField()
    fechaTermino = models.TextField()
    empresa = models.TextField()
    agente = models.TextField()
    ocultarDir = models.TextField()
    exclusivo = models.TextField()
    titulo = models.TextField()
    cometario = models.TextField()
    tipoVivienda = models.TextField()
    usoActual = models.TextField()
    usoPermitido = models.TextField()
    condicionFisica = models.TextField()
    precioVenta = models.TextField()
    precioRenta = models.TextField()
    precioMinimo = models.TextField()
    precioPromedio = models.TextField()
    precioMaximo = models.TextField()
    comision1 = models.TextField()
    ganancia1 = models.TextField()
    comision2 = models.TextField()
    ganancia2 = models.TextField()
    disponibilidad = models.TextField()
    claseInmueble = models.TextField()
    numeroFrentes = models.TextField()
    medidaTerreno = models.TextField()
    m2Terreno = models.TextField()
    construccionN1 = models.TextField()
    construccionN2 = models.TextField()
    construccionN3 = models.TextField()
    gravamen = models.TextField()
    valorGravamen = models.TextField()
    valorSegunAvaluo = models.TextField()
    operacion = models.TextField()
    condicionPago = models.TextField()
    aceptaInfonavit = models.TextField()
    aceptaFovisste = models.TextField()
    propietario = models.TextField()
    claveCastratal = models.TextField()
    lote = models.TextField()
    manzana = models.TextField()
    cuentaAgua = models.TextField()
    autosEst = models.TextField()
    autosIndep = models.TextField()
    estacionamiento = models.TextField()
    cocheraElectrica = models.TextField()
    patio = models.TextField()
    asador = models.TextField()
    fuentes = models.TextField()
    jacuzzi = models.TextField()
    alberca = models.TextField()
    jardin = models.TextField()
    bodega = models.TextField()
    cisterna = models.TextField()
    tinaco = models.TextField()
    acCentral = models.TextField()
    proteccionVentana = models.TextField()
    persianaCortina = models.TextField()
    hidroneumatico = models.TextField()
    amueblado = models.TextField()
    piso1 = models.TextField()
    piso2 = models.TextField()
    piso3 = models.TextField()
    alarma = models.TextField()
    uriGoogleMaps = models.TextField()
    cocinaIntegral = models.TextField()
    vitropiso = models.TextField()
    closet = models.TextField()
    barda = models.TextField()
    patioEncementado = models.TextField()
    equipada = models.TextField()
    pais = models.TextField()
    estado = models.TextField()
    municipio = models.TextField()
    ciudad = models.TextField()
    colonia = models.TextField()
    codigoPostal = models.TextField()
    calle = models.TextField()
    numExterior = models.TextField()
    numInterior = models.TextField()
    entreCalle1 = models.TextField()
    entreCalle2 = models.TextField()
    nombreComplejo = models.TextField()
    escrituracion = models.TextField()
    avaluo = models.TextField()
    impuestos = models.TextField()
    otros = models.TextField()
    total = models.TextField()
    imagen = models.TextField()
