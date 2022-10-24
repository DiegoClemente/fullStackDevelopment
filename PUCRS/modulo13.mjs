import {CarroComPlaca} from "./modulo11.mjs";
import {Locadora} from "./modulo12.mjs";

var locadora = new Locadora() 
locadora.adicionaCarro(new CarroComPlaca("DIO-9612"));
locadora.adicionaCarro(new CarroComPlaca("ABC-0123"));
locadora.consultaCarros();

locadora.abasteceCarro(0, 30);
locadora.consultaCarros();

locadora.abasteceCarro(1, 30);
locadora.abasteceCarro(0, 30);
locadora.consultaCarros();

locadora.abasteceCarro(1, 30);
locadora.abasteceCarro(0, 30);
locadora.consultaCarros();