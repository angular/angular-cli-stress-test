/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp478Component } from './comp-478.component';

describe('Comp478Component', () => {
  let component: Comp478Component;
  let fixture: ComponentFixture<Comp478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
