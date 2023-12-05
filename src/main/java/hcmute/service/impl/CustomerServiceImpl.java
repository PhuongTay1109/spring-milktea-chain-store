package hcmute.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hcmute.entity.CustomerEntity;
import hcmute.repository.CustomerRepository;
import hcmute.service.ICustomerService;

@Service
public class CustomerServiceImpl implements ICustomerService{
	@Autowired
	CustomerRepository customerRepository;

	public CustomerServiceImpl(CustomerRepository customerRepository) {
		super();
		this.customerRepository = customerRepository;
	}

	@Override
	public Optional<CustomerEntity> findById(Integer id) {
		return customerRepository.findById(id);
	}
}
