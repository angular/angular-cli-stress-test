/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1820Component } from './comp-1820.component';

describe('Comp1820Component', () => {
  let component: Comp1820Component;
  let fixture: ComponentFixture<Comp1820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
