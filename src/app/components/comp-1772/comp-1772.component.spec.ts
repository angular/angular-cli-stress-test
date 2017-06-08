/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1772Component } from './comp-1772.component';

describe('Comp1772Component', () => {
  let component: Comp1772Component;
  let fixture: ComponentFixture<Comp1772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
