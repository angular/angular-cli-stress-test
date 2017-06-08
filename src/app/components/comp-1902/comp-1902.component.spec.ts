/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1902Component } from './comp-1902.component';

describe('Comp1902Component', () => {
  let component: Comp1902Component;
  let fixture: ComponentFixture<Comp1902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
