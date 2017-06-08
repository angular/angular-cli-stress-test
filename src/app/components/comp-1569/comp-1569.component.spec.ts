/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1569Component } from './comp-1569.component';

describe('Comp1569Component', () => {
  let component: Comp1569Component;
  let fixture: ComponentFixture<Comp1569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
