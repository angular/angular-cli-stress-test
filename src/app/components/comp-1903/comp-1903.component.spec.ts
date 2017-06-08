/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1903Component } from './comp-1903.component';

describe('Comp1903Component', () => {
  let component: Comp1903Component;
  let fixture: ComponentFixture<Comp1903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
