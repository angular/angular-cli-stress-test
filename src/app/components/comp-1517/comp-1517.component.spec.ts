/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1517Component } from './comp-1517.component';

describe('Comp1517Component', () => {
  let component: Comp1517Component;
  let fixture: ComponentFixture<Comp1517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
