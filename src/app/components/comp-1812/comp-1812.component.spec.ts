/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1812Component } from './comp-1812.component';

describe('Comp1812Component', () => {
  let component: Comp1812Component;
  let fixture: ComponentFixture<Comp1812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
