package com.example.javagraphqltutorial.resolver.bank;

import com.example.javagraphqltutorial.domain.bank.Asset;
import com.example.javagraphqltutorial.domain.bank.BankAccount;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Slf4j
@Component
public class AssetResolver {
    private static final ExecutorService executorService = Executors.newFixedThreadPool(
            Runtime.getRuntime().availableProcessors()
    );

    public CompletableFuture<List<Asset>> assets(BankAccount bankAccount) {
        return CompletableFuture.supplyAsync(
                () -> {
                    log.info("Getting assets for bank account id {}", bankAccount.getId());
                    return List.of();
                },
                executorService);
    }
}
