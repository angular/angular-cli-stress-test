/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1578Component } from './comp-1578.component';

describe('Comp1578Component', () => {
  let component: Comp1578Component;
  let fixture: ComponentFixture<Comp1578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
