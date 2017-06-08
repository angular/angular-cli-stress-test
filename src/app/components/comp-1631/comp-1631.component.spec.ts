/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1631Component } from './comp-1631.component';

describe('Comp1631Component', () => {
  let component: Comp1631Component;
  let fixture: ComponentFixture<Comp1631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
