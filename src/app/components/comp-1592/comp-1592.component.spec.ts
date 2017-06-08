/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1592Component } from './comp-1592.component';

describe('Comp1592Component', () => {
  let component: Comp1592Component;
  let fixture: ComponentFixture<Comp1592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
