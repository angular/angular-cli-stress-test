/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1838Component } from './comp-1838.component';

describe('Comp1838Component', () => {
  let component: Comp1838Component;
  let fixture: ComponentFixture<Comp1838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
