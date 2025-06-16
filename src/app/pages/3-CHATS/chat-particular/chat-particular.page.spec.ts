import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatParticularPage } from './chat-particular.page';

describe('ChatParticularPage', () => {
  let component: ChatParticularPage;
  let fixture: ComponentFixture<ChatParticularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatParticularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
