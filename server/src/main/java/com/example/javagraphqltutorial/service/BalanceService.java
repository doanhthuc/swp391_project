package com.example.javagraphqltutorial.service;

import java.math.BigDecimal;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import com.example.javagraphqltutorial.domain.bank.BankAccount;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class BalanceService {

    public Map<UUID, BigDecimal> getBalanceFor(Map<UUID, BankAccount> bankAccountIds, String userId) {
        log.info("Requesting batch bank account ids: {} for user Id: {}", bankAccountIds, userId);

        var ids = bankAccountIds.keySet();

        return Map.of(
                UUID.fromString("c6aa269a-812b-49d5-b178-a739a1ed74cc"), BigDecimal.ONE,
                UUID.fromString("48e4a484-af2c-4366-8cd4-25330597473f"), new BigDecimal("23431.22"));
    }
}