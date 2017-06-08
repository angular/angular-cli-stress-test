/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1883Component } from './comp-1883.component';

describe('Comp1883Component', () => {
  let component: Comp1883Component;
  let fixture: ComponentFixture<Comp1883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
