/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp732Component } from './comp-732.component';

describe('Comp732Component', () => {
  let component: Comp732Component;
  let fixture: ComponentFixture<Comp732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
