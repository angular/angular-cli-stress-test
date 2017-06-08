/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1302Component } from './comp-1302.component';

describe('Comp1302Component', () => {
  let component: Comp1302Component;
  let fixture: ComponentFixture<Comp1302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
