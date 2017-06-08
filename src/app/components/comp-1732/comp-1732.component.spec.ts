/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1732Component } from './comp-1732.component';

describe('Comp1732Component', () => {
  let component: Comp1732Component;
  let fixture: ComponentFixture<Comp1732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
