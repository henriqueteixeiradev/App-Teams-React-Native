import { useState, useEffect } from "react";
import { Alert } from "react-native";
import * as S from "./styles";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HightLight } from "@components/HightLight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();

  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (
      newPlayerName.trim() === undefined ||
      newPlayerName.trim() === null ||
      newPlayerName.trim() === ""
    ) {
      return Alert.alert("Ooops", "Informe o nome da pessoa para adicionar.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Ooops", error.message);
      } else {
        Alert.alert("Ooops", "Não foi possível adicionar a pessoa.");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Ooops", "Não foi possível carregar os jogadores.");
    }
  }

  useEffect(() => {
    console.log("useEffect");

    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showbackButton />
      <HightLight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B", "Time C"]}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
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
