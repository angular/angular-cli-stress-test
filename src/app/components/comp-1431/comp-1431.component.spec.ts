/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1431Component } from './comp-1431.component';

describe('Comp1431Component', () => {
  let component: Comp1431Component;
  let fixture: ComponentFixture<Comp1431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
