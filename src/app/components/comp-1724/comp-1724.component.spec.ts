/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1724Component } from './comp-1724.component';

describe('Comp1724Component', () => {
  let component: Comp1724Component;
  let fixture: ComponentFixture<Comp1724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
