package hcmute.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hcmute.entity.UserEntity;
import hcmute.entity.UserRoleEntity;
import hcmute.repository.UserRepository;
import hcmute.repository.UserRoleRepository;
import hcmute.service.IUserRoleService;

@Service
public class UserRoleServiceImpl implements IUserRoleService {
    @Autowired
    UserRoleRepository userRoleRepo;

    @Autowired
    UserRepository userRepo;

    public List<UserRoleEntity> findRolesOfAdministrators() {
        List<UserEntity> accounts = userRepo.getAdministrators();
        return userRoleRepo.authoritiesOf(accounts);
    }

    @Override
    public List<UserRoleEntity> findAll() {
        return userRoleRepo.findAll();
    }

    @Override
    public UserRoleEntity create(UserRoleEntity auth) {
        return userRoleRepo.save(auth);
    }

    @Override
    public void delete(Integer id) {
        userRoleRepo.deleteById(id);
    }
}
