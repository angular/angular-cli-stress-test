/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1843Component } from './comp-1843.component';

describe('Comp1843Component', () => {
  let component: Comp1843Component;
  let fixture: ComponentFixture<Comp1843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
