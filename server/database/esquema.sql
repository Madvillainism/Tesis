-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema InsureDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema InsureDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `InsureDB` DEFAULT CHARACTER SET utf8 ;
USE `InsureDB` ;

-- -----------------------------------------------------
-- Table `InsureDB`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(15) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` ENUM("INSURED", "BROKER", "ADMIN") NOT NULL,
  `token` VARCHAR(100) NULL,
  `confirmed` TINYINT NOT NULL DEFAULT 0,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`Broker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`Broker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(12) NOT NULL,
  `secondaryPhone` VARCHAR(12) NULL,
  `email` VARCHAR(45) NOT NULL,
  `idCard` VARCHAR(10) NOT NULL,
  `birthDate` DATE NOT NULL,
  `profilePhoto` VARCHAR(2083) NULL,
  `entryDate` DATE NOT NULL,
  `gender` ENUM("M", "F") NULL,
  `idUser` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Corredor_Usuario1_idx` (`idUser` ASC) ,
  CONSTRAINT `fk_Corredor_Usuario1`
    FOREIGN KEY (`idUser`)
    REFERENCES `InsureDB`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`Insurance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`Insurance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `rif` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(12) NULL,
  `address` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`Policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`Policy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `coverage` DECIMAL(15,5) NOT NULL,
  `payMethod` ENUM('ANUAL', 'MENSUAL') NOT NULL,
  `idInsurance` INT NOT NULL,
  PRIMARY KEY (`id`, `idInsurance`),
  INDEX `fk_Poliza_Aseguradora1_idx` (`idInsurance` ASC) ,
  CONSTRAINT `fk_Poliza_Aseguradora1`
    FOREIGN KEY (`idInsurance`)
    REFERENCES `InsureDB`.`Insurance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`AdjPack`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`AdjPack` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` ENUM("CONTRACT", "CASUALTY", "PAYREPORT") NOT NULL,
  `location` VARCHAR(2083) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`Contract`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`Contract` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nContract` VARCHAR(25) NOT NULL,
  `nReceipt` VARCHAR(25) NULL,
  `emitDate` DATE NOT NULL,
  `validDate` DATE NOT NULL,
  `premium` DECIMAL(15,5) NOT NULL,
  `contractType` ENUM('PARTICULAR', 'COLECTIVO') NOT NULL,
  `idPolicy` INT NOT NULL,
  `idMiddle` INT NULL,
  `idAdjPack` INT NULL,
  PRIMARY KEY (`id`, `nContract`, `idPolicy`),
  INDEX `fk_Contrato_Poliza1_idx` (`idPolicy` ASC) ,
  INDEX `fk_Contrato_Corredor1_idx` (`idMiddle` ASC) ,
  INDEX `fk_Contract_AdjPack1_idx` (`idAdjPack` ASC) ,
  CONSTRAINT `fk_Contrato_Poliza1`
    FOREIGN KEY (`idPolicy`)
    REFERENCES `InsureDB`.`Policy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Contrato_Corredor1`
    FOREIGN KEY (`idMiddle`)
    REFERENCES `InsureDB`.`Broker` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Contract_AdjPack1`
    FOREIGN KEY (`idAdjPack`)
    REFERENCES `InsureDB`.`AdjPack` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`Client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`Client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `companyName` VARCHAR(50) NULL,
  `clientType` ENUM('NATURAL', 'JURIDICO') NOT NULL,
  `birthDate` DATE NOT NULL,
  `entryDate` DATE NOT NULL,
  `gender` ENUM("M", "F") NULL,
  `idCardRif` VARCHAR(12) NOT NULL,
  `profilePhoto` VARCHAR(2083) NULL,
  `phone` VARCHAR(12) NOT NULL,
  `idBroker` INT NOT NULL,
  `idUser` INT NULL,
  `idContract` INT NULL,
  `address` VARCHAR(150) NULL,
  `town` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `idBroker`),
  INDEX `fk_Asegurado_Corredor_idx` (`idBroker` ASC) ,
  INDEX `fk_Asegurado_Usuario1_idx` (`idUser` ASC) ,
  INDEX `fk_Client_Contract1_idx` (`idContract` ASC) ,
  CONSTRAINT `fk_Asegurado_Corredor`
    FOREIGN KEY (`idBroker`)
    REFERENCES `InsureDB`.`Broker` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Asegurado_Usuario1`
    FOREIGN KEY (`idUser`)
    REFERENCES `InsureDB`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Client_Contract1`
    FOREIGN KEY (`idContract`)
    REFERENCES `InsureDB`.`Contract` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`Casualty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`Casualty` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `casualtyDate` DATE NOT NULL,
  `insertDate` DATE NOT NULL,
  `subject` VARCHAR(45) NOT NULL,
  `description` VARCHAR(2000) NULL,
  `idContract` INT NOT NULL,
  `idAdjPack` INT NULL,
  PRIMARY KEY (`id`, `idContract`),
  INDEX `fk_Siniestro_Contrato1_idx` (`idContract` ASC) ,
  INDEX `fk_Casualty_AdjPack1_idx` (`idAdjPack` ASC) ,
  CONSTRAINT `fk_Siniestro_Contrato1`
    FOREIGN KEY (`idContract`)
    REFERENCES `InsureDB`.`Contract` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Casualty_AdjPack1`
    FOREIGN KEY (`idAdjPack`)
    REFERENCES `InsureDB`.`AdjPack` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`PaymentType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`PaymentType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `currency` ENUM('USD', 'BS') NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`PayReport`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`PayReport` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idTypePayment` INT NOT NULL,
  `amount` DECIMAL(15,5) NOT NULL,
  `state` ENUM('EN ESPERA', 'DENEGADO', 'CONFIRMADO') NOT NULL,
  `reference` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `idContract` INT NOT NULL,
  `creationDate` DATE NOT NULL,
  `checkDate` DATE NULL,
  `idAdjPack` INT NULL,
  PRIMARY KEY (`id`, `idTypePayment`, `idContract`),
  INDEX `fk_ReporteDePago_TipoDePago1_idx` (`idTypePayment` ASC) ,
  INDEX `fk_ReporteDePago_Contrato1_idx` (`idContract` ASC) ,
  INDEX `fk_PayReport_AdjPack1_idx` (`idAdjPack` ASC) ,
  CONSTRAINT `fk_ReporteDePago_TipoDePago1`
    FOREIGN KEY (`idTypePayment`)
    REFERENCES `InsureDB`.`PaymentType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ReporteDePago_Contrato1`
    FOREIGN KEY (`idContract`)
    REFERENCES `InsureDB`.`Contract` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PayReport_AdjPack1`
    FOREIGN KEY (`idAdjPack`)
    REFERENCES `InsureDB`.`AdjPack` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`HistoricBalance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`HistoricBalance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `balance` DECIMAL(15,5) NOT NULL,
  `updateDate` DATE NOT NULL,
  `idContract` INT NOT NULL,
  `idPayReport` INT NOT NULL,
  PRIMARY KEY (`id`, `idContract`),
  INDEX `fk_Saldo_Contrato1_idx` (`idContract` ASC) ,
  INDEX `fk_SaldoHistorico_ReporteDePago1_idx` (`idPayReport` ASC) ,
  CONSTRAINT `fk_Saldo_Contrato1`
    FOREIGN KEY (`idContract`)
    REFERENCES `InsureDB`.`Contract` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SaldoHistorico_ReporteDePago1`
    FOREIGN KEY (`idPayReport`)
    REFERENCES `InsureDB`.`PayReport` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `InsureDB`.`AdjFile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `InsureDB`.`AdjFile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `type` ENUM('PRINCIPAL', 'SECUNDARIO') NOT NULL,
  `idAdjPack` INT NOT NULL,
  PRIMARY KEY (`id`, `idAdjPack`),
  INDEX `fk_ArchivoAdj_PaqueteAdj1_idx` (`idAdjPack` ASC) ,
  CONSTRAINT `fk_ArchivoAdj_PaqueteAdj1`
    FOREIGN KEY (`idAdjPack`)
    REFERENCES `InsureDB`.`AdjPack` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
