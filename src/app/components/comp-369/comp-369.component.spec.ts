/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp369Component } from './comp-369.component';

describe('Comp369Component', () => {
  let component: Comp369Component;
  let fixture: ComponentFixture<Comp369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
