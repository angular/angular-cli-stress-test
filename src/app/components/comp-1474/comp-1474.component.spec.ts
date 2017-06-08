/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1474Component } from './comp-1474.component';

describe('Comp1474Component', () => {
  let component: Comp1474Component;
  let fixture: ComponentFixture<Comp1474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
