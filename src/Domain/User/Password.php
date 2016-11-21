<?php

namespace Baikal\Domain\User;

final class Password
{
    /**
     * @var string
     */
    private $password;

    /**
     * @param string $password
     */
    private function __construct($password)
    {
        $this->password = $password;
    }

    /**
     * @param string $password
     * @return Password
     */
    static function fromString($password)
    {
        return new self($password);
    }

    /**
     * @return string
     */
    function __toString()
    {
        return $this->password;
    }

    /**
     * Obfuscate the password property from debug data
     * since it contains sensitive data
     *
     * @return array
     */
    function __debugInfo()
    {
        return [
            'password' => '*** obfuscated ***',
        ];
    }
}
