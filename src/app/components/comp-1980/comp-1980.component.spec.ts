/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1980Component } from './comp-1980.component';

describe('Comp1980Component', () => {
  let component: Comp1980Component;
  let fixture: ComponentFixture<Comp1980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
