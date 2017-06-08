/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1602Component } from './comp-1602.component';

describe('Comp1602Component', () => {
  let component: Comp1602Component;
  let fixture: ComponentFixture<Comp1602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
