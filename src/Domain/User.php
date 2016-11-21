<?php

namespace Baikal\Domain;

use Baikal\Domain\User\Username;
use Baikal\Domain\User\DisplayName;
use Baikal\Domain\User\Email;
use Baikal\Domain\User\Password;

/**
 * Domain model for User within the Baikal system
 */
final class User
{
    /**
     * @var Username
     */
    private $username;

    /**
     * @var DisplayName
     */
    private $displayName;

    /**
     * @var Email
     */
    private $email;

    /**
     * @var Password
     */
    private $password;

    /**
     * User constructor.
     *
     * @param Username $username
     * @param DisplayName $displayName
     * @param Email $email
     * @param Password $password
     */
    private function __construct(Username $username, DisplayName $displayName, Email $email, Password $password)
    {
        $this->username = $username;
        $this->displayName = $displayName;
        $this->email = $email;
        $this->password = $password;
    }

    /**
     * Construct User object from array structure
     *
     * @param array $data
     * @return User
     */
    static function fromArray(array $data)
    {
        return new self(
            Username::fromString($data['username']),
            DisplayName::fromString($data['displayName']),
            Email::fromString($data['email']),
            Password::fromString($data['password'])
        );
    }

    /**
     * @return Username
     */
    function username()
    {
        return $this->username;
    }

    /**
     * @return DisplayName
     */
    function displayName()
    {
        return $this->displayName;
    }

    /**
     * @return Email
     */
    function email()
    {
        return $this->email;
    }

    /**
     * @return Password
     */
    function password()
    {
        return $this->password;
    }

    function mailtoUri()
    {
        return sprintf("%s <%s>", $this->displayName(), $this->email());
    }
}
