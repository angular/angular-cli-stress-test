/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1448Component } from './comp-1448.component';

describe('Comp1448Component', () => {
  let component: Comp1448Component;
  let fixture: ComponentFixture<Comp1448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
