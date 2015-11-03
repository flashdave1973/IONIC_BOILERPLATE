Layouts describe how app page is structured. They contain `ui-view`s that different
states using this layout will plug in their templates to. Layouts are usually inserted
by abstract states to become available to the concrete states that derive from those
abstracts. An abstract state can have child states but can not get activated itself. 
An 'abstract' state is simply a state that can't be transitioned to. 
It is activated implicitly when one of its descendants are activated