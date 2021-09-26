package com.example.javagraphqltutorial.context.dataloader;

import java.math.BigDecimal;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import com.example.javagraphqltutorial.service.BalanceService;
import lombok.RequiredArgsConstructor;
import org.dataloader.BatchLoaderEnvironment;
import org.dataloader.DataLoader;
import org.dataloader.DataLoaderRegistry;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoaderRegistryFactory {

    private final BalanceService balanceService;

    public static final String BALANCE_DATA_LOADER = "BALANCE_DATA_LOADER";
//    private static final Executor balanceThreadPool = ExecutorFactory.newExecutor();
    private static final Executor balanceThreadPool = Executors
        .newFixedThreadPool(Runtime.getRuntime().availableProcessors());

    public DataLoaderRegistry create(String userId) {
        var registry = new DataLoaderRegistry();
        registry.register(BALANCE_DATA_LOADER, createBalanceDataLoader(userId));
        return registry;
    }

    private DataLoader<UUID, BigDecimal> createBalanceDataLoader(String userId) {
        return DataLoader
                .newMappedDataLoader(( bankAccountIds, environment) ->
                        CompletableFuture.supplyAsync(() ->
                                        balanceService.getBalanceFor((Map)environment.getKeyContexts(), userId),
                                balanceThreadPool));
    }

}
