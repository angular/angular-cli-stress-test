/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3022Component } from './comp-3022.component';

describe('Comp3022Component', () => {
  let component: Comp3022Component;
  let fixture: ComponentFixture<Comp3022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
