/** @jest-environment jsdom */
import { expect, jest, test, describe, beforeEach, it } from '@jest/globals';
import { throttle } from '../src/index';
import { afterEach } from 'node:test';
import { Jest } from '@jest/environment';

describe('Testing Throttle: comprobando la ejecucion o no simultanea. Esta prueba se basa en el umbral preestablecido del delay', () => {
  type Arguments = (...args : any[]) => any;
  let fnCallback: Arguments;
  let time: Jest;
  let resultThrottle: Arguments;

  beforeEach( () =>{ 
   fnCallback = jest.fn();
   resultThrottle = throttle(fnCallback, 400);//umbral del delay
   time = jest.useFakeTimers();
   jest.spyOn(global, 'setTimeout');
 });

 //reinicia los temporizadores
 afterEach(() => {
   jest.clearAllTimers();
 })


  it('Varias llamadas al metodo Throttle, dando como resultado solo 1 ejecucion',()=>{
    resultThrottle();
    resultThrottle();
    resultThrottle();
    expect(fnCallback).toHaveBeenCalled();
    expect(fnCallback).toHaveBeenCalledTimes(1);
  });


  it('Llamadas al metodo Throttle, añadiendo un retardo superior a su umbral , como resultado recibe 2 respuestas', () =>{
    resultThrottle();
    time.advanceTimersByTime(800);
    resultThrottle();
    time.advanceTimersByTime(1200);
    expect(fnCallback).toHaveBeenCalledTimes(2);
  });

  it('Llamadas al metodo Throttle, añadiendo un retardo inferior a su umbral, recibe 1 respuesta', () => {
    resultThrottle();
    time.advanceTimersByTime(250);
    resultThrottle();
    time.advanceTimersByTime(150);
    expect(fnCallback).toHaveBeenCalledTimes(1);
  });

  
  it('Simular el paso del tiempo despues de una llamada, ejecutar otra y como resultado se llamaran 2 veces, impidiendo la ejecucion simultanea',()=>{
    resultThrottle();
    jest.runOnlyPendingTimers();//simulando el paso del tiempo
    expect(fnCallback).toHaveBeenCalledTimes(1);
    resultThrottle();
    expect(fnCallback).toHaveBeenCalledTimes(2);
  });

  

})
