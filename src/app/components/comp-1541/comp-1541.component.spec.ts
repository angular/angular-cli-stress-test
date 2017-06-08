/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1541Component } from './comp-1541.component';

describe('Comp1541Component', () => {
  let component: Comp1541Component;
  let fixture: ComponentFixture<Comp1541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
