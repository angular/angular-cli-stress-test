/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2080Component } from './comp-2080.component';

describe('Comp2080Component', () => {
  let component: Comp2080Component;
  let fixture: ComponentFixture<Comp2080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
