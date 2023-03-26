import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { Input } from "@components/Input";
import * as S from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState<string[]>([
    "Henrique",
    "Iolanda",
    "Karolyna",
    "Mikael",
    "Quitéria",
    "Bruno",
    "Buluga",
  ]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  return (
    <S.Container>
      <Header showbackButton />
      <HightLight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={[
            "Time A",
            "Time B",
            "Time C",
            "Time D",
            "Time E",
            "Time F",
            "Time G",
          ]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="secondary" />
    </S.Container>
  );
}
