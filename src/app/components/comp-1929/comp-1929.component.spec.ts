/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1929Component } from './comp-1929.component';

describe('Comp1929Component', () => {
  let component: Comp1929Component;
  let fixture: ComponentFixture<Comp1929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
