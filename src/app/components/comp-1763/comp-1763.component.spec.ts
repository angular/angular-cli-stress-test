/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1763Component } from './comp-1763.component';

describe('Comp1763Component', () => {
  let component: Comp1763Component;
  let fixture: ComponentFixture<Comp1763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
