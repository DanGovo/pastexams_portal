<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    //Roles and Permissions
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_roles');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'users_permissions');
    }

    public function hasRole(...$roles)
    {
        return $this->roles()->whereIn('slug', $roles)->count();
    }

    public function hasPermissionTo(...$permissions)
    {
        return $this->permissions()->whereIn('slug', $permissions)->count() ||
        $this->roles()->whereHas('permissions', function ($q) use ($permissions) {
            $q->whereIn('slug', $permissions);
        })->count();
    }

    public function givePermissionTo(...$permissions)
    {
        $this->permissions()->attach($permissions);
    }

    public function setPermissions(...$permissions)
    {
        $this->permissions()->sync($permissions);
    }

    public function detachPermissions(...$permissions)
    {
        $this->permissions()->detach($permissions);
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
