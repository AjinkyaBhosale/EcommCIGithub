<?php

namespace GruntPhploc;

class HelloWorld
{

    private $aPrivateVar;

    public function __construct($myVar)
    {
        $this->aPrivateVar = $myVar;
    }

    public function sayHello()
    {
        return "Hello";
    }
}
